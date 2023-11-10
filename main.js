function adjustMainMargin() {
  var header = document.getElementById('header');
  var main = document.querySelector('main');
  if (header && main) {
      var headerHeight = header.offsetHeight;
      main.style.marginTop = headerHeight + 'px';
  }
}

// Ejecutar cuando la página se carga
window.onload = adjustMainMargin;

// Ejecutar cuando la ventana cambia de tamaño
window.onresize = adjustMainMargin;
