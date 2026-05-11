<script>
	import Logo from '@components/logo/Logo.svelte';
	import ExternalLink from '@components/external-link/ExternalLink.svelte';
	import { createEventDispatcher } from 'svelte';
	import { theme } from '@stores';

	export let navLinks = [];
	export let useTitleAndLogo = true;
	export let useThemeModeButton = true;

	const dispatch = createEventDispatcher();

	let isOpen = false;
	$: dark = $theme === 'dark';

	const toggleTheme = () => {
		$theme = dark ? 'light' : 'dark';
		dispatch('toggleTheme', { dark: !dark });
	};

	const openMenu = () => (isOpen = true);
	const closeMenu = () => (isOpen = false);
</script>

<!-- Sticky top bar (mobile) -->
<nav
	class="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-gradient-to-b from-white/95 via-white/80 to-white/60 px-4 py-3 text-slate-900 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:from-slate-950/95 dark:via-slate-900/90 dark:to-slate-900/70 dark:text-white md:hidden"
>
	<div class="flex h-16 items-center justify-between">
		{#if useTitleAndLogo}
			<a href="/" on:click={closeMenu} class="flex items-center" aria-label="Home">
				<Logo />
			</a>
		{/if}

		<div class="flex items-center gap-2">
			{#if useThemeModeButton}
				<button
					on:click={toggleTheme}
					aria-label="Toggle Dark Mode"
					type="button"
					class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition hover:border-emerald-300 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/10 dark:text-white/80 dark:hover:border-emerald-300/60 dark:hover:text-white dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						class="h-4 w-4"
					>
						{#if dark}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width={2}
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width={2}
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						{/if}
					</svg>
				</button>
			{/if}

			<button
				on:click={openMenu}
				aria-label="Open menu"
				aria-expanded={isOpen}
				type="button"
				class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition hover:border-emerald-300 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/10 dark:text-white/80 dark:hover:border-emerald-300/60 dark:hover:text-white dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900"
			>
				<svg
					width="16"
					height="14"
					viewBox="0 0 19 15"
					fill="none"
					stroke="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.97 1.97h16M1.97 7.97h16M1.97 13.97h16"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	</div>
</nav>

<!-- Slide-in panel (mobile) -->
<div
	class="fixed inset-0 z-50 flex flex-col bg-gradient-to-b from-white via-white to-white/95 text-slate-900 backdrop-blur-2xl transition-transform duration-500 ease-out dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white md:hidden {isOpen
		? 'translate-x-0'
		: 'translate-x-full'}"
	aria-hidden={!isOpen}
>
	<!-- Panel header — matches the sticky bar's vertical rhythm -->
	<div
		class="flex h-[88px] items-center justify-between border-b border-slate-200/70 px-4 dark:border-white/10"
	>
		<a href="/" on:click={closeMenu} class="flex items-center" aria-label="Home">
			<Logo />
		</a>
		<button
			on:click={closeMenu}
			aria-label="Close menu"
			type="button"
			class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 dark:border-white/20 dark:bg-white/10 dark:text-white/80 dark:hover:border-emerald-300/60 dark:hover:text-white"
		>
			<svg
				width="14"
				height="14"
				viewBox="0 0 16 16"
				fill="none"
				stroke="currentColor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15 15L1 1M1 15L15 1"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</div>

	<!-- Menu items -->
	<nav class="flex flex-1 flex-col gap-1 px-4 pt-8">
		{#each navLinks as navLink (navLink.path)}
			<a
				href={navLink.path}
				on:click={closeMenu}
				data-sveltekit-preload-data="hover"
				class="rounded-2xl px-5 py-4 text-2xl font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 dark:text-white/80 dark:hover:bg-white/5 dark:hover:text-white"
			>
				{navLink.label}
			</a>
		{/each}
	</nav>

	<!-- Social icons -->
	<div class="flex justify-center gap-2 px-4 pb-10 pt-6 opacity-70">
		<ExternalLink href="https://www.twitter.com/jarrodtank" cssClasses="p-2" ariaLabel="Twitter">
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="text-slate-700 dark:text-white/80"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Twitter</title>
				<path
					d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.16 4.69 15.91 5.41 16.44C6.13 16.98 6.99 17.27 7.89 17.29C6.37 18.49 4.49 19.14 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"
				/>
			</svg>
		</ExternalLink>
		<ExternalLink
			href="https://www.facebook.com/jarrod.gorham"
			cssClasses="p-2"
			ariaLabel="Facebook"
		>
			<svg
				width="22"
				height="22"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="text-slate-700 dark:text-white/80"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Facebook</title>
				<path
					d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5879 18.0622 20.3855 19.6099 18.5701C21.1576 16.7546 22.0054 14.4457 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
				/>
			</svg>
		</ExternalLink>
	</div>
</div>
