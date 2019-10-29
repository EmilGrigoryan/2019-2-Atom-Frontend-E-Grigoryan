const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
    width: 100%;
    height: 100%;
    background-color: #1D2234;
    display: flex;
    flex-direction: column;
}

.messages {
  width: 100%;
  height: 100%;
  z-index: 1;
}

</style>


<div class='messages'>
  <dialog-list></dialog-list>
</div>

`;

class Chat extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$dialogList = this.shadowRoot.querySelector('dialog-list');
    this.$chatForm = this.shadowRoot.querySelector('message-form');
  }
}

customElements.define('chat-component', Chat);
