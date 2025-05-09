<script>
	// Start: External Imports
	import Saos from 'saos';
	// End: External Imports

	// Start: Svelte Imports
	// End: Svelte Imports

	// Start: Local Imports

	// Core services

	// Utils

	// Components
	import ServiceBlock from './components/service-block/ServiceBlock.svelte';
	import HeadTags from '@components/head-tags/HeadTags.svelte';
	import MiniBanner from '@components/mini-banner/MiniBanner.svelte';
	import Banner from '@components/banner/Banner.svelte';

	// End: Local Imports

	// Exports
	// Start: Local component properties
	/**
	 * @type {IMetaTagProperties}
	 */
	const metaData = {
		title: `Services`,
		description: 'Gorham Web Consulting Description of services provided',
		keywords: [
			'Gorham Web Consulting',
			'services',
			'design',
			'SEO',
			'web development',
			'social media marketing',
			'email marketing'
		]
	};

	const services = [
		{
			heading: 'Design',
			tagline:
				'Grow your audience with attractive custom designs that look beautiful on desktop and mobile with great responsive designs.',
			text: 'I can create your web site from any design that you desire and it will look great on both mobile phones as well on a desktop. ',
			imageAlt: 'Notebook with design',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855349/GWC/services/design_uhxstl.webp',
			alignment: 'left',
			interesting:
				'Up to 70% of traffic comes from mobile, I can create an efficient mobile-first design to capture that audience'
		},
		{
			heading: 'SEO',
			tagline: 'Expand your audience with optimized search results.',
			text: 'I will try to raise your search profile so that you appear on top of search results. ',
			imageAlt: 'Looking at website traffic report',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855349/GWC/services/digital-marketing_davhg1.webp',
			alignment: 'right',
			interesting: 'Improve your Google/Bing/etc. ranking'
		},

		{
			heading: 'Development',
			tagline:
				'Grow your audience on the with a fast website with minimal loading and great user experience (UX).',
			text: 'I can build whatever features and functionality that you want with your website.',
			imageAlt: 'Laptop showing code',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646857337/GWC/services/437226-JavaScript-code-web_development-748x421_ikcoeo.webp',
			alignment: 'left',
			interesting: 'Blazing fast site with custom features of your desire can be built for you!'
		},
		{
			heading: 'Social Media/Email Marketing',
			tagline:
				'Expand your audience with focused social media campaigns and ads as well as email marketing.',
			text: 'I can create a web presence across social media platforms such as Instagram and Facebook. I can also do newsletters and email marketing for you',
			imageAlt: 'Phone with social media apps on screen',
			imageSrc:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855349/GWC/services/social-media_uj5z8e.webp',
			alignment: 'right',
			interesting:
				'Increase your brand awareness across social media - gain more customers through an email campaign'
		}
	];

	// End: Local component properties

	// Start: Local component methods

	// End: Local component methods
</script>

<!-- Start: Header Tag -->
<HeadTags {metaData} />
<!-- End: Header Tag -->

