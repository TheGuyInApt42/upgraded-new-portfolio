---
title: "Blog Process Template"
date: "2023-12-12"
updated: "2023-12-12"
categories: 
  - "sveltekit"
  - "markdown"
coverImage: "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
coverWidth: 16
coverHeight: 9
excerpt: Process used to set up template.
---

1. clone https://github.com/josh-collinsworth/sveltekit-blog-starter
2. npm install
3. add tailwind (Svelte Adder)
	- add "md" to extensions in tailwind config -> content
	-make sure tailwindcss and autoprefixer installed (if not install tailwindcss and autoprefixer package) - npm install -D tailwindcss postcss autoprefixer
4. remove export const prerender = true; line from +layout.svelte
5. add component library

End of basic template

Add Comments

## Database
1. Create LeanCloud account if you dont have one
2. Create app 
3. Go to Settings -> App Keys ( Copy APP Key, APP ID, and Master Key)

## Server
4. Deploy to Vercel [here](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample)
5. Name Vercel Project and create
6. Dashboard -> Settings -> Env variables
  -LEAN_ID = APP ID
  -LEAN_KEY = APP Key
  -LEAN_MASTER_KEY = Master Key
7. Redeploy ( Click Deployments -> Redeploy btn in right dropdown menu)
8. Check its running (visit site)

## Assign Domain (Optional)

Add CNAME

## Client Side (Importing in Front End)

1. Install @waline/client
<!-- 2. Create a <script> tag and initialize with init() from https://unpkg.com/@waline/client@v2/dist/waline.mjs while passing in the necessary el and serverURL options. -->

The el option is the element used for Waline rendering. You can set a CSS selector in the form of a string or an HTMLElement object.
serverURL is the link of the server, which you just created in Vercel.
For more options, visit the Component Props page

Example
```
<script>
	import { init } from '@waline/client';
	import { onMount } from 'svelte';

	let containerElement;

	export let commentsURL = 'https://waline-ten-hazel.vercel.app';
	export let reactionEmojis = [
		'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_heart_eyes.png',
		'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_joy.png',
		'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_consider.png',
		'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_sob.png'
	];

	onMount(async () => {
		init({
			el: containerElement,
			serverURL: commentsURL,
			lang: 'en',
			reaction: reactionEmojis
		});
	});
</script>

<section id="comments">
	<div id="waline" bind:this={containerElement} />
</section>
```