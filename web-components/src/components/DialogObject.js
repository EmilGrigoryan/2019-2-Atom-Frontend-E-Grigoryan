const template = document.createElement('template');
template.innerHTML = `
<style>
    .wrap {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 70px;
    }


    .avatar {
        display: flex;
        width: 60px;
        height: 60px;
        border-radius: 50px;
        margin: 0 12px;
        flex-shrink: 0;
        flex-grow: 0;
        background: url(images/boss.svg);
      }

      .wrap .avatar {
        align-self: center;
      }

    .InformationBlock {
        width: 100%;
        display: flex; 
        flex-direction: row;
        flex-grow: 1 0;
    }

    .PersonalInformation {
        width: 100%;
        display: flex; 
        flex-direction: column;
    }

    .AdditionalInformation {
        width: 10%;
        display: flex; 
        flex-direction: column;
    }

    .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 35px;
    }
    

    .lastmessage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 35px;
    }

    .lastmessage p {
        color: #a0a0a0;
        font-size: 90%;
    }


    .time {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 35px;
    }

    .time p {
        color: #a0a0a0;
        font-size: 90%;
    }

    .status {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 35px;
        background: url(images/checkmark.png);
        background-repeat: no-repeat;
        background-size: 20%;
    }



</style>
<div class='wrap'>
    <div class="avatar"></div>
    <div class='InformationBlock'>
        <div class='PersonalInformation'>
            <div class='name'>
                <p></p>
            </div>
            <div class='lastmessage'>
                <p></p>
            </div>
        </div>
        <div class='AdditionalInformation'>
            <div class='time'>
                <p></p>
            </div>
            <div class='status'>
            </div>
        </div>
    </div>
</div>




`;

class DialogObject extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$Name = this.shadowRoot.querySelector('.name p');
    this.$LastMessage = this.shadowRoot.querySelector('.lastmessage p');
    this.$Time = this.shadowRoot.querySelector('.time p');
    this.$Status = this.shadowRoot.querySelector('.status p');
  }

  static get observedAttributes() {
    return ['avatar', 'name', 'lastmessage', 'time', 'status', 'dialogid'];
  }


  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'avatar':
        break;
      case 'name':
        this.setName(newValue);
        break;
      case 'lastmessage':
        this.setLastMessage(newValue);
        break;
      case 'time':
        this.setTime(newValue);
        break;
      case 'status':
        break;
      case 'dialogid':
        this.dialogid = newValue;
        break;
      default:
        break;
    }
  }

  setName(value) {
    this.$Name.innerText = value;
  }

  setLastMessage(value) {
    this.$LastMessage.innerText = value;
  }

  setTime(value) {
    this.$Time.innerText = value;
  }
}

customElements.define('dialog-object', DialogObject);
