
<script>
	//import '../app.pcss';
	import '$lib/assets/scss/global.scss';
	//import Header from '$lib/components/Header.svelte';
	//import Footer from '$lib/components/Footer.svelte';

	import { currentPage, isMenuOpen } from '$lib/assets/js/store';
	
	import { fade } from 'svelte/transition';
	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path);


</script>

<!-- 
	The below markup is used on every page in the site. The <slot> is where the page's
	actual contents will show up.
-->
<div class="layout" class:open={$isMenuOpen}>

	{#key data.path}
		<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
			<slot />
		</main>
	{/key}

</div>
