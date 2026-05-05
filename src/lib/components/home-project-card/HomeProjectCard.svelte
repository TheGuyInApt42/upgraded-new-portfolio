<script>
	export let heading;
	export let tools;
	export let text;
	export let url;
	export let img;
	export let skills;
	export let type;
	export let slug = null; // Optional slug for case study link

	function cloudinaryImage(url, width = 600, height = 462) {
		return url.replace(
			'/image/upload/',
			`/image/upload/f_auto,q_auto,w_${width},h_${height},c_fill/`
		);
	}

	// If slug is provided, link to case study, otherwise use the modal (for backwards compatibility)
	const caseStudyPath = slug ? `/projects/${slug}` : null;
</script>

<article>
	<!-- Project Image -->
	<div class="card">
		<picture>
			<source
				srcset={`
					${cloudinaryImage(img.webp, 400, 308)} 400w,
					${cloudinaryImage(img.webp, 600, 462)} 600w,
					${cloudinaryImage(img.webp, 800, 616)} 800w
				`}
				sizes="(max-width: 768px) 100vw, 390px"
				type="image/webp"
			/>

			<source
				srcset={`
					${cloudinaryImage(img.jpg, 400, 308)} 400w,
					${cloudinaryImage(img.jpg, 600, 462)} 600w,
					${cloudinaryImage(img.jpg, 800, 616)} 800w
				`}
				sizes="(max-width: 768px) 100vw, 390px"
				type="image/jpeg"
			/>
			<img
				class="card__image"
				src={cloudinaryImage(img.default, 600, 462)}
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
				{#if caseStudyPath}
					<a href={caseStudyPath} class="px-4 bg-true-blue py-2 inline-block">Learn More</a>
				{:else}
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						class="px-4 bg-true-blue py-2 inline-block">Visit Site</a
					>
				{/if}
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

	@media screen and (max-width: 768px) {
		article {
			width: 90%;
		}
	}
</style>
