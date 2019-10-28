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
    .data {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-conten: center;
        align-items: center;
        color: #ffffff;
        
    }
    .wrap .backbutton {
      height: 35px;
      width: 35px;
      margin: 5px 15px;
      background: url(images/arrow2.png);
      background-color: #2E3242;
      background-repeat: no-repeat;
      align-items: center;
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
        <div class='backbutton'></div>
        <div class=data>
          <div class='name'></div>
          <div class='online'>last seen recently</div>
        </div>
    <div class='search'></div>
    </div>
`;


class HeaderMess extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$name = this.shadowRoot.querySelector('.name');
    this.$backbutton = this.shadowRoot.querySelector('.backbutton');
    this.$backbutton.addEventListener('click', this.backButton.bind(this));
  }

  backButton() {
    this.dispatchEvent(new Event('clickBack'));
  }
}

customElements.define('header-mess', HeaderMess);