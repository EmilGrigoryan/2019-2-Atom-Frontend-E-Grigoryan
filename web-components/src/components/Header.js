const template = document.createElement('template');
template.innerHTML = `
<style>

    .data {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-conten: center;
        align-items: center;
        color: #ffffff;
        
    }
    
    
</style>

    <div class='data'> 
        <div class='name'>Emil</div>
        <div class='online'>last seen recently</div>
    </div>

`;


class HeaderMess extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('header-mess', HeaderMess);
