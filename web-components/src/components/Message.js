const template = document.createElement('template');
template.innerHTML = `
<style>
    .message-one{
        display: flex;
        flex-flow: row nowrap;
        float: right;
        border-radius: 8px;
        padding: 8px;
        max-width: 100%;
        word-break: break-word;
        background-color: #2E3242;
        margin: 10px;
    }
      .data{
        color: #fff;
   }
    .time{
        font-size: 10px;
        padding: 3px 7px;
        color: #999;
        align-self: flex-end;
    }
    .name{
        display: none;
    }
    
</style>
  <div class="message-one">
    <div class='name'></div>
    <div class='time'></div>
    <div class='data'></div>
  </div>
`;


class MessageOne extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$message = this._shadowRoot.querySelector('.message-one');

    this.$name = this._shadowRoot.querySelector('.name');
    this.$data = this._shadowRoot.querySelector('.data');
    this.$time = this._shadowRoot.querySelector('.time');
  }

  static get observedAttributes() {
    return ['name', 'data', 'time'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'data':
        this.$data.innerText = newValue;
        break;
      case 'name':
        this.$name.innerHTML = newValue;
        break;
      case 'time':
        this.$time.innerHTML = newValue;
        break;
      default:
        break;
    }
  }
}

customElements.define('message-one', MessageOne);
