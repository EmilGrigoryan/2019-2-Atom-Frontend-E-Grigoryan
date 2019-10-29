const template = document.createElement('template');
template.innerHTML = `
<style>
.wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #2E3242;
    height: 45px;
    width: 100%;
}

.wrap .burger {
    height: 35px;
    width: 35px;
    margin: 5px 15px;
    background: url(images/menu1.svg);
    background-color: #2E3242;
    background-repeat: no-repeat;
    align-items: center;
}

.wrap .data {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #F2F2F2
}

.wrap .search {
    height: 35px;
    width: 35px;
    margin: 5px 15px;
    background: url(images/search1.svg);
    background-color: #2E3242;
    background-repeat: no-repeat;
    align-items: center;
}


</style>
<div class='wrap'>
    <div class='burger'></div>
    <div class='data'>Chat</div>
    <div class='search'></div>
</div>


`;


class HeaderChat extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}


customElements.define('header-chat', HeaderChat);
