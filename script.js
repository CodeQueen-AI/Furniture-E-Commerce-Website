// Mobile menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

window.addEventListener("load", () => {

  // HERO animation
  Motion.animate(".header__content h1", {
    opacity: [0, 1],
    y: [60, 0],
  }, { duration: 1 });

  Motion.animate(".header__content p", {
    opacity: [0, 1],
    y: [40, 0],
  }, { delay: 0.3, duration: 1 });

  Motion.animate(".header__image img", {
    opacity: [0, 1],
    scale: [0.8, 1],
  }, { duration: 1.2 });


  // Scroll reveal (SAFE)
  const sections = document.querySelectorAll(
    ".benefits__card, .product__card, .process__content, .process__image, .deals__card, .craft__image, .client__card, .footer__col"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        Motion.animate(entry.target, {
          opacity: [0, 1],
          y: [60, 0],
        }, { duration: 0.8 });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach((el) => observer.observe(el));


  // Hover pop
  document.querySelectorAll(".product__card, .craft__image, .benefits__card")
  .forEach((card) => {
    card.addEventListener("mouseenter", () => {
      Motion.animate(card, { scale: 1.05 }, { duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      Motion.animate(card, { scale: 1 }, { duration: 0.3 });
    });
  });

});
