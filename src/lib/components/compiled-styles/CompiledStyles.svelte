<script>
	// Start: Local Imports

	// Data
	import { environment } from '../../../environments/environment';
	// End: Local Imports

	// Start: Exported Properties
	export let cssFiles = [];
	// End: Exported Properties

	const isProd = environment.production;
</script>

<svelte:head>
	{#if cssFiles.length > 0 && isProd}
		{#each cssFiles as cssFile}
			<link rel="stylesheet" href="{cssFile.url}" />
		{/each}
	{/if}
</svelte:head>
