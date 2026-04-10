<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import Icon from './Icon.svelte';

  /** @type {import('$lib/config/siteConfig.js').SiteConfig} */
  export let config;

  let scrolled = false;
  let menuOpen = false;

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 64;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  /** Close mobile menu when a nav link is tapped */
  function handleNavClick() {
    menuOpen = false;
  }

  /** Prevent body scroll when mobile menu is open */
  $: if (browser) {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  onDestroy(() => {
    if (browser) document.body.style.overflow = '';
  });
</script>

<header
  class="header"
  class:scrolled
  class:menu-open={menuOpen}
>
  <div class="header-inner">
    <!-- Logo / Business Name -->
    <a href="#hero" class="logo" on:click={handleNavClick}>
      <span class="logo-name">{config.shortName}</span>
      <span class="logo-sub">Landscaping &amp; Masonry</span>
    </a>

    <!-- Desktop Nav -->
    <nav class="desktop-nav" aria-label="Main navigation">
      {#each config.navLinks as link}
        <a href={link.href} class="nav-link">{link.label}</a>
      {/each}
    </nav>

    <!-- Desktop CTA -->
    <a href="tel:{config.phone.replace(/\D/g, '')}" class="header-cta desktop-cta">
      <Icon name="Phone" size={16} />
      {config.phone}
    </a>

    <!-- Mobile Hamburger -->
    <button
      class="hamburger"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      on:click={() => (menuOpen = !menuOpen)}
    >
      <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
    </button>
  </div>
</header>

<!-- Mobile Drawer -->
{#if menuOpen}
  <div class="mobile-overlay" on:click={handleNavClick} aria-hidden="true"></div>
  <nav class="mobile-drawer" aria-label="Mobile navigation">
    <div class="mobile-drawer-inner">
      {#each config.navLinks as link}
        <a href={link.href} class="mobile-nav-link" on:click={handleNavClick}>
          {link.label}
        </a>
      {/each}
      <a
        href="tel:{config.phone.replace(/\D/g, '')}"
        class="mobile-cta-btn"
        on:click={handleNavClick}
      >
        <Icon name="Phone" size={18} />
        Call {config.phone}
      </a>
    </div>
  </nav>
{/if}

<style>
  .header {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 100;
    transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
    background: transparent;
  }

  .header.scrolled,
  .header.menu-open {
    background: var(--accent-dark);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.35);
  }

  .header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 72px;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  /* Logo */
  .logo {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    text-decoration: none;
    flex-shrink: 0;
  }
  .logo-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 1.35rem;
    color: #fff;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
  .logo-sub {
    font-family: 'Barlow', sans-serif;
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.65);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* Desktop Nav */
  .desktop-nav {
    display: flex;
    gap: 0.25rem;
    margin-left: auto;
  }
  .nav-link {
    font-family: 'Barlow', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    letter-spacing: 0.03em;
    transition: color 0.2s, background 0.2s;
  }
  .nav-link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }

  /* Desktop CTA */
  .header-cta {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: #fff;
    background: var(--cta);
    padding: 0.55rem 1.1rem;
    border-radius: 4px;
    white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
    flex-shrink: 0;
  }
  .header-cta:hover {
    background: var(--cta-hover);
    transform: translateY(-1px);
  }

  /* Hamburger */
  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    padding: 0.4rem;
    margin-left: auto;
    border-radius: 4px;
    transition: background 0.2s;
  }
  .hamburger:hover { background: rgba(255,255,255,0.1); }

  /* Mobile overlay */
  .mobile-overlay {
    position: fixed;
    inset: 72px 0 0 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99;
  }

  /* Mobile drawer */
  .mobile-drawer {
    position: fixed;
    top: 72px;
    right: 0;
    bottom: 0;
    width: min(320px, 85vw);
    background: var(--accent-dark);
    z-index: 100;
    overflow-y: auto;
    box-shadow: -4px 0 24px rgba(0,0,0,0.4);
  }
  .mobile-drawer-inner {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1.5rem 3rem;
    gap: 0.25rem;
  }
  .mobile-nav-link {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.85);
    text-decoration: none;
    padding: 0.85rem 0.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    transition: color 0.2s, padding-left 0.2s;
  }
  .mobile-nav-link:hover {
    color: #fff;
    padding-left: 0.9rem;
  }
  .mobile-cta-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 0.05em;
    text-decoration: none;
    color: #fff;
    background: var(--cta);
    padding: 1rem;
    border-radius: 6px;
    margin-top: 1.5rem;
    transition: background 0.2s;
  }
  .mobile-cta-btn:hover { background: var(--cta-hover); }

  /* Responsive */
  @media (max-width: 900px) {
    .desktop-nav,
    .desktop-cta { display: none; }
    .hamburger   { display: flex; }
  }
</style>
