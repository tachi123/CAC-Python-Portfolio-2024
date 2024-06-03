class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-header">
            <!-- Sección Izquierda -->
            <div class="w-100 order-0">
              <span class="navbar-brand">Elaborate Alfajores <img src="`+BASE_PATH+`static/img/icono-alfajor.png" alt="Icono de Alfajor" style="width: 40px; height: auto;"></span>
            </div>
            <!-- Botón para colapsar la barra en móviles -->
            <div class="w-100 order-1">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Contenido del Navbar -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Sección Centro <ul class="navbar-nav nav-center"> -->
                <ul class="navbar-nav mr-auto ml-auto">
                    <li class="nav-item">
                    <span><i class="bi bi-house-door-fill"></i></span>
                        <a class="nav-link" href="`+BASE_PATH+`"><i class="fa fa-home" aria-hidden="true"></i>&nbsp; Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="`+BASE_PATH+`templates/historia.html"><i class="fa fa-book" aria-hidden="true"></i>&nbsp; Historia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="`+BASE_PATH+`templates/premios.html"><i class="fa fa-trophy" aria-hidden="true"></i>&nbsp; Premios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="`+BASE_PATH+`templates/favorito.html"><i class="fa fa-heart" aria-hidden="true"></i>&nbsp; Tu Favorito</a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        </nav>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);