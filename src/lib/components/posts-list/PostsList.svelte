<script>
	export let posts = [];
	import BoopAction from '$lib/components/boop/BoopAction.svelte';
</script>

<ul class="posts-list">
	{#each posts as post (post)}
		<!-- BoopAction component to animate post list item-->
		<BoopAction animationType="pos-y-wiggle">
			<li class="my-6">
				<a href="/blog/{post.slug}">
					<h2 class="my-4 text-4xl dark:text-white underline">
						{post.title}
					</h2>
				</a>

				<p class="mb-4 text-sm dark:text-white"><em>{post.date}</em></p>
				<p class="text-lg dark:text-white">{post.excerpt}</p>
			</li>
		</BoopAction>
	{/each}
</ul>
