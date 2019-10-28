const template = document.createElement('template');
template.innerHTML = `
    <style>
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }    

        :host {
            width: 100%;
            height: 100%;
            background-color: #1D2234 ;
            display: flex;
            flex-direction: column;
        }
        .header{
            width: 100%;
            background-color: #29384B;
            z-index: 1;
        }
        .dialog {
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
            flex: auto;
            align-content: flex-end;
            overflow-y: auto;
        }
        
        .messages{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-end;
            flex-direction: column;
        }

        ::-webkit-scrollbar{
            width: 0px;
        }

        
      
    </style>
    
        <div class='header'>
            <header-mess>
            </header-mess>
        </div>
    <div class='dialog'>
        <div class='messages'>
        </div>
    </div>
    <form>
        <form-input name="message-text" placeholder="Write a message.."></form-input>
    </form>
`;


class MessageForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$messages = this._shadowRoot.querySelector('.messages');
    this.$header = this._shadowRoot.querySelector('header-mess');
    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.$input.value.length > 0) {
      const timeMes = this.getTimeStr();
      this._createMessage('EG', this.$input.value, timeMes);
      const messageObj = {
        name: 'EG',
        data: this.$input.value,
        time: timeMes,
      };
      const messageBuf = JSON.parse(localStorage.getItem(this.$dialogid));
      messageBuf[1].push(messageObj);
      localStorage.setItem(this.$dialogid, JSON.stringify(messageBuf));
      this.$input.setAttribute('value', '');
    }
    this.dispatchEvent(new Event('onSubmit'));
  }


  static get observedAttributes() {
    return ['dialogid'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$dialogid = newValue;
  }


  getTimeStr() {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}`;
  }

  _createMessage(name, data, timeMes) {
    const messageBuffer = document.createElement('message-one');
    messageBuffer.setAttribute('time', timeMes);
    messageBuffer.setAttribute('data', data);
    messageBuffer.setAttribute('name', 'EG');
    this.$messages.appendChild(messageBuffer);
  }

  loadMessages() {
    const messageArray = JSON.parse(localStorage.getItem(this.$dialogid));
    this.$header.$name.innerText = messageArray[0].Name;
    if (messageArray[1]) {
      this.$messages.innerHTML = '';
      messageArray[1].forEach((item) => {
        this._createMessage(item.name, item.data, item.time);
      });
      return;
    }
    localStorage.setItem(this.$dialogid, JSON.stringify([]));
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
