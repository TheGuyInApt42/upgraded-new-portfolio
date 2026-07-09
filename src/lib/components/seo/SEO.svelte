<script>
	// Start: Local Imports
	// Models

	// Data
	import { environment } from '../../../environments/environment.local';
	// End: Local Imports

	// Start: Exported Properties

	export let metaData = {};
	// End: Exported Properties

	const BASE_URL = environment.launchURL
		? environment.launchURL
		: 'https://gorhamwebconsulting.com';

	metaData = {
		...metaData,
		robots: 'index,follow',
		openGraph: {
			...metaData.openGraph,
			url: `${BASE_URL}${metaData.url}`,
			title: metaData.title,
			description: metaData.description,
			locale: 'en_US'
		},
		twitter: {
			...metaData.twitter,
			title: metaData.title,
			description: metaData.description
		}
	};

	const jsonLd = (content) =>
		`<${'script'} type="application/ld+json">${JSON.stringify(content)}</${'script'}>`;

	$: {
		const imageUrl = typeof metaData.image === 'string' ? metaData.image : metaData.image?.url;

		if (imageUrl) {
			metaData.openGraph = {
				...metaData.openGraph,
				image: withBaseUrl(imageUrl)
			};

			metaData.twitter = {
				...metaData.twitter,
				image: withBaseUrl(imageUrl)
			};

			if (typeof metaData.image === 'object') {
				metaData.openGraph = {
					...metaData.openGraph,
					'image:width': metaData.image.width,
					'image:height': metaData.image.height,
					'image:alt': metaData.image.alt || metaData.title
				};

				metaData.twitter = {
					...metaData.twitter,
					'image:alt': metaData.image.alt || metaData.title
				};
			}
		}
	}

	const isProd = environment.production;
	const isAbsoluteUrl = (url) => /^https?:\/\//.test(url);
	const withBaseUrl = (url) => (isAbsoluteUrl(url) ? url : `${BASE_URL}${url}`);
</script>

<svelte:head>
	<meta name="robots" content={metaData.robots} />
	<meta name="googlebot" content={metaData.robots} />

	{#if metaData && metaData.title}
		<title>{metaData.title}</title>
		<meta name="title" content={metaData.title} />
	{/if}

	{#if metaData && metaData.description}
		<meta name="description" content={metaData.description} />
	{/if}

	{#if metaData && metaData.keywords}
		<meta name="keywords" content={metaData.keywords.join(', ')} />
	{/if}

	{#if metaData && metaData.twitter}
		<meta name="twitter:card" content="summary_large_image" />

		{#each Object.entries(metaData.twitter) as tag}
			{#if tag[0] && tag[1]}
				<meta name="twitter:{tag[0]}" content={tag[1]} />
			{/if}
		{/each}
	{/if}

	{#if metaData && metaData.openGraph}
		{#each Object.entries(metaData.openGraph) as tag}
			{#if tag[0] && tag[1]}
				<meta name="og:{tag[0]}" content={tag[1]} />
			{/if}
		{/each}
	{/if}

	{#if metaData && metaData.article}
		{#each Object.entries(metaData.article) as tag}
			{#if tag[0] && tag[1]}
				<meta name="article:{tag[0]}" content={tag[1]} />
			{/if}
		{/each}
	{/if}

	{#if metaData.schema}
		{#each metaData.schema as item}
			{@html jsonLd({
				...item,
				url: item.url ?? BASE_URL,
				logo: item.logo ?? `${BASE_URL}/logo.svg`,
				image: item.image ?? `${BASE_URL}/logo.svg`
			})}
		{/each}
	{/if}
</svelte:head>
