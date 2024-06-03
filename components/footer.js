class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer>
        <p>&copy; 2024 Elaborate Alfajores. Todos los derechos reservados.</p>
        <div class="footer-links">
          <a href="https://www.instagram.com/" target="_blank">
            <img src="`+BASE_PATH+`static/img/icono-instagram.png" alt="Icono Instagram" class="footer-icono">
            Instagram
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="`+BASE_PATH+`static/img/icono-youtube.png" alt="Icono YouTube" class="footer-icono">
            YouTube
          </a>
          <a href="https://web.whatsapp.com/" target="_blank">
            <img src="`+BASE_PATH+`static/img/icono-telefono.png" alt="Icono Telefono" class="footer-icono">
            WhatsApp
          </a>
        </div>
      </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);