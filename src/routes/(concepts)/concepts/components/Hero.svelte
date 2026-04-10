<script>
  import Icon from './Icon.svelte';

  /** @type {import('$lib/config/siteConfig.js').SiteConfig} */
  export let config;

  $: telHref = `tel:${config.phone.replace(/\D/g, '')}`;
</script>

<section
  id="hero"
  class="hero"
  style="--hero-image: url('{config.heroImage}')"
>
  <!-- Layered overlays for depth -->
  <div class="overlay-base" aria-hidden="true"></div>
  <div class="overlay-gradient" aria-hidden="true"></div>

  <div class="hero-content">
    <!-- Trust pill — quick credibility signal -->
    <div class="trust-pill" role="note">
      <span class="trust-dot" aria-hidden="true"></span>
      {config.trustLine}
    </div>

    <!-- Headline -->
    <h1 class="hero-headline">
      {config.businessName}
    </h1>

    <!-- Tagline -->
    <p class="hero-tagline">
      {config.tagline}
    </p>

    <!-- CTA Buttons -->
    <div class="hero-actions">
      <a href={telHref} class="btn-call">
        <Icon name="Phone" size={20} />
        Call Now
      </a>
      <a href="#contact" class="btn-estimate">
        Get Free Estimate
        <Icon name="ArrowRight" size={18} />
      </a>
    </div>
  </div>

  <!-- Scroll hint -->
  <a href="#services" class="scroll-hint" aria-label="Scroll to services">
    <Icon name="ChevronDown" size={28} />
  </a>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: var(--hero-image);
    background-size: cover;
    background-position: center 40%;
  }

  /* Base dark overlay */
  .overlay-base {
    position: absolute;
    inset: 0;
    background: rgba(10, 28, 18, 0.72);
  }

  /* Gradient overlay — darker at bottom for text legibility */
  .overlay-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(10, 28, 18, 0.1)  0%,
      rgba(10, 28, 18, 0.0)  35%,
      rgba(10, 28, 18, 0.45) 75%,
      rgba(10, 28, 18, 0.8)  100%
    );
  }

  /* Content */
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 860px;
    margin: 0 auto;
    padding: 6rem 1.5rem 4rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    /* Subtle fade-up on load */
    animation: heroReveal 0.8s ease both;
  }

  @keyframes heroReveal {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Trust pill */
  .trust-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Barlow', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    padding: 0.4rem 1rem;
    border-radius: 100px;
    animation: heroReveal 0.8s 0.1s ease both;
  }
  .trust-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--cta);
    flex-shrink: 0;
    box-shadow: 0 0 0 3px rgba(196, 98, 26, 0.35);
    animation: pulse 2.5s ease infinite;
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 3px rgba(196, 98, 26, 0.35); }
    50%       { box-shadow: 0 0 0 6px rgba(196, 98, 26, 0.1); }
  }

  /* Headline */
  .hero-headline {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: clamp(2.8rem, 7vw, 5.5rem);
    line-height: 1;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: #fff;
    margin: 0;
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.4);
    animation: heroReveal 0.8s 0.15s ease both;
  }

  /* Tagline */
  .hero-tagline {
    font-family: 'Barlow', sans-serif;
    font-size: clamp(1rem, 2.2vw, 1.25rem);
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    max-width: 540px;
    line-height: 1.6;
    margin: 0;
    animation: heroReveal 0.8s 0.25s ease both;
  }

  /* Buttons */
  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    animation: heroReveal 0.8s 0.35s ease both;
  }

  .btn-call,
  .btn-estimate {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 1.05rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.9rem 2rem;
    border-radius: 5px;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  }

  .btn-call {
    background: var(--cta);
    color: #fff;
    box-shadow: 0 4px 20px rgba(196, 98, 26, 0.4);
  }
  .btn-call:hover {
    background: var(--cta-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(196, 98, 26, 0.5);
  }

  .btn-estimate {
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    border: 1.5px solid rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(8px);
  }
  .btn-estimate:hover {
    background: rgba(255, 255, 255, 0.22);
    border-color: rgba(255, 255, 255, 0.7);
    transform: translateY(-2px);
  }

  /* Scroll hint */
  .scroll-hint {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 255, 255, 0.5);
    z-index: 2;
    animation: bounce 2s ease infinite;
    transition: color 0.2s;
  }
  .scroll-hint:hover { color: rgba(255,255,255,0.8); }
  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(6px); }
  }

  /* Mobile */
  @media (max-width: 640px) {
    .hero-actions { gap: 0.75rem; }
    .btn-call, .btn-estimate { padding: 0.85rem 1.5rem; font-size: 0.95rem; }
  }
</style>
