// common_scripts.js
/*
<!-- Bootstrap -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
*/

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el elemento body
    var body = document.getElementsByTagName('body')[0];

    // <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    var scriptInBody = document.createElement('script');
    scriptInBody.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
    body.appendChild(scriptInBody);

    // https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js
    var scriptInBody1 = document.createElement('script');
    scriptInBody1.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js';
    body.appendChild(scriptInBody1);

    // <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    var scriptInBody2 = document.createElement('script');
    scriptInBody2.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js';
    body.appendChild(scriptInBody2);

});