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

  renderCategory(category, index) {
    return `
      <section class="pricing-category pricing-category--${category.type}" aria-labelledby="${category.id}-title">
        <div class="category-heading">
          <span>0${index + 1}</span>
          <div><h2 id="${category.id}-title">${category.title}</h2><p>${category.subtitle}</p></div>
        </div>
        <div class="price-grid">${category.items.map(item => this.renderCard(item, category.type)).join('')}</div>
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
          ${categories.map((category, index) => `<a href="#${category.id}"><span>0${index + 1}</span>${category.title}<i>↘</i></a>`).join('')}
        </div>
      </section>
      ${categories.map((category, index) => this.renderCategory(category, index)).join('')}
      <section class="pricing-cta" id="contact"><span aria-hidden="true">✦</span><h2>${cta.title}</h2><p>${cta.description}</p><a href="${cta.button_link}" target="_blank" rel="noopener noreferrer">${cta.button_label} <b>↗</b></a></section>`;
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
