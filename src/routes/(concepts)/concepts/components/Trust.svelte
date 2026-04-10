<script>
  import Icon from './Icon.svelte';

  /** @type {import('$lib/config/siteConfig.js').SiteConfig} */
  export let config;
</script>

<section id="trust" class="trust">
  <div class="section-container">
    <!-- Section header -->
    <header class="section-header">
      <span class="eyebrow">Why Choose Us</span>
      <h2 class="section-title">The {config.shortName} Difference</h2>
    </header>

    <!-- Trust badges -->
    <div class="badges-row">
      {#each config.trustBadges as badge}
        <div class="badge">
          <div class="badge-icon">
            <Icon name={badge.icon} size={30} strokeWidth={1.6} />
          </div>
          <span class="badge-label">{badge.label}</span>
        </div>
      {/each}
    </div>

    <!-- Supporting copy -->
    <div class="trust-copy">
      <div class="trust-block">
        <h3>Reliable. Every Time.</h3>
        <p>
          We show up when we say we will. Our team respects your property,
          communicates clearly, and finishes every job to the highest standard —
          no cutting corners.
        </p>
      </div>
      <div class="trust-block">
        <h3>Quality You Can See</h3>
        <p>
          From the materials we select to the craftsmanship we deliver, every
          detail matters. We stand behind our work and won't leave until you're
          completely satisfied.
        </p>
      </div>
      <div class="trust-block">
        <h3>Fair, Transparent Pricing</h3>
        <p>
          No surprise costs. We provide detailed estimates upfront and explain
          exactly what's included. You'll always know what you're paying for
          before any work begins.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .trust {
    background: #fff;
    padding: 6rem 0;
  }

  .section-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* Header */
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
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
    margin: 0;
  }

  /* Badges row */
  .badges-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 2rem 0 3rem;
    border-top: 1px solid #ebe8e2;
    border-bottom: 1px solid #ebe8e2;
    margin-bottom: 4rem;
  }

  .badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 1.5rem 2rem;
    border-radius: 8px;
    background: #f5f2ec;
    min-width: 160px;
    flex: 1 1 140px;
    max-width: 220px;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .badge:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 24px rgba(0,0,0,0.08);
  }

  .badge-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--accent) 15%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
  }

  .badge-label {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--accent-dark);
    text-align: center;
  }

  /* Supporting copy grid */
  .trust-copy {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2.5rem;
  }

  .trust-block h3 {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--accent-dark);
    margin: 0 0 0.6rem;
    padding-left: 1rem;
    border-left: 3px solid var(--accent);
  }
  .trust-block p {
    font-family: 'Barlow', sans-serif;
    font-size: 0.925rem;
    color: #706e69;
    line-height: 1.7;
    margin: 0;
  }

  /* Responsive */
  @media (max-width: 600px) {
    .badge {
      flex-direction: row;
      text-align: left;
      max-width: 100%;
      flex: 1 1 100%;
      padding: 1rem 1.25rem;
    }
    .badge-icon {
      width: 46px;
      height: 46px;
      flex-shrink: 0;
    }
    .badge-label { text-align: left; }
  }
</style>
