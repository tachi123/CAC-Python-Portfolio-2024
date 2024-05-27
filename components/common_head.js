// common_head.js
/* 
  <!-- Bootstrap -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <!-- Iconos de Bootstrap -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">

  <!-- Componentes que permiten incrustar el header y footer  -->
  <script src="components/header.js" type="text/javascript" defer></script>
  <script src="components/footer.js" type="text/javascript" defer></script>
*/
document.addEventListener('DOMContentLoaded', function() {
    var head = document.getElementsByTagName('head')[0];

    // <!-- Bootstrap -->
    var linkStylesheet = document.createElement('link');
    linkStylesheet.rel = 'stylesheet';
    linkStylesheet.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
    head.appendChild(linkStylesheet);

    // <!-- Iconos de Bootstrap -->
    var linkStylesheet1 = document.createElement('link');
    linkStylesheet1.rel = 'stylesheet';
    linkStylesheet1.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css';
    head.appendChild(linkStylesheet1);

    // Agrega etiquetas script
    // <script src="components/header.js" type="text/javascript" defer></script>
    var script1 = document.createElement('script');
    script1.src = 'components/header.js';
    head.appendChild(script1);

    // <script src="components/footer.js" type="text/javascript" defer></script>
    var script2 = document.createElement('script');
    script2.src = 'components/footer.js';
    head.appendChild(script2);
});