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
            <span class="navbar-brand">Elaborate Alfajores</span>
            <!-- Botón para colapsar la barra en móviles -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Contenido del Navbar -->

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Sección Centro <ul class="navbar-nav nav-center"> -->
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
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
                <!-- Sección Derecha -->
                <span class="navbar-text ml-auto">
                    <img src="`+BASE_PATH+`static/img/icono-alfajor.png" alt="Icono de Alfajor" style="width: 40px; height: auto;">
                </span>
            </div>
        </div>
        </nav>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);