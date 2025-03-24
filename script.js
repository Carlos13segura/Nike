// Scroll suave para los enlaces del menú
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 70, // Ajuste para el tamaño del navbar
              behavior: 'smooth'
          });
      }
  });
});

// Validación del formulario de suscripción
document.querySelector('.newsletter-section button').addEventListener('click', function () {
  const emailInput = document.querySelector('.newsletter-section input[type="email"]');
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue) {
      alert('Por favor, introduce tu correo electrónico.');
  } else if (!emailRegex.test(emailValue)) {
      alert('Por favor, introduce un correo electrónico válido.');
  } else {
      alert('¡Gracias por suscribirte!');
      emailInput.value = ''; // Limpiar el campo de entrada
  }
});

// Notificación de "Añadir al Carrito"
document.querySelectorAll('.btn-nike').forEach(button => {
  button.addEventListener('click', function () {
      alert('Producto añadido al carrito.');
  });
});