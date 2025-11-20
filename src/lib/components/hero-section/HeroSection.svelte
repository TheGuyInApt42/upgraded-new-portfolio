<script>
	const heading = 'Is your website working for you, or against you?';
	const subheading =
		'I help local businesses fix underperforming sites and build new ones that actually attract clients.';
	const question = 'Are You Ready to Grow?';
	const description =
		'I am an expert in developing custom websites for individuals and small businesses. My goal is to grow your idea or your business.';
	const cta = 'Hire Me';
	const image =
		'https://res.cloudinary.com/blackgandalf/image/upload/v1646855416/GWC/me4_suwmyd.webp';
	const alt = 'Ecstatic hero client';
</script>

<!-- Main landing section -->
<section
	class="md:flex md:justify-center md:items-end lg:items-center relative lg:gap-x-24 xl:mx-auto bg-true-blue lg:top-[120px] md:top-28"
>
	<div>
		<!-- Text Container-->
		<div class="px-4 pt-8 xs:pr-1 md:px-8 md:flex-shrink-0 lg:py-24">
			<h1 class="text-3xl font-bold md:text-4xl lg:text-5xl">
				{heading}
			</h1>

			<span class="inline-block text-xs lg:text-base lg:pb-2 pt-5">{subheading} </span>
			<h2 class="text-2xl font-bold">{question}</h2>
			<p class="mt-4 mb-8 text-sm opacity-75 md:text-base md:w-3/4 lg:text-xl">
				{description}
			</p>

			<!-- CTA -->
			<a
				href="/contact"
				class="inline-block px-4 py-2 mb-8 font-medium text-black uppercase shadow-md bg-turquoise-accent"
				><span class="text-lg opacity-75">{cta}</span></a
			>
		</div>
	</div>

	<!-- Hero image -->
	<div class="md:h-80 lg:h-full h-60 invisible md:visible">
		<!-- Human and Icons -->
		<div class="relative flex md:items-end h-full overflow-hidden md:-ml-20">
			<!-- Human -->
			<div class="inline-block lg:pt-40">
				<img class="w-64 lg:w-96" src={image} {alt} loading="lazy" />
			</div>
		</div>
	</div>
</section>
