// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribeForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevenir recarga de la página
  
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
  
      if (validateEmail(email)) {
        alert(`Thanks for subscribing with: ${email}`);
        emailInput.value = ''; // Limpiar campo
      } else {
        alert('Please enter a valid email address.');
      }
    });
  
    function validateEmail(email) {
      // Expresión regular básica para validar email
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  