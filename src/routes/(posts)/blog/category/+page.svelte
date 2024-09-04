<script>
	export let data
  const { uniqueCategories } = data

  const maxFontSizeForTag = 4;

  function setFontSize(category, highestValue){
	const numberOfPosts = category.count
	const name = category.title
	const link = `/blog/category/${name}`

	let fontSize = numberOfPosts / highestValue * maxFontSizeForTag
	fontSize = +fontSize.toFixed(2)


	fontSize = (fontSize <= 1) ? 1 : fontSize; // Set the font size to 1 if it is less than or equal to 1, otherwise keep it as it is

	const fontSizeProperty = `${fontSize}em`;
	return fontSizeProperty;

  }
</script>


<svelte:head>
	<title>Blog | Categories</title>
</svelte:head>


<div class="compressed-content">
	<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-4 dark:text-white">Blog Keywords</h1>
	
	<ul>
		{#each uniqueCategories as category}
		<li class="dark:text-white" style="font-size: {setFontSize(category, 5)}">
			<a  href="/blog/category/{category.title}" >
				{ category.title }
			</a>
			({category.count})
		</li>
		{/each}
	</ul>
</div>