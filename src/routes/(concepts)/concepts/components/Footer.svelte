<script>
  import Icon from './Icon.svelte';

  /** @type {import('$lib/config/siteConfig.js').SiteConfig} */
  export let config;

  const year = new Date().getFullYear();
  $: telHref = `tel:${config.phone.replace(/\D/g, '')}`;
</script>

<footer class="footer">
  <div class="footer-container">

    <!-- Top row -->
    <div class="footer-top">
      <!-- Brand -->
      <div class="footer-brand">
        <p class="footer-name">{config.businessName}</p>
        <p class="footer-tagline">{config.trustLine}</p>
        <a href={telHref} class="footer-phone">
          <Icon name="Phone" size={15} strokeWidth={2} />
          {config.phone}
        </a>
      </div>

      <!-- Nav links -->
      <nav class="footer-nav" aria-label="Footer navigation">
        <p class="footer-nav-heading">Quick Links</p>
        <ul>
          {#each config.navLinks as link}
            <li><a href={link.href}>{link.label}</a></li>
          {/each}
        </ul>
      </nav>

      <!-- Service area summary -->
      <div class="footer-area">
        <p class="footer-nav-heading">Service Area</p>
        <p class="footer-area-text">{config.serviceAreaHeadline}</p>
        <p class="footer-area-sub">
          {config.serviceAreaList.slice(0, 6).join(' · ')}
          {config.serviceAreaList.length > 6 ? ' · and more' : ''}
        </p>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <p class="copyright">
        &copy; {year} {config.businessName}. All rights reserved.
      </p>
      <p class="footer-city">
        <Icon name="MapPin" size={13} strokeWidth={2} />
        Serving {config.city}
      </p>
    </div>

  </div>
</footer>

<style>
  .footer {
    background: #0a1c10;
    color: rgba(255,255,255,0.6);
    padding: 4rem 0 0;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* Top row */
  .footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    gap: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  /* Brand column */
  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .footer-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: 1.35rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: #fff;
    margin: 0;
  }
  .footer-tagline {
    font-family: 'Barlow', sans-serif;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.45);
    margin: 0 0 0.5rem;
    letter-spacing: 0.05em;
  }
  .footer-phone {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: var(--cta);
    transition: color 0.2s;
  }
  .footer-phone:hover { color: #e8853a; }

  /* Nav column */
  .footer-nav-heading {
    font-family: 'Barlow', sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin: 0 0 0.75rem;
  }
  .footer-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .footer-nav a {
    font-family: 'Barlow', sans-serif;
    font-size: 0.875rem;
    color: rgba(255,255,255,0.6);
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-nav a:hover { color: #fff; }

  /* Area column */
  .footer-area { display: flex; flex-direction: column; gap: 0.4rem; }
  .footer-area-text {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: rgba(255,255,255,0.8);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .footer-area-sub {
    font-family: 'Barlow', sans-serif;
    font-size: 0.8rem;
    color: rgba(255,255,255,0.4);
    margin: 0;
    line-height: 1.5;
  }

  /* Bottom bar */
  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 0;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .copyright {
    font-family: 'Barlow', sans-serif;
    font-size: 0.78rem;
    color: rgba(255,255,255,0.3);
    margin: 0;
  }

  .footer-city {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-family: 'Barlow', sans-serif;
    font-size: 0.78rem;
    color: rgba(255,255,255,0.3);
    margin: 0;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .footer-top {
      grid-template-columns: 1fr 1fr;
    }
    .footer-brand { grid-column: 1 / -1; }
  }

  @media (max-width: 480px) {
    .footer-top { grid-template-columns: 1fr; }
  }
</style>
