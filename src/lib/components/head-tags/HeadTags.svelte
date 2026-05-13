<script>
	// Start: Local Imports
	// Models

	// Components
	import SEO from '../seo/SEO.svelte';
	// End: Local Imports

	const defaultDescription = `Gorham Web Consulting designs and develops fast, modern websites for small businesses. 
		We specialize in creating user-friendly websites that are tailored to meet the unique 
		needs of small businesses. We strive to help you grow your business with any technical needs 
		you may have. Let us transform your vision into a powerful digital experience that drives results.
		Get started today!`;
	// Start: Exported Properties
	export let metaData = {};
	// End: Exported Properties

	metaData = {
		title: metaData.title || 'Gorham Web Consulting',
		description: metaData.description || defaultDescription,
		url: metaData.url || '',
		...metaData
	};
</script>

<SEO {metaData} />
