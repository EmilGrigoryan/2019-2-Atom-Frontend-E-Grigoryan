const template = document.createElement('template');
template.innerHTML = `
    <style>
        
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
        
        input[type=submit] {
            visibility: visible;
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
        <div class="result"></div>
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
    this.$form.addEventListener('submit', this._onSendingMessage.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
  }

  _onSendingMessage(event) {
    event.preventDefault();
    if (this.$input.value.length > 0) {
      const timeMes = this.getTimeStr();
      const key = this.getKey();
      const $message = this._createMessage('EG', this.$input.value, timeMes, key);
      this.$messages.appendChild($message);
      const messageObj = {
        name: 'EG',
        data: this.$input.value,
        time: timeMes,
      };
      localStorage.setItem(key, JSON.stringify(messageObj));
      // Очистил ввод
      this.$input.setAttribute('value', '');
    }
  }

  getKey() {
    const time = new Date();
    return time.getTime();
  }

  getTimeStr() {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}`;
  }

  _createMessage(name, data, timeMes, messageId) {
    const messageBuffer = document.createElement('message-one');
    messageBuffer.setAttribute('messageId', messageId);
    messageBuffer.setAttribute('time', timeMes);
    messageBuffer.setAttribute('data', data);
    messageBuffer.setAttribute('name', 'EG');
    return messageBuffer;
  }

  connectedCallback() {
    const keyBuffer = Object.keys(localStorage).sort();
    keyBuffer.forEach((key) => {
        if (key) {
            const msgObj = JSON.parse(localStorage.getItem(key));
            const $message = this._createMessage(msgObj.name, msgObj.data, msgObj.time, key);
            this.$messages.appendChild($message);
          }
    });
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
