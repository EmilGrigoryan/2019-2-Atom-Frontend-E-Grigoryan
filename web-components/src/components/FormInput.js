const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            margin 0, 0;
            display: flex;
            flex-direction: row;
            height: 45px;
            box-sizing: border-box;
            background-color: #2E3242 ;
        }
        input {
            border: 0;
            outline: 0;
            width: 100%;
            height: 100%;    
            background-color: transparent;
        }
        .pin {
            height: 28.px;
            width: 30px;
            margin: 8px 15px;
            background: url(https://image.flaticon.com/icons/svg/116/116312.svg);
            background-repeat: no-repeat;

        }

    </style>
      <div class='pin'></div>
      <input type="text" style="color:#ffffff">

`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$input = this.shadowRoot.querySelector('input');
  }


  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value') {
      this.$input.value = '';
    } else {
      this.$input.setAttribute(name, newValue);
    }
  }

  get value() {
    return this.$input.value;
  }
}

window.customElements.define('form-input', FormInput);
