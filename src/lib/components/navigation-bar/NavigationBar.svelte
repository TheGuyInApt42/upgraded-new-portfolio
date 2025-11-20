<script>
	import Logo from '@components/logo/Logo.svelte';
	// Svelte Imports
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';

	// Exports

	export let navLinks;
	export let logoImage = '';
	export let title = '';
	export let useTitleAndLogo = false;
	export let useThemeModeButton = true;

	// Store Imports
	import { theme } from '@stores';

	// Local Properties
	let dark = $theme == 'dark' ? true : false;
	//let dark = false;
	let mobile = false;

	// Local Methods
	const dispatch = createEventDispatcher();

	const toggleTheme = () => {
		dark = !dark;
		$theme = dark ? 'dark' : 'light';
		console.log($theme);
		dispatch('toggleTheme', {
			dark: dark
		});
	};

	onMount(async () => {
		// Define the query https://css-tricks.com/working-with-javascript-media-queries/
		const mobileDevice = window.matchMedia('(max-width: 768px)');

		mobileDevice.addEventListener('change', handleDeviceChange);

		function handleDeviceChange(e) {
			if (e.matches) mobile = true;
			else mobile = false;
		}

		// Run it initially
		handleDeviceChange(mobileDevice);
	});
</script>

{#if !mobile}
	<nav
		class="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-gradient-to-b from-white/95 via-white/80 to-white/60 px-4 py-3 text-slate-900 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:from-slate-950/95 dark:via-slate-900/90 dark:to-slate-900/70 dark:text-white"
	>
		<!-- <a href="#skip" class="skip-nav"> Skip to content </a> -->
		<div class="mx-auto flex w-full max-w-6xl items-center justify-between">
			{#if useTitleAndLogo}
				<div class="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
					<Logo />
				</div>
			{/if}
			<div class="flex items-center gap-2">
				{#each navLinks as navLink, index (navLink.path)}
					<a
						data-sveltekit-preload-data="hover"
						href={navLink.path}
						class="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-white/70 dark:hover:text-white dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900 sm:px-4 sm:text-base"
					>
						{navLink.label}
					</a>
				{/each}
				{#if useThemeModeButton}
					<button
						on:click={() => toggleTheme()}
						aria-label="Toggle Dark Mode"
						type="button"
						class="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition hover:border-emerald-300 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/20 dark:bg-white/10 dark:text-white/80 dark:hover:border-emerald-300/60 dark:hover:text-white dark:focus-visible:ring-white/40 dark:focus-visible:ring-offset-slate-900"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							stroke="currentColor"
							class="h-4 w-4"
						>
							{#if $theme == 'dark'}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width={2}
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								></path>
							{:else}
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width={2}
									d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
								></path>
							{/if}
						</svg>
					</button>
				{/if}
			</div>
		</div>
	</nav>
{/if}
