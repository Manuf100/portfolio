document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".img-expandible");

  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
      } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
      }
    });
  });
});