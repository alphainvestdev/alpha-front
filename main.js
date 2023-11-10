
// Set top for main content
function adjustMainMargin() {
  var header = document.getElementById('header');
  var main = document.querySelector('main');
  if (header && main) {
      var headerHeight = header.offsetHeight;
      main.style.marginTop = headerHeight + 'px';
  }
}

window.onload = adjustMainMargin;

window.onresize = adjustMainMargin;
