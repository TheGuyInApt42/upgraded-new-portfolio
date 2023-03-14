<style>
	img {
		width: 200px;
		height: 200px;
	}

	:global(.light nav) {
		background: white;
	}
</style>

<script>
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
			dark: dark,
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

{#if useThemeModeButton}
	<button
		on:click="{() => toggleTheme()}"
		aria-label="Toggle Dark Mode"
		type="button"
		class="{useTitleAndLogo
			? 'sticky-theme-mode-button w-10 h-10 p-3 bg-gray-200 rounded-full dark:bg-gray-800'
			: 'w-10 h-10 p-3 bg-gray-200 rounded-full dark:bg-gray-800'}"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			stroke="currentColor"
			class="w-4 h-4 text-gray-800 dark:text-gray-200"
		>
			{#if $theme == 'dark'}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="{2}"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				></path>
			{:else}
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="{2}"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
			{/if}
		</svg>
	</button>
{/if}
{#if !mobile}
	<nav
		class="flex flex-wrap items-center justify-between w-full p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav dark:bg-black bg-opacity-60 dark:text-gray-100 overflow-hidden"
	>
		<!-- <a href="#skip" class="skip-nav"> Skip to content </a> -->
		{#if useTitleAndLogo}
			<div class="w-auto p-1 text-gray-900 dark:text-gray-100 font-bold">
				{#if $theme == 'dark'}
					<a
						sveltekit:prefetch
						href="/"
						class="flex flex-row h-12 justify-center items-center"
						aria-label="{title}"
					>
						<img
							src="https://res.cloudinary.com/blackgandalf/image/upload/v1646855082/GWC/logos/logoblack_c9ft73.png"
							alt="Logo"
							class="mr-2"
						/>
						{title}
					</a>
				{:else}
					<a
						sveltekit:prefetch
						href="/"
						class="flex flex-row h-12 justify-center items-center"
						aria-label="{title}"
					>
						<img src="{logoImage}" alt="{title}" class="mr-2" />
						{title}
					</a>
				{/if}
			</div>
		{/if}
		<div class="flex flex-row items-center">
			{#each navLinks as navLink, index (navLink.path)}
				<a sveltekit:prefetch href="{navLink.path}" class="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
					{navLink.label}
				</a>
			{/each}
		</div>
	</nav>
{/if}
