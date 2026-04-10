<script>
  /** @type {import('$lib/config/siteConfig.js').SiteConfig} */
  export let config;
</script>

<section id="work" class="work">
  <div class="section-container">
    <header class="section-header">
      <span class="eyebrow">Portfolio</span>
      <h2 class="section-title">Recent Projects</h2>
      <p class="section-subtitle">
        A sample of our work across Westchester County. Every project is completed
        with the same attention to detail — big or small.
      </p>
    </header>

    <!-- Masonry-style gallery grid -->
    <div class="gallery-grid">
      {#each config.gallery as item, i}
        <figure
          class="gallery-item"
          class:tall={i === 0 || i === 3}
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
          />
          <figcaption class="gallery-caption">
            <span>{item.label}</span>
          </figcaption>
        </figure>
      {/each}
    </div>

    <!-- Disclaimer / placeholder note — remove once real photos are used -->
    <p class="placeholder-note">
      Photos shown are representative examples. Contact us to see project photos from your area.
    </p>
  </div>
</section>

<style>
  .work {
    background: var(--accent-dark);
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
    color: var(--accent-light);
    margin-bottom: 0.6rem;
  }
  .section-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: clamp(2rem, 4vw, 3rem);
    text-transform: uppercase;
    letter-spacing: -0.01em;
    color: #fff;
    margin: 0 0 0.75rem;
  }
  .section-subtitle {
    font-family: 'Barlow', sans-serif;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.65;
    margin: 0;
  }

  /* Grid — responsive masonry-ish layout */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 240px;
    gap: 12px;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    margin: 0;
    cursor: pointer;
  }

  /* First and fourth items span 2 rows for visual interest */
  .gallery-item.tall {
    grid-row: span 2;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.45s ease;
  }
  .gallery-item:hover img {
    transform: scale(1.06);
  }

  /* Hover caption overlay */
  .gallery-caption {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    padding: 1.25rem;
    background: linear-gradient(
      to top,
      rgba(10, 28, 18, 0.85) 0%,
      rgba(10, 28, 18, 0.0) 55%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .gallery-item:hover .gallery-caption {
    opacity: 1;
  }
  .gallery-caption span {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #fff;
  }

  /* Placeholder note */
  .placeholder-note {
    margin-top: 1.5rem;
    text-align: center;
    font-family: 'Barlow', sans-serif;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.35);
    font-style: italic;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 200px;
    }
    .gallery-item.tall { grid-row: span 1; }
  }

  @media (max-width: 480px) {
    .gallery-grid {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 160px;
    }
    .gallery-caption { opacity: 1; } /* Always show on mobile */
  }
</style>
