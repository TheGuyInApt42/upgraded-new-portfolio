<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function showSurprise() {
		dispatch('showSurprise');
	}
</script>

<button
	class="inline-block px-4 py-2 ml-auto font-medium text-black uppercase 
    shadow-md bg-turquoise-accent lg:ml-0 lg:w-max dark:bg-orange-accent"
	on:click="{() => showSurprise()}"
>
	<span class="text-sm opacity-75">Learn More </span>
</button>
