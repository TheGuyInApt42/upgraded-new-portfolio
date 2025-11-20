<script>
	import PostsList from '@components/posts-list/PostsList.svelte';
	import Pagination from '@components/pagination/Pagination.svelte';
	import HeadTags from '@components/head-tags/HeadTags.svelte';

	export let data;

	const metaData = {
		title: 'Blog | GWC',
		description:
			'Welcome to the Gorham Web Consulting blog, your go-to resource for web design tips, small business strategies, and digital marketing insights. Discover expert advice on creating an impactful online presence, optimizing your website for search engines, and leveraging the latest design trends to attract and engage customers. Join our community of small business owners and stay updated with valuable content that empowers you to succeed in the digital landscape.',
		url: '/blog',
		keywords: ['blog', 'gorham web consulting blog'],
		searchUrl: '/blog'
	};
</script>

<HeadTags {metaData} />

<main>
	<!-- Hero Section -->
	<section
		class="relative isolate overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-200 py-20 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-white md:py-24 lg:py-32"
	>
		<div class="pointer-events-none absolute inset-0 -z-10">
			<div
				class="absolute -top-24 left-12 h-56 w-56 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/20"
			></div>
			<div
				class="absolute bottom-[-140px] right-1/4 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-500/15"
			></div>
		</div>

		<div class="relative mx-auto max-w-4xl px-6 pt-28 text-center md:px-8 lg:pt-32">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/90 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm sm:text-xs dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-100"
			>
				Articles & Insights
			</span>
			<h1
				class="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl"
			>
				Blog
			</h1>
			<p
				class="mt-4 text-base leading-relaxed text-slate-600 dark:text-white/70 md:text-lg lg:text-xl"
			>
				Web design tips, small business strategies, and digital marketing insights to help you
				succeed online.
			</p>
			<div class="mt-6">
				<a
					href="/blog/category/"
					class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
					id="keywords"
				>
					Browse by Category
					<svg
						class="h-4 w-4"
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
	</section>

	<!-- Blog Posts Section -->
	<section
		class="bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-black md:py-24"
	>
		<div class="mx-auto max-w-7xl px-6 md:px-8">
			<PostsList posts={data.posts} />
			<div class="mt-12">
				<Pagination currentPage={data.page || 1} totalPosts={data.total} baseUrl="/blog" />
			</div>
		</div>
	</section>
</main>
