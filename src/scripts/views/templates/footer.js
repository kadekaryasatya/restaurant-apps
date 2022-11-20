class TheFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer">
        <p>2022 &copy; Dek Arya | Umah <span>Makan</span></p>
     </div>`;
  }
}

customElements.define('the-footer', TheFooter);
export default TheFooter;
