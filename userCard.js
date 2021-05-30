class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1>${this.getAttribute('name')}</h1>`;
  }
}

window.customElements.define('user-card', UserCard);
 