<main>
	<!-- Main landing section -->
	<section
		class="px-8 lg:px-0 lg:flex lg:justify-center xl:max-w-screen-2xl xl:mx-auto relative top-28 lg:top-[120px]"
	>
		<!-- Centered landing section -->
		<div>
			<div
				class="pt-4 pb-16 md:grid md:grid-cols-2 md:gap-x-8 md:place-items-center lg:pt-8 lg:pb-20 lg:flex lg:items-center lg:justify-center"
			>
				<!-- Text Container-->
				<div class="pt-8 mx-auto lg:w-1/3 lg:py-24 dark:text-white">
					<h1 class="text-3xl font-bold md:text-4xl lg:text-5xl">My Services</h1>
					<p class="mt-4 text-sm opacity-75 md:pr-4 lg:mt-8 md:text-lg lg:text-2xl">
						Here I show you what I can offer you for a glimpse into what will make you successful.
					</p>
				</div>

				<!-- Services -->
				<div class="pt-12 lg:pt-0 dark:text-white">
					<h2
						class="inline-block text-xs italic font-light uppercase opacity-75 lg:text-sm lg:pb-4"
					>
						Great Services
					</h2>

					<!-- Value Propositions -->
					<div class="grid gap-y-4 md:gap-y-0 md:grid-cols-2 md:gap-x-12 lg:gap-y-12">
						<!-- 1 -->
						<div>
							<!-- Icon -->
							<div>
								<svg
									class="w-8 -ml-2 lg:w-auto"
									width="48"
									height="48"
									viewBox="0 0 48 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M36.6594 13.9307C40.0852 17.704 43.1412 22.1991 42.5137 27.1822C41.904 32.0241 38.038 35.6801 33.6578 37.7677C29.8669 39.5743 25.6946 38.2591 21.5771 37.1604C16.7404 35.8698 11.0751 35.4647 8.61113 31.0845C5.7926 26.0741 6.26323 19.777 9.03883 14.8715C11.9258 9.76915 17.0741 5.877 22.9877 5.67559C28.5241 5.48703 32.89 9.77899 36.6594 13.9307Z"
										fill="#E0082D"
										fill-opacity="0.08"
									></path>
									<path
										d="M28.6897 27.5647C29.0794 27.9523 29.0794 28.5839 28.6897 28.9715L27.2562 30.405L27.2583 30.403C26.8789 30.7824 26.2267 31.4345 25.3039 32.3553C24.8691 32.7798 24.1657 32.7757 23.735 32.3451L15.6591 24.2752C15.5557 24.1726 15.4737 24.0506 15.4178 23.9161C15.3618 23.7817 15.333 23.6375 15.333 23.4918C15.333 23.3462 15.3618 23.202 15.4178 23.0676C15.4737 22.9331 15.5557 22.8111 15.6591 22.7084L23.733 14.6407C23.9412 14.4329 24.2233 14.3161 24.5174 14.3161C24.8116 14.3161 25.0937 14.4329 25.3018 14.6407L28.6877 18.0245C29.0773 18.4121 29.0773 19.0437 28.6877 19.4313C28.5005 19.6175 28.2473 19.722 27.9832 19.722C27.7192 19.722 27.4659 19.6175 27.2788 19.4313L24.7153 16.8637C24.6087 16.7571 24.4426 16.7571 24.3359 16.8637L17.8862 23.3073C17.7796 23.4139 17.7796 23.58 17.8862 23.6867L24.3339 30.1302C24.3421 30.1384 24.3523 30.1446 24.3605 30.1528C24.4672 30.2369 24.6148 30.2287 24.7133 30.1302L27.2808 27.5647C27.6705 27.175 28.3021 27.175 28.6897 27.5647V27.5647ZM22.3795 23.4508C22.3795 22.8732 22.6092 22.3192 23.018 21.9108C23.4268 21.5023 23.9813 21.2729 24.5595 21.2729C25.1376 21.2729 25.6921 21.5023 26.1009 21.9108C26.5098 22.3192 26.7394 22.8732 26.7394 23.4508C26.7394 24.0284 26.5098 24.5824 26.1009 24.9908C25.6921 25.3993 25.1376 25.6287 24.5595 25.6287C23.9813 25.6287 23.4268 25.3993 23.018 24.9908C22.6092 24.5824 22.3795 24.0284 22.3795 23.4508ZM33.3758 24.2424L30.8554 26.7505C30.4657 27.1381 29.8341 27.1381 29.4465 26.7485C29.3538 26.6562 29.2803 26.5466 29.2302 26.4259C29.18 26.3052 29.1542 26.1758 29.1542 26.0451C29.1542 25.9143 29.18 25.7849 29.2302 25.6642C29.2803 25.5435 29.3538 25.4339 29.4465 25.3416L31.1486 23.6415C31.2553 23.5349 31.2553 23.3688 31.1486 23.2621L29.4711 21.5867C29.3784 21.4944 29.3049 21.3848 29.2548 21.2641C29.2046 21.1434 29.1788 21.014 29.1788 20.8832C29.1788 20.7525 29.2046 20.6231 29.2548 20.5024C29.3049 20.3817 29.3784 20.272 29.4711 20.1798C29.6582 19.9936 29.9115 19.8891 30.1755 19.8891C30.4395 19.8891 30.6928 19.9936 30.88 20.1798L33.3778 22.6756C33.4808 22.7785 33.5624 22.9007 33.6181 23.0352C33.6737 23.1697 33.7023 23.3139 33.7021 23.4594C33.7019 23.605 33.673 23.7491 33.617 23.8835C33.561 24.0178 33.479 24.1398 33.3758 24.2424V24.2424Z"
										fill="#E0082D"
									></path>
								</svg>
							</div>

							<!-- Heading -->
							<h3 class="mb-2 -mt-2 text-sm font-medium lg:text-base lg:mt-0">
								<b class="font-black">Designs</b> that impress
							</h3>
						</div>

						<!-- 2 -->
						<div>
							<!-- Icon -->
							<div>
								<svg
									class="w-8 -ml-2 lg:w-auto"
									width="48"
									height="48"
									viewBox="0 0 48 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M27.9876 21.5796C27.7119 21.5796 27.4777 21.4698 27.2853 21.2502C27.0928 21.0305 26.9965 20.7604 26.9965 20.4398V17.0203H23.001V30.6983H24.9987C25.2693 30.6983 25.5034 30.8111 25.7011 31.0367C25.8988 31.2623 25.9976 31.5324 25.9976 31.8471C25.9976 32.1617 25.8988 32.4289 25.7011 32.6485C25.5034 32.8682 25.2693 32.978 24.9987 32.978H19.0054C18.7245 32.978 18.4878 32.8682 18.2953 32.6485C18.1028 32.4289 18.0065 32.1617 18.0065 31.8471C18.0065 31.5324 18.1028 31.2623 18.2953 31.0367C18.4878 30.8111 18.7245 30.6983 19.0054 30.6983H21.0032V17.0203H17.0077V20.4398C17.0077 20.7604 16.9088 21.0305 16.7111 21.2502C16.5134 21.4698 16.2767 21.5796 16.001 21.5796C15.7252 21.5796 15.4911 21.4698 15.2986 21.2502C15.1061 21.0305 15.0099 20.7604 15.0099 20.4398V15.8804C15.0099 15.5717 15.1061 15.3046 15.2986 15.079C15.4911 14.8534 15.7278 14.7406 16.0088 14.7406H27.9954C28.2347 14.7406 28.3544 14.7703 28.3544 14.8297C28.5521 14.9128 28.7081 15.0493 28.8226 15.2393C28.9371 15.4293 28.9943 15.643 28.9943 15.8804V20.4398C28.9943 20.7604 28.8954 21.0305 28.6977 21.2502C28.5 21.4698 28.2633 21.5796 27.9876 21.5796Z"
										fill="#E0082D"
									></path>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12.0006 12.7441C15.2983 8.83367 19.3634 5.19509 24.4042 5.15598C29.3023 5.11797 33.4541 8.47731 36.114 12.557C38.416 16.0877 37.663 20.4136 37.1181 24.6561C36.4781 29.6397 36.8292 35.3296 32.7997 38.364C28.1903 41.8349 21.8631 42.205 16.6134 40.0968C11.1532 37.904 6.59575 33.3004 5.60813 27.4442C4.68352 21.9615 8.3721 17.0467 12.0006 12.7441Z"
										fill="#E0082D"
										fill-opacity="0.08"
									></path>
								</svg>
							</div>
							<!-- Heading -->
							<h3 class="mb-2 -mt-2 text-sm font-medium lg:text-base lg:mt-0">
								<b class="font-black">SEO</b> to get results
							</h3>
						</div>

						<!-- 3 -->
						<div>
							<!-- Icon -->
							<div>
								<svg
									class="w-8 -ml-2 lg:w-auto"
									width="48"
									height="49"
									viewBox="0 0 48 49"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M37.7129 15.3792C40.775 19.5094 43.3937 24.3272 42.2659 29.2669C41.17 34.0667 36.9238 37.3506 32.3181 39.0086C28.332 40.4436 24.275 38.7064 20.2512 37.192C15.5247 35.4132 9.87798 34.4405 7.84205 29.7972C5.51318 24.4857 6.61476 18.2113 9.89123 13.564C13.2991 8.7304 18.8563 5.33752 24.8129 5.72616C30.3896 6.09 34.3437 10.8348 37.7129 15.3792Z"
										fill="#E0082D"
										fill-opacity="0.08"
									></path>
									<path
										d="M27.1089 15V34L31.7107 30.1311V17.641L27.1089 15ZM24.9697 29.8503L21.2662 31.5573V16.6518L24.9697 17.8084V29.8503ZM16.2921 29.4109L19.1248 28.6224V19.1076L16.3033 18.6278L16.2921 29.4109Z"
										fill="#E0082D"
									></path>
								</svg>
							</div>
							<!-- Heading -->
							<h3 class="mb-2 -mt-2 text-sm font-medium lg:text-base lg:mt-0">
								<b class="font-black">Build </b> Features that matter
							</h3>
						</div>

						<!-- 4 -->
						<div>
							<!-- Icon -->
							<div>
								<svg
									class="w-8 -ml-2 lg:w-auto"
									width="48"
									height="48"
									viewBox="0 0 48 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M37.5851 15.6051C40.5143 19.7871 42.985 24.6399 41.7332 29.5134C40.5168 34.2489 36.2136 37.3952 31.5971 38.9179C27.6017 40.2357 23.6207 38.4025 19.6668 36.7915C15.0223 34.8991 9.44279 33.7823 7.546 29.1183C5.37629 23.7832 6.63781 17.584 10.0148 13.0583C13.5273 8.35111 19.1348 5.13173 25.0376 5.677C30.5639 6.18748 34.3621 11.0036 37.5851 15.6051Z"
										fill="#E0082D"
										fill-opacity="0.08"
									></path>
									<path
										d="M21.2729 20.875C21.8021 20.2345 22.6033 19.825 23.5 19.825C24.3967 19.825 25.1978 20.2345 25.727 20.875C26.0754 21.2974 26.2965 21.8102 26.3646 22.3536C26.4326 22.8969 26.3447 23.4484 26.1112 23.9437C25.8777 24.4389 25.5082 24.8576 25.0457 25.1509C24.5833 25.4441 24.047 25.5998 23.4994 25.5998C22.9519 25.5998 22.4156 25.4441 21.9531 25.1509C21.4907 24.8576 21.1212 24.4389 20.8877 23.9437C20.6541 23.4484 20.5663 22.8969 20.6343 22.3536C20.7023 21.8102 20.9235 21.2974 21.2719 20.875H21.2729Z"
										fill="#E0082D"
									></path>
									<path
										d="M27.4375 22.7125C27.4375 22.0489 27.2737 21.4231 26.9839 20.875H31.375C31.7927 20.875 32.1933 21.0409 32.4887 21.3363C32.7841 21.6317 32.95 22.0323 32.95 22.45V22.975C32.95 24.6413 31.6837 26.3476 29.4692 26.9482C29.2417 26.5394 28.909 26.1989 28.5056 25.9618C28.1022 25.7248 27.6429 25.5999 27.175 25.6H26.1775C26.5755 25.2318 26.8929 24.7851 27.1097 24.2881C27.3266 23.7912 27.4382 23.2547 27.4375 22.7125Z"
										fill="#E0082D"
									></path>
									<path
										d="M27.175 26.65C27.382 26.6494 27.587 26.6898 27.7784 26.7687C27.9697 26.8477 28.1436 26.9637 28.2899 27.11C28.4363 27.2564 28.5523 27.4302 28.6312 27.6216C28.7102 27.8129 28.7506 28.018 28.75 28.225V28.75C28.75 30.8195 26.797 32.95 23.5 32.95C20.203 32.95 18.25 30.8195 18.25 28.75V28.225C18.2495 28.018 18.2898 27.8129 18.3688 27.6216C18.4477 27.4302 18.5637 27.2564 18.7101 27.11C18.8564 26.9637 19.0303 26.8477 19.2216 26.7687C19.413 26.6898 19.618 26.6494 19.825 26.65H27.175Z"
										fill="#E0082D"
									></path>
									<path
										d="M14.0499 22.975C14.0499 24.6413 15.3162 26.3476 17.5307 26.9482C17.7582 26.5394 18.0909 26.1989 18.4943 25.9618C18.8977 25.7248 19.3571 25.5999 19.8249 25.6H20.8224C20.4244 25.2318 20.107 24.7851 19.8902 24.2881C19.6733 23.7912 19.5617 23.2547 19.5624 22.7125C19.5624 22.0489 19.7262 21.4231 20.0171 20.875H15.6249C15.2072 20.875 14.8066 21.0409 14.5112 21.3363C14.2159 21.6317 14.0499 22.0323 14.0499 22.45V22.975Z"
										fill="#E0082D"
									></path>
									<path
										d="M22.1874 16.9375C22.1874 16.1717 21.8831 15.4372 21.3416 14.8957C20.8001 14.3542 20.0657 14.05 19.2999 14.05C18.534 14.05 17.7996 14.3542 17.2581 14.8957C16.7166 15.4372 16.4124 16.1717 16.4124 16.9375C16.4124 17.7033 16.7166 18.4377 17.2581 18.9793C17.7996 19.5208 18.534 19.825 19.2999 19.825C20.0657 19.825 20.8001 19.5208 21.3416 18.9793C21.8831 18.4377 22.1874 17.7033 22.1874 16.9375Z"
										fill="#E0082D"
									></path>
									<path
										d="M30.5875 16.9375C30.5875 16.1717 30.2833 15.4372 29.7418 14.8957C29.2003 14.3542 28.4658 14.05 27.7 14.05C26.9342 14.05 26.1997 14.3542 25.6582 14.8957C25.1167 15.4372 24.8125 16.1717 24.8125 16.9375C24.8125 17.7033 25.1167 18.4377 25.6582 18.9793C26.1997 19.5208 26.9342 19.825 27.7 19.825C28.4658 19.825 29.2003 19.5208 29.7418 18.9793C30.2833 18.4377 30.5875 17.7033 30.5875 16.9375Z"
										fill="#E0082D"
									></path>
								</svg>
							</div>
							<!-- Heading -->
							<h3 class="mb-2 -mt-2 text-sm font-medium lg:text-base lg:mt-0">
								<b class="font-black">Social Media</b> to attract crowds
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Container -->
	<section class="px-1 md:px-2 lg:px-4 relative top-28 lg:top-[120px]">
		{#each services as service}
			<Saos animation={'swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both'}>
				<ServiceBlock {service} />
			</Saos>
		{/each}
	</section>

	<MiniBanner />
</main>

<style>
	@keyframes -global-slide-in-fwd-tr {
		0% {
			transform: translateZ(-1200px) translateY(-700px) translateX(500px);
			opacity: 0;
		}
		100% {
			transform: translateZ(0) translateY(0) translateX(0);
			opacity: 1;
		}
	}

	@keyframes -global-scale-out-center {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(0);
			opacity: 1;
		}
	}

	@keyframes -global-slide-in-top {
		0% {
			transform: translateY(-1000px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes -global-swing-in-top-fwd {
		0% {
			transform: rotateX(-100deg);
			transform-origin: top;
			opacity: 0;
		}
		100% {
			transform: rotateX(0deg);
			transform-origin: top;
			opacity: 1;
		}
	}

	@keyframes -global-slide-out-top {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		100% {
			transform: translateY(-1000px);
			opacity: 0;
		}
	}
</style>
