//agrega la clase active
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      // Si solo querés que se anime una vez:
      observer.unobserve(entry.target);
    }
  });
});

// Observa todos los elementos con la clase slide-right
document.querySelectorAll('.slide-right').forEach(el => observer.observe(el));
document.querySelectorAll('.h2-about').forEach(el => observer.observe(el));