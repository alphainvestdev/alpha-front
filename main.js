function adjustAnchorLinkPosition() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
          const targetId = this.getAttribute("href");
          handleAnchorClick(e, targetId);
      });
  });
}

function handleAnchorClick(event, targetId) {
  event.preventDefault();

  if (targetId === "#") {
      scrollToTop();
  } else {
      scrollToAnchor(targetId);
  }
}

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
}

function scrollToAnchor(targetId) {
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
      const headerHeight = document.getElementById("header").offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
      });
  }
}

// ----------------------------------------------------------------------------

window.addEventListener('load', adjustAnchorLinkPosition);
window.addEventListener('resize', adjustAnchorLinkPosition);
