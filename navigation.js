document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));document.querySelector('.mobile-nav').classList.toggle('open');});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');document.querySelector('.mobile-nav').classList.remove('open');}));
