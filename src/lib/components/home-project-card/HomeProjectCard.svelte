<script>
	export let heading;
	export let tools;
	export let text;
	export let url;
	export let img;
	export let videoUrl = null; // New prop for the video link (.mp4 or .webm)
	export let skills;
	export let type;
	export let slug = null;
	export let webmUrl = null;
	export let mp4Url = null;

	function cloudinaryImage(url, width = 600, height = 462) {
		return url.replace(
			'/image/upload/',
			`/image/upload/f_auto,q_auto,w_${width},h_${height},c_fill/`
		);
	}

	const caseStudyPath = slug ? `/projects/${slug}` : null;
</script>

<article>
	<div class="card">
		<!-- Show video loop if available, otherwise fallback to picture -->
		<!-- If either video format is provided, render the video element -->
		{#if webmUrl || mp4Url}
			{#key `${webmUrl}-${mp4Url}`}
				<video class="card__media" autoplay loop muted playsinline>
					{#if webmUrl}
						<source src={webmUrl} type="video/webm" />
					{/if}
					{#if mp4Url}
						<source src={mp4Url} type="video/mp4" />
					{/if}
					<track kind="captions" />
				</video>
			{/key}
		{:else}
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
					class="card__media"
					src={cloudinaryImage(img.default, 600, 462)}
					alt="Example page from {heading}"
					loading="lazy"
				/>
			</picture>
		{/if}

		<!-- Project Overlay -->
		<div class="card__overlay">
			<div class="overlay__text">
				<h3>{heading}</h3>
				<!-- Changed to a highly readable light shade for dark overlay context -->
				<p class="p-2 text-gray-300 font-semibold uppercase tracking-wider text-sm">{type}</p>
				{#if caseStudyPath}
					<a href={caseStudyPath} class="px-4 bg-true-blue py-2 inline-block rounded">Learn More</a>
				{:else}
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						class="px-4 bg-true-blue py-2 inline-block rounded">Visit Site</a
					>
				{/if}
			</div>
		</div>
	</div>
</article>

<style>
	article {
		width: 390px;
		aspect-ratio: 390 / 300; /* Maintains perfect proportions scaling up/down */
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
	}

	.card {
		width: 100%;
		height: 100%;
		position: relative;
	}

	/* Unified styling for both images and video tags */
	.card__media {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover; /* Guarantees asset fills the box without distortion */
	}

	.card__overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0;
		visibility: hidden; /* Fixed invalid property value */
		transition:
			opacity 0.4s ease,
			visibility 0.4s ease;
		background-color: rgba(57, 56, 57, 0.9); /* Slight opacity lets background hint through */
	}

	.card:hover .card__overlay {
		opacity: 1;
		visibility: visible;
	}

	.overlay__text {
		color: white;
		font-size: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 85%; /* Prevents text hitting the absolute edges of the card */
	}

	@media screen and (max-width: 768px) {
		article {
			width: 100%; /* Spans mobile container nicely */
		}
	}
</style>
