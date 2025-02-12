<script>
	export let active = false;
	export let onClick;
</script>

<button
	on:click={onClick}
	class="rounded-full px-6 py-2 text-lg transition-all duration-300 {active
		? 'bg-teal-500 text-white dark:bg-amber-500'
		: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'}"
>
	<slot />
</button>
