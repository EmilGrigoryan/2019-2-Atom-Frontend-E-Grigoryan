const template = document.createElement('template');
template.innerHTML = `
<style>
    .wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: auto;
        align-content: flex-start;
        overflow-y: auto;
        background-color: #1D2234;
    }

    .wrap message-form{
      position: absolute;
      z-index: 0;
    }

    .wrap .message_list {
        display: flex;
        flex-direction: column;
        flex: auto;
        align-content: flex-start;
        overflow-y: auto
    }
    ::-webkit-scrollbar{
        width: 0px;
    }
    
    input[type=submit] {
        visibility: visible;
    }

    .dialogs {
        width: 100%;
        height: 100%;
        color: #FFFFFF;
        z-index: 0;
        display: flex;
        flex-direction: column;
    }
    .buttonNew {
        position: absolute;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        opacity: 0.6;
        background-color: #61A0C4;
        border-radius: 30px;
    }
    .buttonNew:hover {
        opacity: 1.0;
        animation: none;
    }

    .header {
      width: 100%;
      z-index: 1;
    }

    message-form {
      display: none;
    }
    message-form.apear {
      z-index: 1;
      display: flex;
    }
    
    message-form.disapear{
      display: none;
      
    }

      }

</style>
<div class='wrap'>
  <div class='header'>
      <header-chat>
      </header-chat>
  </div>
    <div class='dialogs'>
    </div>
  <div class="buttonNew">
  </div>
  <message-form></message-form>
</div>



`;


class Dialogs extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$dialogs = this.shadowRoot.querySelector('.dialogs');
    this.$chat = this.shadowRoot.querySelector('message-form');
  }


  dialogPush() {
    let messageBuf = JSON.parse(localStorage.getItem('DialogIDs'));
    if (!messageBuf) {
      messageBuf = [];
    }
    const time = new Date();
    messageBuf.push(time.getTime());
    localStorage.setItem('DialogIDs', JSON.stringify(messageBuf));
    const dialogBuffer = {
      Name: 'Дженнифер Эшли',
      Time: '13:00',
    };
    localStorage.setItem(`DialogId_${time.getTime()}`, JSON.stringify([dialogBuffer, []]));
  }

  parseMessage(item, update = false) {
    const Id = (!update) ? `DialogId_${item}` : item;
    const messages = JSON.parse(localStorage.getItem(Id));
    const { length } = messages[1];
    let lastdata = 'Cooбщений нет';
    let time = '';
    if (length) {
      lastdata = messages[1][length - 1].data;
      time = messages[1][length - 1].time;
    }
    if (update) {
      return [lastdata, time];
    }
    this._createDialog('messages[0].avatar', messages[0].Name, lastdata, time, 'status', Id);
  }


  dialogLoad() {
    const messageArray = JSON.parse(localStorage.getItem('DialogIDs'));
    if (messageArray) {
      messageArray.forEach((item) => {
        this.parseMessage(item);
      });
      return;
    }
    localStorage.setItem('DialogIDs', JSON.stringify([]));
  }


  _createDialog(avatar, name, lastdata, timeMes, status, id) {
    const dialogBuffer = document.createElement('dialog-object');
    dialogBuffer.setAttribute('dialogid', id);
    dialogBuffer.setAttribute('Time', timeMes);
    dialogBuffer.setAttribute('LastMessage', lastdata);
    dialogBuffer.setAttribute('Name', name);
    dialogBuffer.addEventListener('click', () => this.openDialog(id));
    this.$dialogs.appendChild(dialogBuffer);
  }

  openDialog(id) {
    this.$chat.setAttribute('dialogID', id);
    this.$chat.classList.remove('disapear');
    this.$chat.classList.add('apear');
    this.$chat.loadMessages();
    this.$chat.$header.addEventListener('clickBack', () => this.closeDialog());
    this.$chat.addEventListener('onSubmit', () => this.onSendingMessage(id));
  }

  closeDialog() {
    this.$chat.classList.remove('apear');
    this.$chat.classList.add('disapear');
  }

  connectedCallback() {
    this.dialogLoad();
  }


  onSendingMessage(id) {
    this.dialogUpdate(id);
  }

  dialogUpdate(dialogID) {
    const elem = this.$dialogs.querySelector(`dialog-object[dialogid="${dialogID}"]`);
    // this.$dialogs.insertBefore(elem, this.$dialogs.firstChild);
    // this.$dialogs.appendChild(elem, this.$dialogs.firstChild);
    const buffer = this.parseMessage(dialogID, true);
    elem.setAttribute('lastmessage', buffer[0]);
    elem.setAttribute('time', buffer[1]);
  }
}
customElements.define('dialog-list', Dialogs);
