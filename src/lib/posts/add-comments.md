---
title: "Set up Comments for Blog"
date: "2023-12-12"
updated: "2023-12-14"
categories: 
  - "sveltekit"
  - "markdown"
  - "blog"
  - "commenting"
coverImage: "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
coverWidth: 16
coverHeight: 9
excerpt: Process used to set up comments for blog.
---

<script>
    import { ExternalLink } from "@theguyinapt42/svelte-components"
</script>


In this post, I will go over how to set up a commenting system for a Sveltekit blog. I have chosen Waline as my commenting system. 

## Set up Database

    Waline has a pretty straightforward integration with LeanCloud database. I had never heard of LeanCloud before using it with Waline but it does have pretty simple setup.

    * <ExternalLink href="https://console.leancloud.app/register"  ariaLabel="LeanCloud Registration" cssClasses="text-red-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-gray-500 transition">Create</ExternalLink>  a LeanCloud account if you don't have one

* Enter console and create app

* Go to Settings to get App Keys ( Copy APP Key, APP ID, and Master Key)

## Server
4. <ExternalLink href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample"  ariaLabel="Deploy Vercel Template" cssClasses="text-red-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-gray-500 transition">Deploy</ExternalLink> to Vercel
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
