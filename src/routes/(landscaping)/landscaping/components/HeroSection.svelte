<script>
	function scrollToSection(sectionId) {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section class="relative overflow-hidden py-20" id="hero">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 h-full w-full" aria-hidden="true">
		<!-- Image with modern loading attributes -->
		<!--TODO: optimize image with webp/cdn 
     <img 
    src="/images/hero.png" 
    srcset="/images/hero-small.webp 640w,
            /images/hero-medium.webp 1024w,
            /images/hero.webp 1920w"
    sizes="100vw"
    alt=""
    ...
/>
     -->
		<img
			src="/images/landscaping/hero.png"
			alt=""
			class="h-full w-full object-cover"
			loading="eager"
			fetchpriority="high"
			decoding="async"
			width="1920"
			height="1080"
		/>
		<div class="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/40"></div>
	</div>

	<!-- Content -->
	<div class="relative z-10 mx-auto max-w-4xl px-4 text-center">
		<h1 class="mb-6 text-4xl leading-tight font-bold text-white drop-shadow-lg md:text-5xl">
			Grow Your Landscaping Business with a Website That Works
		</h1>

		<p class="mx-auto mb-8 max-w-2xl text-lg font-medium text-green-50 drop-shadow md:text-xl">
			We build stunning, lead-generating websites for landscaping companies — starting at just
			$100/month.
		</p>

		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<button
				on:click={() => scrollToSection('contact')}
				class="transform cursor-pointer rounded-full bg-green-600 px-8
				py-3 font-medium text-white shadow-lg transition
				duration-300 hover:-translate-y-1 hover:bg-green-500
				hover:shadow-xl focus:ring-2 focus:ring-green-500 focus:ring-offset-2
				focus:outline-none"
				aria-label="Get a Free Site Preview"
			>
				Get a Free Site Preview
			</button>
		</div>

		<!-- Scroll indicator with accessibility improvements -->
		<div class="mt-12 animate-bounce" aria-hidden="true">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mx-auto h-8 w-8 text-white/70"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-label="Scroll down for more content"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	</div>
</section>
