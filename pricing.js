export class ServicesPricingSection {
  constructor(root, data) {
    this.root = root;
    this.data = data.section;
  }

  renderCard(item, categoryType) {
    const isStarter = categoryType === 'weekly_subscription' && item.name === 'Starter';
    return `
      <article class="price-card${isStarter ? ' price-card--starter' : ''}">
        ${isStarter ? '<span class="starter-badge">Opción accesible</span>' : ''}
        <div class="card-heading">
          <h3>${item.name}</h3>
          <p class="price">${item.price}</p>
        </div>
        <p class="card-description">${item.description}</p>
        <ul>${item.features.map(feature => `<li><span aria-hidden="true">✓</span>${feature}</li>`).join('')}</ul>
        <p class="ideal"><span>Ideal para</span>${item.ideal_for}</p>
      </article>`;
  }

  renderCategory(category) {
    if (category.type === 'landing_pages') return this.renderLandingPlans(category);
    return `
      <section class="pricing-category pricing-category--${category.type}" id="${category.id}" aria-labelledby="${category.id}-title">
        <div class="category-heading">

          <div><h2 id="${category.id}-title">${category.title}</h2><p>${category.subtitle}</p></div>
        </div>
        <div class="price-grid">${category.items.map(item => this.renderCard(item, category.type)).join('')}</div>
      </section>`;
  }

  renderLandingPlans(category) {
    const conditions = category.conditions;
    const money = new Intl.NumberFormat('es-MX', { style: 'currency', currency: category.currency, maximumFractionDigits: 0 });
    return `
      <section class="pricing-category pricing-category--landing" id="${category.id}" aria-labelledby="${category.id}-title">
        <div class="category-heading"><div><h2 id="${category.id}-title">${category.title}</h2><p>${category.subtitle}</p></div></div>
        <div class="price-grid">${category.items.map(plan => `
          <article class="price-card${plan.featured ? ' price-card--featured' : ''}" id="${plan.id}">
            <div class="landing-labels"><span>${plan.level}</span>${plan.featured ? '<span class="landing-badge">Destacado</span>' : ''}</div>
            <div class="card-heading"><h3>${plan.name}</h3><p class="price">${money.format(plan.price)} MXN</p><p class="landing-payment">Pago único · más IVA</p></div>
            <p class="card-description">${plan.description}</p>
            <p class="landing-delivery">Entrega: ${plan.delivery.min}–${plan.delivery.max} días hábiles</p>
            <ul>${plan.features.map(feature => `<li><span aria-hidden="true">✓</span>${feature}</li>`).join('')}</ul>
            <a class="landing-plan-cta" href="https://wa.me/524427421651?text=${encodeURIComponent(`Hola MV Labs, me interesa el plan de Landing Pages ${plan.name} (${plan.level}) de ${money.format(plan.price)} MXN más IVA.`)}" target="_blank" rel="noopener noreferrer">Solicitar plan ${plan.level}</a>
          </article>`).join('')}</div>
        <aside class="landing-conditions" aria-labelledby="landing-conditions-title">
          <h3 id="landing-conditions-title">Condiciones de Landing Pages</h3>
          <p>${conditions.advance_percentage}% de anticipo y ${conditions.final_percentage}% de pago final. Los precios no incluyen IVA, dominio, hosting ni mantenimiento.</p>
          <p>Servicios externos: ${conditions.external_services.toLowerCase()}. Cambios posteriores: ${conditions.later_changes.toLowerCase()}.</p>
          <p><strong>No incluye:</strong> ${conditions.exclusions.join(', ')}.</p>
        </aside>
      </section>`;
  }

  render() {
    const { id, title, subtitle, description, categories, cta } = this.data;
    this.root.innerHTML = `
      <section class="pricing-hero" id="${id}">
        <span class="eyebrow">SERVICIOS Y PRECIOS</span>
        <h1>${title}</h1>
        <p class="hero-subtitle">${subtitle}</p>
        <p class="hero-description">${description}</p>
        <div class="choice-map" aria-label="Modelos de servicio">
          ${categories.map(category => `<a href="#${category.id}">${category.title}</a>`).join('')}
        </div>
      </section>
      ${categories.map(category => this.renderCategory(category)).join('')}
      <section class="pricing-cta" id="contact"><span aria-hidden="true">✦</span><h2>${cta.title}</h2><p>${cta.description}</p><a href="${cta.button_link}" target="_blank" rel="noopener noreferrer">${cta.button_label}</a></section>`;
  }
}

async function initPricing() {
  const root = document.querySelector('#pricing-root');
  try {
    const response = await fetch('assets/json/precios.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    new ServicesPricingSection(root, data).render();
  } catch (error) {
    root.innerHTML = '<p class="load-error" role="alert">No fue posible cargar los servicios. Intenta nuevamente.</p>';
    console.error('Pricing data could not be loaded:', error);
  }
}

document.querySelector('#year').textContent = new Date().getFullYear();
initPricing();
