const elementos = document.querySelectorAll(".fade-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // quando entra na tela
        entry.target.classList.add("ativo");
      } else {
        // quando sai da tela
        entry.target.classList.remove("ativo");
      }
    });
  },
  { threshold: 0.2 }
);

elementos.forEach((el) => observer.observe(el));
