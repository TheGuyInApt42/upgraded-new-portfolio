<script>
	// Start: Local Imports

	// Components
	
	import { NavigationBar } from '@components/navigation-bar/NavigationBar.svelte';
	// End: Local Imports

	// Start: Exported Properties
	/**
	 * @type {string}
	 */
	export let logoImage = '';
	export let title = '';
	export let useTitleAndLogo;
	export let useThemeModeButton;


	export let navLinks;
	// End: Exported Properties

	// Local properties
</script>

<!-- Start: Navigation Progress bar -->

<!-- End: Navigation Progress bar -->

<!-- Start: Navigation bar -->
<NavigationBar
	navLinks="{navLinks}"
	logoImage="{logoImage}"
	title="{title}"
	useThemeModeButton="{useThemeModeButton}"
	useTitleAndLogo="{useTitleAndLogo}"
	on:toggleTheme
/>
<!-- End: Navigation bar -->
