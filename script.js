document.addEventListener("DOMContentLoaded", function () {

  // ===== Mobile Menu =====
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtnIcon.className = navLinks.classList.contains("open") ? "ri-close-line" : "ri-menu-line";
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.className = "ri-menu-line";
  });

  // ===== Search Toggle =====
  const navSearch = document.getElementById("nav-search");
  navSearch.addEventListener("click", () => {
    navSearch.classList.toggle("open");
  });

  // ===== Swiper Testimonials =====
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // ===== GSAP Animations =====
  gsap.registerPlugin(ScrollTrigger);

  // Hero Section
  gsap.from(".header__image img", { x: 100, opacity: 0, duration: 1 });
  gsap.from(".header__content h1", { y: 50, opacity: 0, duration: 1, delay: 0.3 });
  gsap.from(".header__content p", { y: 50, opacity: 0, duration: 1, delay: 0.6 });

  // Scroll Animations for sections
  const scrollElements = gsap.utils.toArray(
    ".benefits__card, .product__card, .deals__card, .craft__image, .offer__grid__top img, .offer__grid__bottom img, .process__content, .client__card"
  );

  scrollElements.forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });

});
