<script>
	import { fade } from 'svelte/transition';

	export let referesh = '';
</script>

{#key referesh}
	<div in:fade|global={{ duration: 150 }} out:fade|global={{ duration: 150 }}>
		<slot />
	</div>
{/key}
