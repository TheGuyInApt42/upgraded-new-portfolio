<script>
  import Icon from './Icon.svelte';

  /** @type {import('$lib/config/siteConfig.js').SiteConfig} */
  export let config;
</script>

<section id="services" class="services">
  <div class="section-container">
    <!-- Section heading -->
    <header class="section-header">
      <span class="eyebrow">What We Do</span>
      <h2 class="section-title">Our Services</h2>
      <p class="section-subtitle">
        From routine lawn care to complete outdoor renovations — we handle it all
        with the same commitment to quality and reliability.
      </p>
    </header>

    <!-- Service cards grid -->
    <div class="services-grid">
      {#each config.services as service}
        <article class="service-card">
          <div class="card-icon">
            <Icon name={service.icon} size={26} strokeWidth={1.6} />
          </div>
          <h3 class="card-title">{service.title}</h3>
          <p class="card-description">{service.description}</p>
        </article>
      {/each}
    </div>

    <!-- Bottom CTA nudge -->
    <div class="services-footer">
      <p>Not sure what you need? <strong>We offer free on-site estimates.</strong></p>
      <a href="#contact" class="services-cta-link">
        Request an Estimate
        <Icon name="ArrowRight" size={16} />
      </a>
    </div>
  </div>
</section>

<style>
  .services {
    background: #f5f2ec;
    padding: 6rem 0;
  }

  .section-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* Section header */
  .section-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 3.5rem;
  }
  .eyebrow {
    display: inline-block;
    font-family: 'Barlow', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 0.6rem;
  }
  .section-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: clamp(2rem, 4vw, 3rem);
    text-transform: uppercase;
    letter-spacing: -0.01em;
    color: var(--accent-dark);
    margin: 0 0 0.75rem;
  }
  .section-subtitle {
    font-family: 'Barlow', sans-serif;
    font-size: 1rem;
    color: #6b6860;
    line-height: 1.65;
    margin: 0;
  }

  /* Grid */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  /* Card */
  .service-card {
    background: #fff;
    padding: 2rem 1.75rem;
    border-radius: 8px;
    border-left: 4px solid var(--accent);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }

  .card-icon {
    width: 52px;
    height: 52px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    margin-bottom: 1.25rem;
    flex-shrink: 0;
  }

  .card-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--accent-dark);
    margin: 0 0 0.6rem;
  }

  .card-description {
    font-family: 'Barlow', sans-serif;
    font-size: 0.9rem;
    color: #706e69;
    line-height: 1.6;
    margin: 0;
  }

  /* Footer nudge */
  .services-footer {
    margin-top: 3rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    flex-wrap: wrap;
  }
  .services-footer p {
    font-family: 'Barlow', sans-serif;
    font-size: 1rem;
    color: #6b6860;
    margin: 0;
  }
  .services-footer strong { color: var(--accent-dark); }

  .services-cta-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--accent);
    border-bottom: 2px solid var(--accent);
    padding-bottom: 2px;
    transition: color 0.2s, border-color 0.2s;
  }
  .services-cta-link:hover {
    color: var(--accent-dark);
    border-color: var(--accent-dark);
  }
</style>
