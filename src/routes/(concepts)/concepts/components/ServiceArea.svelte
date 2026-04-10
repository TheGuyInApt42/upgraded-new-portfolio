<script>
  import Icon from './Icon.svelte';

  /** @type {import('$lib/config/siteConfig.js').SiteConfig} */
  export let config;
</script>

<section id="area" class="area">
  <div class="section-container">
    <div class="area-layout">

      <!-- Left: Text content -->
      <div class="area-content">
        <span class="eyebrow">Coverage</span>
        <h2 class="section-title">{config.serviceAreaHeadline}</h2>
        <p class="area-body">{config.serviceAreaBody}</p>

        <!-- Area tag list -->
        <ul class="area-tags" aria-label="Service locations">
          {#each config.serviceAreaList as location}
            <li class="area-tag">
              <Icon name="MapPin" size={13} strokeWidth={2} />
              {location}
            </li>
          {/each}
        </ul>

        <a href="#contact" class="area-cta">
          <Icon name="Phone" size={17} />
          Check If We Serve Your Area
        </a>
      </div>

      <!-- Right: Visual map placeholder / decorative element -->
      <div class="area-visual" aria-hidden="true">
        <div class="map-placeholder">
          <Icon name="Map" size={64} strokeWidth={1} />
          <span>Westchester County</span>
          <span class="map-sub">&amp; Surrounding Areas</span>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  .area {
    background: #f5f2ec;
    padding: 6rem 0;
  }

  .section-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .area-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  /* Left content */
  .area-content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .eyebrow {
    display: inline-block;
    font-family: 'Barlow', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .section-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    text-transform: uppercase;
    letter-spacing: -0.01em;
    color: var(--accent-dark);
    margin: 0;
    line-height: 1.05;
  }

  .area-body {
    font-family: 'Barlow', sans-serif;
    font-size: 0.975rem;
    color: #6b6860;
    line-height: 1.7;
    margin: 0;
  }

  /* Area tags */
  .area-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0.25rem 0;
  }

  .area-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-family: 'Barlow', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--accent-dark);
    background: color-mix(in srgb, var(--accent) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
    padding: 0.3rem 0.7rem;
    border-radius: 100px;
  }

  /* CTA link */
  .area-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    align-self: flex-start;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    background: var(--accent);
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    transition: background 0.2s, transform 0.2s;
  }
  .area-cta:hover {
    background: var(--accent-dark);
    transform: translateY(-2px);
  }

  /* Right visual */
  .area-visual {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map-placeholder {
    width: 100%;
    max-width: 380px;
    aspect-ratio: 4/3;
    background: linear-gradient(135deg, var(--accent-dark) 0%, var(--accent) 100%);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    color: rgba(255,255,255,0.7);
    position: relative;
    overflow: hidden;
    box-shadow: 0 16px 48px rgba(30, 61, 43, 0.3);
  }
  .map-placeholder::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      45deg,
      rgba(255,255,255,0.03) 0px,
      rgba(255,255,255,0.03) 1px,
      transparent 1px,
      transparent 28px
    );
  }
  .map-placeholder :global(svg) { color: rgba(255,255,255,0.5); }
  .map-placeholder span {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: 1.4rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #fff;
    position: relative;
  }
  .map-sub {
    font-size: 0.85rem !important;
    font-weight: 500 !important;
    color: rgba(255,255,255,0.65) !important;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .area-layout {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .area-visual { order: -1; }
    .map-placeholder { max-width: 100%; aspect-ratio: 16/7; }
  }
</style>
