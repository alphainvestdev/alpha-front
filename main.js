// Set top for main content when navigating
function adjustAnchorLinkPosition() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");

      // Si el enlace es solo '#', desplazarse a la parte superior de la página
      if (targetId === "#") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      // Para otros enlaces de anclaje, ajustar la posición de desplazamiento
      else {
        e.preventDefault();
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
          var headerHeight = document.getElementById("header").offsetHeight;
          var targetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

// Evento que se dispara cuando la página se carga completamente
window.onload = function () {
  // adjustMainMargin();
  adjustAnchorLinkPosition(); // Llama a la función para ajustar los enlaces de anclaje
};

// Evento que se dispara cuando la ventana cambia de tamaño
window.onresize = function () {
  // adjustMainMargin();
  adjustAnchorLinkPosition();
};
