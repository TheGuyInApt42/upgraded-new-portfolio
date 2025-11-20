<script>
	export let title = '';
	export let excerpt = '';
	export let date = '';
	export let imageUrl = '/placeholder.jpg';
	export let slug = ''; // Add this prop
</script>

<div
	class="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-black/30 dark:hover:shadow-black/50"
>
	<div class="aspect-w-16 aspect-h-9 overflow-hidden">
		<img
			src={imageUrl}
			alt={title}
			class="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
		/>
	</div>
	<div class="p-6">
		<p class="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
			{date}
		</p>
		<h3 class="mb-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-2xl">
			{title}
		</h3>
		<p class="mb-4 text-base leading-relaxed text-slate-600 dark:text-white/70">{excerpt}</p>
		<a
			href="/blog/{slug}"
			class="inline-flex items-center font-semibold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
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
