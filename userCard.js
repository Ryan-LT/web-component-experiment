const template = document.createElement('template');
template.innerHTML = `
    <style>
        .user-card  {
            background: #e6e6e6;
            width: fit-content;
            padding: 12px;
            margin-bottom: 24px;
        }
        h1 {
            color: #7b7b7b;
            margin-bottom: 0;
        }
        img {
            margin-top: 8px;
            height: 200px;
        }
    </style>
    <div class="user-card">
    <h1></h1>
    <div class="info">
        <div>Origin: <slot name="origin"/></div>
        <div>Occupation: <slot name="occupation"/></div>
    </div>
    <img />
    <div>
        <button id="btnRemove" type="button">Hide Info</button>
    <div>
    </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.isShowInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('imgUrl');
  }

  removePhoto() {
    if (this.isShowInfo) {
      this.shadowRoot.querySelector('.info').style.display = 'none';
      this.shadowRoot.querySelector('#btnRemove').textContent = 'Show Info';
      this.isShowInfo = false;
    } else {
      this.shadowRoot.querySelector('.info').style.display = 'block';
      this.shadowRoot.querySelector('#btnRemove').textContent = 'Hide Info';
      this.isShowInfo = true;
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('#btnRemove')
      .addEventListener('click', () => this.removePhoto());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#btnRemove').removeEventListener('click');
    console.log('disconnectedCallback');
  }
}

window.customElements.define('user-card', UserCard);
