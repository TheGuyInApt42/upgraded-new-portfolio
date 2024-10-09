<script>
	import { openModal } from 'svelte-modals';
	import { fade, scale } from 'svelte/transition';
	import ProjectModal2 from '../modal/ProjectModal2.svelte';

	export let heading;
	export let tools;
	export let text;
	export let url;
	export let img;
	export let skills;
	export let type;

	function handleClick() {
		openModal(ProjectModal2, {
			title: heading,
			message: text,
			site: url,
			imgSrc: img,
			work: skills,
			tech: tools
		});
	}
</script>

<article in:scale|global out:fade|global>
	<!-- Project Image -->
	<div class="card">
		<picture>
			<source srcset={`${img.webp}`} type="image/webp" />
			<source srcset={`${img.jpg}`} type="image/jpeg" />
			<img
				class="card__image"
				src={`${img.default}`}
				alt="Example page from {heading}"
				width="390"
				height="300"
				loading="lazy"
			/>
		</picture>
		<!-- Project Overlay -->
		<div class="card__overlay">
			<div class="overlay__text">
				<h3>{heading}</h3>
				<p class="p-2 text-true-blue">{type}</p>
				<button class="px-4 bg-true-blue py-2" on:click={handleClick}>Learn More</button>
			</div>
		</div>
	</div>
</article>

<style>
	article {
		width: 390px;
		height: 300px;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
	}
	.card {
		height: 300px;
		position: relative;
		transition: all 0.5s ease-in;
	}

	.card__image {
		display: block;
		width: 100%;
		height: 100%;
	}

	.card__overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		visibility: none;
		transition: 0.5s ease;
		background-color: #393839;
	}

	.card:hover .card__overlay {
		opacity: 1;
	}

	.overlay__text {
		color: white;
		font-size: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
	}

	button {
		margin-top: 2rem;
		display: inline-block;
		color: white;
		text-decoration: none;
	}

	@media screen and (max-width: 768px) {
		article {
			width: 90%;
		}
	}
</style>
