const money = value => new Intl.NumberFormat('es-MX', {maximumFractionDigits:0}).format(value);
export function renderPlans(root, data) {
  root.innerHTML = data.plans.map(p => {
    const c = p.content, m = p.management, a = p.advertising;
    const compact = root.hasAttribute('data-compact');
    const features = [
      `${c.posts} publicaciones + ${c.stories} historias al mes`,
      c.reels ? `${c.reels} reels al mes` : 'Contenido con material proporcionado por ti',
      c.monthly_production_sessions ? `${c.monthly_production_sessions} ${c.monthly_production_sessions === 1 ? 'sesión' : 'sesiones'} de producción al mes` : 'Sin sesiones de producción incluidas',
      `Diseño ${ {basic:'básico',standard:'estándar',custom:'personalizado'}[c.graphic_design]} y redacción de textos`,
      `${{basic:'Planeación y gestión básica',complete:'Planeación mensual y gestión completa',advanced:'Planeación estratégica y gestión avanzada'}[m.social_media_management]}`,
      'Programación de publicaciones',
      ...(m.profile_optimization ? ['Optimización de perfiles y seguimiento de resultados'] : []),
      a.included ? `Meta Ads: $${money(a.budget_min)}–$${money(a.budget_max)} MXN incluidos en tu mensualidad` : 'Sin inversión ni gestión publicitaria',
      ...(a.campaign_management ? ['Gestión, segmentación y optimización de campañas'] : []),
      `Reporte mensual ${ {basic:'básico',standard:'estándar',advanced:'avanzado'}[p.reporting.level]}`,
      ...(p.reporting.strategy_meeting ? ['Reunión de estrategia mensual'] : [])
    ];
    const url = `https://wa.me/524427421651?text=${encodeURIComponent(`Hola MV Labs, me interesa el plan ${p.name} de $${money(p.price)} MXN al mes. Quisiera conocer los siguientes pasos.`)}`;
    return `<article id="plan-${p.id}" class="plan-card ${p.recommended?'recommended':''}"><div class="plan-label">${p.recommended?'EL MÁS RECOMENDADO':'PLAN MENSUAL'}</div><h3>${p.name}</h3><p class="plan-description">${p.description}</p><div class="plan-price">$${money(p.price)} <span>MXN / mes</span></div><small class="intro-price">Precio de introducción</small><a class="button ${p.recommended?'button-dark':'button-ghost'}" href="${compact ? 'planes.html' : url}" ${compact ? '' : 'target="_blank" rel="noopener noreferrer"'}>${compact ? 'Ver el plan' : `Elegir ${p.name.replace('Presencia ','')}`}</a><p class="plan-platforms">FACEBOOK + INSTAGRAM</p><ul>${(compact ? features.slice(0,3) : features).map(f=>`<li><span aria-hidden="true">✓</span>${f}</li>`).join('')}</ul></article>`;
  }).join('');
}
for (const root of document.querySelectorAll('[data-plans]')) {
  try {
    const response = await fetch('assets/json/planes.json');
    if (!response.ok) throw new Error('No se pudieron obtener los planes');
    renderPlans(root, await response.json());
  } catch {
    root.innerHTML = '<p role="alert">No fue posible cargar los planes. <a href="contacto.html">Contáctanos para conocerlos.</a></p>';
  }
}
