/* assets/js/app.js */
// Disparo do evento "InitiateCheckout" ao clicar no botão de compra
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a.btn-comprar, button.btn-comprar').forEach(function(el) {
    el.addEventListener('click', function() {
      try {
        fbq('track', 'InitiateCheckout'); // Pixel do Meta
      } catch (e) {
        console.warn('Pixel não encontrado');
      }
    });
  });
});

// Rolagem suave para seções (se usar âncoras)
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
