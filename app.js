const services = [
  ['↗','Páginas web','Sitios rápidos, memorables y diseñados para convertir visitas en clientes.'],
  ['◉','Tiendas en línea','E-commerce atractivo y fácil de administrar, listo para recibir pagos y vender.'],
  ['☰','Menús digitales','Menús visuales para restaurantes, actualizables y perfectos para compartir con QR.'],
  ['⌘','Software a medida','Sistemas y herramientas creadas exactamente para la forma en que trabaja tu negocio.'],
  ['✦','Redes sociales','Estrategia, diseño y contenido que le da una voz consistente a tu marca.'],
  ['♡','Marca e identidad','Una personalidad visual clara para que tu negocio se reconozca y se recuerde.'],
  ['⟳','Automatizaciones','Conectamos procesos y eliminamos tareas repetitivas para devolverte tiempo.'],
  ['◎','Campañas digitales','Landing pages y contenido para lanzar, promocionar y medir nuevas ideas.']
];

const process = [
  ['01','Descubrimiento','Entendemos tu negocio, audiencia y objetivos.'],['02','Estrategia','Definimos el camino, prioridades y métricas.'],['03','Diseño','Convertimos la estrategia en una experiencia clara.'],['04','Desarrollo','Construimos con precisión, calidad y escalabilidad.'],['05','Lanzamiento','Probamos, afinamos y ponemos el producto en marcha.'],['06','Optimización continua','Medimos, aprendemos y mejoramos con datos reales.']
];

const projects = [
  {name:'Tao Lucha',tag:'PLATAFORMA DIGITAL',problem:'Una promotora con gran comunidad, pero sin un canal digital propio para informar y vender.',solution:'Diseñamos una presencia digital y un sistema de venta que centraliza eventos, talento y productos.',result:'Una experiencia de marca consistente y una nueva vía directa de ingresos.',tone:'red',metric:'+1',metricLabel:'CANAL DE VENTA'},
  {name:'Sistema de Automatización',tag:'SOFTWARE A LA MEDIDA',problem:'Procesos administrativos manuales que consumían horas cada semana y generaban errores.',solution:'Automatizamos el flujo de información y las tareas repetitivas en un sistema centralizado.',result:'Menos carga operativa, mayor trazabilidad y decisiones más rápidas.',tone:'dark',metric:'−64%',metricLabel:'TIEMPO OPERATIVO'},
  {name:'Landing Comercial',tag:'DISEÑO + CONVERSIÓN',problem:'Un negocio local necesitaba presentar su oferta con claridad y convertir interés en contactos.',solution:'Creamos una experiencia enfocada en valor, confianza y una ruta simple hacia la conversión.',result:'Un activo comercial disponible 24/7, listo para campañas y crecimiento.',tone:'sand',metric:'3×',metricLabel:'MÁS CONTACTOS'}
];

const capabilities = ['Sitios rápidos','Responsive','SEO preparado','Pagos integrados','Automatización','Dashboards claros','APIs conectadas','CRM centralizado','IA con propósito','Escalabilidad'];
const testimonials = [
  ['“MV Labs entendió el problema antes de proponer una solución. El resultado no solo se ve bien: simplificó nuestra operación.”','Laura Méndez','Dirección, Empresa Demo'],
  ['“El proceso fue claro de principio a fin. Siempre supimos qué se estaba construyendo, por qué y qué impacto tendría.”','Roberto Castillo','Fundador, Negocio Demo'],
  ['“Lograron traducir una idea compleja en una experiencia simple para nuestros clientes y fácil de administrar para el equipo.”','Ana Torres','Marketing, Marca Demo']
];
const faqs = [
  ['¿Cuánto tarda un proyecto?','Depende del alcance. Una landing puede tomar entre 2 y 4 semanas; un sitio o sistema más amplio, entre 6 y 12. Antes de comenzar definimos entregables y fechas claras.'],
  ['¿Trabajan con empresas pequeñas?','Sí. Trabajamos con empresas y emprendedores cuando existe un reto claro y podemos aportar valor real, sin importar el tamaño del equipo.'],
  ['¿Desarrollan software desde cero?','Sí. Diseñamos y desarrollamos productos a la medida, desde la definición del problema hasta el lanzamiento y la evolución del sistema.'],
  ['¿Incluyen mantenimiento?','Podemos incluir soporte, monitoreo, mejoras continuas y mantenimiento en un plan posterior al lanzamiento.'],
  ['¿Facturan?','Sí, emitimos factura por todos nuestros servicios.'],
  ['¿Pueden integrar pagos en línea?','Sí. Integramos pasarelas de pago y diseñamos el flujo completo para que la experiencia sea segura y sencilla.']
];

const servicesGrid = document.querySelector('#services-grid');
servicesGrid.innerHTML = services.map(([icon,title,text],i)=>`<article class="service-card reveal"><div class="service-top"><span class="service-icon">${icon}</span><small>0${i+1}</small></div><h3>${title}</h3><p>${text}</p></article>`).join('');

document.querySelector('#timeline').innerHTML = process.map(([num,title,text])=>`<li class="reveal"><span>${num}</span><div><h3>${title}</h3><p>${text}</p></div></li>`).join('');

document.querySelector('#projects-grid').innerHTML = projects.map((p,i)=>`<article class="project reveal"><div class="project-visual ${p.tone}"><div class="project-number">0${i+1}</div><div class="project-browser"><div class="browser-bar"><i></i><i></i><i></i></div><div class="browser-content"><span>${p.tag}</span><strong>${p.name}</strong><div class="browser-lines"></div></div></div><div class="project-metric"><strong>${p.metric}</strong><span>${p.metricLabel}</span></div></div><div class="project-copy"><span>${p.tag}</span><h3>${p.name}</h3><dl><div><dt>EL RETO</dt><dd>${p.problem}</dd></div><div><dt>LA SOLUCIÓN</dt><dd>${p.solution}</dd></div><div><dt>EL RESULTADO</dt><dd>${p.result}</dd></div></dl><a href="#contacto">Ver caso completo <span>↗</span></a></div></article>`).join('');

document.querySelector('#capabilities-list').innerHTML = capabilities.map((c,i)=>`<div class="cap-item reveal"><span>${String(i+1).padStart(2,'0')}</span><strong>${c}</strong><i>↗</i></div>`).join('');
document.querySelector('#testimonials-grid').innerHTML = testimonials.map(([quote,name,role])=>`<figure class="testimonial-card reveal"><div class="quote-mark">“</div><blockquote>${quote}</blockquote><figcaption><span>${name[0]}</span><p><strong>${name}</strong>${role}</p></figcaption></figure>`).join('');
document.querySelector('#faq-list').innerHTML = faqs.map(([q,a],i)=>`<details class="faq-item reveal"><summary><span>${String(i+1).padStart(2,'0')}</span><strong>${q}</strong><i aria-hidden="true">+</i></summary><p>${a}</p></details>`).join('');

document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));document.querySelector('.mobile-nav').classList.toggle('open');});
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');document.querySelector('.mobile-nav').classList.remove('open');}));
const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
