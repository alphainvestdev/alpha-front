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


// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
  } else {
    mySidebar.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
}
