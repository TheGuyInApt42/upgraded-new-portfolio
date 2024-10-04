<script>
	// Start: Svelte Imports
	import { dev } from '$app/environment';
	// End: Svelte Imports

	// Start: Local Imports
	import { page } from '$app/stores';

	//  Components
	import HeadTags from '@components/head-tags/HeadTags.svelte';

	// End: Local Imports

	// Start: Exported Properties
	/**
	 * @type {string}
	 */
	export let status;

	/**
	 * @type {string}
	 */
	export let error;
	// End: Exported Properties

	const metaData = {
		title: `${status} | Sveltekit`,
		description: '404 page of Sveltekit starter project'
	};
</script>

<!-- Start: Header Tage -->
<HeadTags {metaData} />
<!-- End: Header Tage -->

<!-- Start: Error View Layout -->
<div class="md:container md:mx-auto">
	<div class="flex flex-col justify-center items-center">
		<!-- Start: Error Status Code -->
		<h1>
			{$page.status}
		</h1>
		<!-- End: Error Status Code -->
		{#if error}
			<p>
				{error.name}
			</p>
			<!-- Start: Error Message container -->
			{#if dev && error.stack}
				<pre> {$page.error.message} </pre>
			{/if}
		{/if}
		<!-- End: Error Message container -->
	</div>
</div>
<!-- End: Error View Layout -->

<style>
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
