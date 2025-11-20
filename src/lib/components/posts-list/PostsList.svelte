<script>
	export let posts = [];
	import BlogPostCard from '@components/blog/BlogPostCard.svelte';

	// Format date for display
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

{#if posts.length === 0}
	<div class="text-center py-12">
		<p class="text-slate-600 dark:text-white/70">No posts found.</p>
	</div>
{:else}
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as post (post.slug)}
			<BlogPostCard
				title={post.title}
				excerpt={post.excerpt}
				date={formatDate(post.date)}
				imageUrl={post.coverImage || '/placeholder.jpg'}
				slug={post.slug}
			/>
		{/each}
	</div>
{/if}
