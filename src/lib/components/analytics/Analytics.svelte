<script>
	/*
  import { page } from '$app/stores'

  $: {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-VRMPNCPJGE', {
        page_title: document.title,
        page_path: $page.path,
      })
    }
  }*/
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-VRMPNCPJGE">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'G-VRMPNCPJGE');
	</script>
</svelte:head>
