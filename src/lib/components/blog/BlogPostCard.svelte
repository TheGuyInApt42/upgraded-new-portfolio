<script>
	export let title = '';
	export let excerpt = '';
	export let date = '';
	export let imageUrl = '/placeholder.jpg';
	export let slug = ''; // Add this prop
</script>

<div
	class="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
>
	<div class="aspect-w-16 aspect-h-9 overflow-hidden">
		<img
			src={imageUrl}
			alt={title}
			class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
		/>
	</div>
	<div class="p-6">
		<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">{date}</p>
		<h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
		<p class="mb-4 text-gray-600 dark:text-gray-300">{excerpt}</p>
		<a
			href="/blog/{slug}"
			class="inline-flex items-center text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
		>
			Read more
			<svg
				class="ml-2 h-4 w-4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</a>
	</div>
</div>
