<script>
  import Icon from './Icon.svelte';

  /** @type {import('$lib/config/siteConfig.js').SiteConfig} */
  export let config;

  $: telHref = `tel:${config.phone.replace(/\D/g, '')}`;
</script>

<!--
  Floating call button — mobile only.
  Stays anchored at the bottom of the screen.
  This alone captures a huge percentage of mobile visitors who are ready to call.
-->
<div class="float-cta" role="complementary" aria-label="Quick call button">
  <a href={telHref} class="float-btn">
    <Icon name="Phone" size={18} />
    <span>Call {config.phone}</span>
  </a>
</div>

<style>
  .float-cta {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 90;
    width: calc(100% - 2rem);
    max-width: 420px;

    /* Only show on mobile */
    display: none;
  }

  .float-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: 100%;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 800;
    font-size: 1.1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    background: var(--cta);
    padding: 1rem 1.5rem;
    border-radius: 50px;
    box-shadow:
      0 4px 20px rgba(196, 98, 26, 0.55),
      0 0 0 3px rgba(196, 98, 26, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .float-btn:hover,
  .float-btn:focus-visible {
    transform: scale(1.02);
    box-shadow:
      0 6px 28px rgba(196, 98, 26, 0.65),
      0 0 0 4px rgba(196, 98, 26, 0.25);
  }

  @media (max-width: 900px) {
    .float-cta { display: block; }
  }
</style>
