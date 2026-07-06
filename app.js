const services = [
  ['↗','Páginas web','Sitios rápidos, memorables y diseñados para convertir visitas en clientes.'],
  ['◉','Tiendas en línea','E-commerce atractivo y fácil de administrar, listo para recibir pagos y vender.'],
  ['☰','Menús digitales','Menús visuales para restaurantes, actualizables y perfectos para compartir con QR.'],
  ['⌘','Software a medida','Sistemas y herramientas creadas exactamente para la forma en que trabaja tu negocio.'],
  ['✦','Redes sociales','Estrategia y contenido para darle una voz consistente a tu marca.'],
  ['♡','Marca e identidad','Una personalidad visual clara para que tu negocio se reconozca y se recuerde.'],
  ['✉','Invitaciones digitales','Invitaciones interactivas para bodas, fiestas y eventos, listas para compartir.']
];

const process = [
  ['01','Entendemos','Conocemos tu negocio, clientes y objetivo.'],['02','Proponemos','Definimos una solución, alcance y tiempos claros.'],['03','Creamos','Diseñamos y construimos contigo, mostrando avances.'],['04','Lanzamos','Probamos, publicamos y dejamos todo listo para crecer.']
];

const projects = [
  {name:'Lucha Club',tag:'E-COMMERCE DESTACADO',summary:'Tienda digital para fans de lucha libre, MMA y cultura combat sports en Querétaro.',image:'assets/projects/lucha-club.svg',url:'https://lucha-clubdemo.vercel.app/',featured:true},
  {name:'Sistema de Automatización',tag:'SOFTWARE A LA MEDIDA',summary:'Procesos internos centralizados para reducir trabajo manual y tomar mejores decisiones.',image:'assets/projects/automation.svg',url:'#contacto'},
  {name:'Landing Comercial',tag:'DISEÑO + CONVERSIÓN',summary:'Una experiencia enfocada en presentar valor y convertir interés en nuevos contactos.',image:'assets/projects/landing.svg',url:'#contacto'}
];

const faqs = [
  ['¿Cuánto tarda un proyecto?','Depende del alcance. Una landing puede tomar entre 2 y 4 semanas; un sitio o sistema más amplio, entre 6 y 12. Antes de comenzar definimos entregables y fechas claras.'],
  ['¿Trabajan con empresas pequeñas?','Sí. Trabajamos con empresas y emprendedores cuando existe un reto claro y podemos aportar valor real, sin importar el tamaño del equipo.'],
  ['¿Desarrollan software desde cero?','Sí. Diseñamos y desarrollamos productos a la medida, desde la definición del problema hasta el lanzamiento y la evolución del sistema.'],
  ['¿Incluyen mantenimiento y pagos en línea?','Sí. Podemos integrar pagos y ofrecer soporte, monitoreo y mejoras después del lanzamiento.']
];

const servicesGrid = document.querySelector('#services-grid');
servicesGrid.innerHTML = services.map(([icon,title,text],i)=>`<article class="service-card reveal"><div class="service-top"><span class="service-icon">${icon}</span><small>0${i+1}</small></div><h3>${title}</h3><p>${text}</p></article>`).join('');

document.querySelector('#timeline').innerHTML = process.map(([num,title,text])=>`<li class="reveal"><span>${num}</span><div><h3>${title}</h3><p>${text}</p></div></li>`).join('');

document.querySelector('#projects-grid').innerHTML = projects.map((p,i)=>`<article class="project project-card reveal ${p.featured?'project-featured':''}"><a class="project-shot" href="${p.url}" ${p.url.startsWith('http')?'target="_blank" rel="noopener noreferrer"':''} aria-label="Ver ${p.name}"><img src="${p.image}" alt="Vista previa de ${p.name}" width="1200" height="760" loading="lazy"><span class="project-number">0${i+1}</span>${p.featured?'<b>PROYECTO DESTACADO</b>':''}</a><div class="project-card-copy"><span>${p.tag}</span><h3>${p.name}</h3><p>${p.summary}</p><a href="${p.url}" ${p.url.startsWith('http')?'target="_blank" rel="noopener noreferrer"':''}>${p.url.startsWith('http')?'Ver demo en vivo':'Conocer el proyecto'} <span>↗</span></a></div></article>`).join('');

document.querySelector('#faq-list').innerHTML = faqs.map(([q,a],i)=>`<details class="faq-item reveal"><summary><span>${String(i+1).padStart(2,'0')}</span><strong>${q}</strong><i aria-hidden="true">+</i></summary><p>${a}</p></details>`).join('');

document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));document.querySelector('.mobile-nav').classList.toggle('open');});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');document.querySelector('.mobile-nav').classList.remove('open');}));
const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
