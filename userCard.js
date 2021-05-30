const template = document.createElement('template');
template.innerHTML = `
    <style>
        h1 {
            color: red;
        }
    </style>
    <div class="user-card">
    <h1></h1>
    </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    console.log(this)
    this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');
  }
}

window.customElements.define('user-card', UserCard);
