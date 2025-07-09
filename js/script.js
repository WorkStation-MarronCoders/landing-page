// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Get elements for language switching
  const englishBtn = document.getElementById("en-btn");
  const spanishBtn = document.getElementById("es-btn");
  const langElements = document.querySelectorAll(".lang");
  const emailInput = document.querySelector('input[type="email"]');

  // Email form functionality - original code
  const form = document.getElementById("subscribeForm");

  // Language switching functionality
  function setLanguage(lang) {
    langElements.forEach((element) => {
      if (element.dataset[lang]) {
        element.textContent = element.dataset[lang];
      }
    });

    // Update email placeholder based on language
    if (lang === "es") {
      emailInput.placeholder = "Ingresa tu email";
      englishBtn.classList.remove("active");
      spanishBtn.classList.add("active");
    } else {
      emailInput.placeholder = "Enter your email";
      englishBtn.classList.add("active");
      spanishBtn.classList.remove("active");
    }
  }

  // Add event listeners for language buttons
  englishBtn.addEventListener("click", () => setLanguage("en"));
  spanishBtn.addEventListener("click", () => setLanguage("es"));

  // Original form validation functionality with language support
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      // Show success message in current language
      const successMessage = englishBtn.classList.contains("active")
        ? `Thanks for subscribing with: ${email}`
        : `Gracias por suscribirte con: ${email}`;

      alert(successMessage);
      emailInput.value = ""; // Clear field
    } else {
      // Show error message in current language
      const errorMessage = englishBtn.classList.contains("active")
        ? "Please enter a valid email address."
        : "Por favor, introduce una dirección de email válida.";

      alert(errorMessage);
    }
  });

  function validateEmail(email) {
    // Basic regular expression for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Fade-in animation on scroll
  const fadeElements = document.querySelectorAll(".fade-in");

  function checkFade() {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Initial check for elements in view on load
  checkFade();

  // Check on scroll
  window.addEventListener("scroll", checkFade);

  // Carousel functionality
  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const images = document.querySelectorAll(".carousel-track img");
  let currentIndex = 0;

  function updateCarousel() {
    const imageWidth = images[0].clientWidth + 16; // 16 for gap
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  nextBtn?.addEventListener("click", () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn?.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);
});
