document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  document.querySelector('.mobile-nav').classList.toggle('open', !open);
});
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Hola MV Labs, soy ${data.get('name')}.\nNegocio: ${data.get('business') || 'Por definir'}\nMe interesa: ${data.get('service')}\n\n${data.get('message')}`;
  window.open(`https://wa.me/524427421651?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
