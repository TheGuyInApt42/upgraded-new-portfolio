/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'My Awesome Blog';
export const siteDescription = 'Built with the SvelteKit Static Blog Starter';
export const siteURL = 'example.com';
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-blog-starter';
export const siteAuthor = '- find and change this text in src/lib/config.js';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'About',
		route: '/about'
	},
	{
		title: 'Contact',
		route: '/contact'
	}
];

export const info = {
	name: 'Gorham Web Consulting',
	website: 'https://gorhamwebconsulting.com',
	niche: 'Landscaping Websites by Gorham Web Consulting',
	address: '343 S 2nd Ave',
	city: 'Mount Vernon, NY 10550',
	phoneDisplay: '(914)419-4033',
	phone: '9144194033',
	email: 'ralph@gorhamwebconsulting.com',
	services: [
		{
			day: 'Sunday',
			times: ['10:00 AM'],
			description: 'Bible School'
		},
		{
			day: 'Sunday',
			times: ['12:00 PM'],
			description: 'Worship Service'
		},
		{
			day: 'Wednesday',
			times: ['7:00 PM'],
			description: 'Midweek Bible Study & Prayer'
		}
	],
	officeHours: 'Monday-Friday: 9:00 AM - 5:00 PM'
};

export const defaultServices = [
	{
		id: 'seo',
		highlight: 'Get Found by More Customers',
		title: '',
		description:
			"We'll optimize your site so you show up on Google when people are searching for your services.",
		icon: 'seo'
	},
	/* {
		id: 'social',
		highlight: 'Social Media',
		title: 'to attract crowds',
		description: 'Reach people where they spend time with focused social campaigns and ads.',
		icon: 'social'
	}, */
	{
		id: 'build',
		highlight: 'A Fast, Frustration-Free Experience',
		title: '',
		description: 'Never lose a customer to a slow-loading or confusing website again.',
		icon: 'build'
	},
	{
		id: 'design',
		highlight: 'A Design That Impresses Your Customers',
		title: '',
		description: "We'll create a design that looks and feels polished on every screen.",
		icon: 'design'
	}
];

/**
 * Shared projects data
 * Used across homepage, projects page, and case studies
 */

export const projects = [
	{
		title: 'B Sharp Hair Art',
		slug: 'b-sharp-hair-art',
		description: `I redesigned this website for a local barber shop along with implementing a custom
		booking system.`,
		tools: 'Sveltekit, Tailwind, ClickSend',
		url: 'https://bsharphairart.com',
		img: {
			default:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1782692990/GWC/projects/Image_6-28-26_at_8.28_PM_kyupyz.png',
			webp: 'https://res.cloudinary.com/blackgandalf/image/upload/v1782692990/GWC/projects/Image_6-28-26_at_8.28_PM_kyupyz.webp',
			jpg: 'https://res.cloudinary.com/blackgandalf/image/upload/v1782692990/GWC/projects/Image_6-28-26_at_8.28_PM_kyupyz.jpg'
		},
		work: 'Web Design + Web Development + ClickSend Integration',
		type: 'Small Business',
		problem: `B Sharp Hair Art needed to update their website to showcase their services 
			and attract more customers as well as provide a way for customers to schedule appointments.`,
		solution:
			'Redesigned their website using Sveltekit and Tailwind, as well as implemented a custom booking system and admin portal.',
		result: `Created a fast, maintainable website that effectively showcases their services and 
			allows for customers to schedule appointments.`,
		webmUrl: 'https://res.cloudinary.com/blackgandalf/video/upload/v1782919353/bsharp_wlvvv6.webm',
		mp4Url: 'https://res.cloudinary.com/blackgandalf/video/upload/v1782919352/bsharp_lcf6x9.mp4'
	},
	{
		title: 'Ozzie Auto Body',
		slug: 'ozzie-auto-body',
		description: `I designed and developed this website for a local auto body shop, as well as implementing a custom
		booking system and admin portal.`,
		tools: 'Sveltekit, Tailwind, ClickSend',
		url: 'https://ozzieautobody.com',
		img: {
			default:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1777990763/GWC/projects/Image_5-5-26_at_10.16_AM_xwmwht.png',
			webp: 'https://res.cloudinary.com/blackgandalf/image/upload/v1777990763/GWC/projects/Image_5-5-26_at_10.16_AM_xwmwht.webp',
			jpg: 'https://res.cloudinary.com/blackgandalf/image/upload/v1777990763/GWC/projects/Image_5-5-26_at_10.16_AM_xwmwht.jpg'
		},
		work: 'Web Design + Web Development + Hosting + ClickSend Integration',
		type: 'Small Business',
		problem: `Ozzie Auto Body needed a modern, fast website to showcase their services 
			and attract more customers as well as provide a way for customers to get estimates 
			and schedule appointments.`,
		solution:
			'Built a modern, fast website using Sveltekit and Tailwind that highlights their services and makes it easy for customers to find them.',
		result: `Created a fast, maintainable website that effectively showcases their services and 
			allows for customers to get estimates and schedule appointments. The website is also optimized for 
			search engines and social media.`,
		webmUrl: 'https://res.cloudinary.com/blackgandalf/video/upload/v1782919354/ozzie_xdi5vk.webm',
		mp4Url: 'https://res.cloudinary.com/blackgandalf/video/upload/v1782919353/ozzie_zcdqmd.mp4'
	},

	{
		title: 'Camp Hill Play N Trade',
		slug: 'camp-hill-play-n-trade',
		description: `I designed and developed this site for a video game retail store.`,
		tools: 'Sveltekit, Tailwind',
		url: 'https://camphillplayntrade.com',
		img: {
			default:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1739398413/GWC/projects/PlayNTrade___Home_l1qqrf.webp',
			webp: 'https://res.cloudinary.com/blackgandalf/image/upload/v1739398413/GWC/projects/PlayNTrade___Home_l1qqrf.webp',
			jpg: 'https://res.cloudinary.com/blackgandalf/image/upload/v1739398413/GWC/projects/PlayNTrade___Home_l1qqrf.jpg'
		},
		work: 'Web Design + Web Development + Hosting',
		type: 'Small Business',
		problem:
			'Camp Hill Play N Trade needed an online presence to showcase their inventory, attract gaming enthusiasts, and compete with larger retailers in the video game market.',
		solution:
			'Developed a vibrant, engaging website using SvelteKit and Tailwind that highlights their game inventory, creates an appealing brand presence, and makes it easy for customers to find what they need.',
		result: `The website increased online traffic with average sessions of 100+and helped the store establish a stronger digital presence, 
			attracting more local gaming customers and improving brand recognition.`,
		webmUrl: 'https://res.cloudinary.com/blackgandalf/video/upload/v1782919350/play_cqpwmf.webm',
		mp4Url: 'https://res.cloudinary.com/blackgandalf/video/upload/v1782919349/play_mexfid.mp4'
	},
	{
		title: 'Bethlehem Apostolic Church',
		slug: 'bethlehem-apostolic-faith-church',
		description: `I designed and developed this website for a local church.`,
		tools: 'Sveltekit, Tailwind, Stripe Payments',
		url: 'https://bethlehemapostolic.org',
		img: {
			default:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1782917925/GWC/projects/bethlehem_lhahtk.png',
			webp: 'https://res.cloudinary.com/blackgandalf/image/upload/v1782917925/GWC/projects/bethlehem_lhahtk.webp',
			jpg: 'https://res.cloudinary.com/blackgandalf/image/upload/v1782917925/GWC/projects/bethlehem_lhahtk.jpg'
		},
		work: 'Web Design + Web Development + Hosting + Stripe Payments',
		type: 'Church',
		problem: `Bethlehem Apostolic Church needed a website to showcase their services 
			and provide a way for visitors to find them and learn more about their church, as well as a provide a way 
			for visitors to contact them, request prayer, or give donations.`,
		solution: `Built a website using Sveltekit and Tailwind that highlights their services and makes it easy for 
			customers to find them and using Stripe Payments to allow visitors to donate to the church.`,
		result: `Created a website that effectively showcases their services and 
			allows for visitors to find them and learn more about their church, as well as a provide a way 
			for visitors to contact them, request prayer, or give donations.`,
		webmUrl:
			'https://res.cloudinary.com/blackgandalf/video/upload/v1782919348/bethlehem_ujlpmv.webm',
		mp4Url: 'https://res.cloudinary.com/blackgandalf/video/upload/v1782919348/bethlehem_blbgl8.mp4'
	},
	{
		title: 'The Skincare Bakery',
		slug: 'the-skincare-bakery',
		description: `I implemented a redesign for this site for a skincare brand that was previously built on Wix 
		and needed an updated look and feel, as well as moving it to Shopify.`,
		tools: 'Shopify',
		url: 'https://theskincarebakery.com',
		img: {
			default:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1778088981/GWC/projects/Image_5-6-26_at_1.34_PM_ndcvmf.webp',
			webp: 'https://res.cloudinary.com/blackgandalf/image/upload/v1778088981/GWC/projects/Image_5-6-26_at_1.34_PM_ndcvmf.webp',
			jpg: 'https://res.cloudinary.com/blackgandalf/image/upload/v1778088981/GWC/projects/Image_5-6-26_at_1.34_PM_ndcvmf.jpg'
		},
		work: 'E-Commerce + Shopify Development + DNS Management',
		type: 'Small Business',
		problem:
			'The Skincare Bakery needed an updated website to better showcase their products and move away from Wix.',
		solution:
			'Implemented a redesign for the website using Shopify, ensuring a modern, fast, and user-friendly experience. The website is now faster, more user-friendly, and has a modern look and feel.',
		result: `The new website has improved the brand's online presence and helped attract more customers.`
	},

	{
		title: 'White Rock Center',
		slug: 'white-rock-center',
		description: `I designed and developed this website for an event hall in North Carolina.`,
		tools: 'Svelte / Express',
		url: 'https://whiterocknc.com',
		img: {
			default:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/whiterocknc.com_czlma8.webp',
			webp: 'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/whiterocknc.com_czlma8.webp',
			jpg: 'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/whiterocknc.com_czlma8.jpg'
		},
		webmUrl:
			'https://res.cloudinary.com/blackgandalf/video/upload/v1782919352/whiterock_vnjrhw.webm',
		mp4Url: 'https://res.cloudinary.com/blackgandalf/video/upload/v1782919351/whiterock_m0xfmo.mp4',
		work: 'Web Design + Web Development + Hosting',
		type: 'Small Business',
		problem:
			'White Rock Center needed a professional website to showcase their event space and make it easy for potential clients to view facilities, check availability, and book events.',
		solution:
			'Created a modern, responsive website with Svelte and Express backend, featuring an elegant design that highlights the venue, easy navigation, and clear booking information.',
		result:
			'The new website increased online inquiries by 150% and made it easier for clients to understand the venue offerings, leading to more bookings.'
	},
	{
		title: 'Ralph J Gorham',
		slug: 'ralph-j-gorham',
		description: `This was my second personal portfolio page. 
		It includes list of projects worked as well as a personal blog.`,
		tools: 'Svelte/ Strapi CMS',
		url: 'https://ralphjgorham.com',
		img: {
			default:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/ralphjgorham.com_ay13rt.webp',
			webp: 'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/ralphjgorham.com_ay13rt.webp',
			jpg: 'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/ralphjgorham.com_ay13rt.jpg'
		},
		webmUrl: 'https://res.cloudinary.com/blackgandalf/video/upload/v1782919351/ralph_swxqbq.webm',
		mp4Url: 'https://res.cloudinary.com/blackgandalf/video/upload/v1782919350/ralph_ew8cck.mp4',
		work: 'Web Design + Web Development + Hosting',
		type: 'Personal',
		problem:
			'Needed a modern portfolio site to showcase projects and blog posts, with a clean design that reflects professional development skills.',
		solution:
			'Built a custom Svelte-based portfolio with Strapi CMS integration, featuring a responsive design, blog functionality, and project showcase.',
		result:
			'Created a fast, maintainable portfolio that effectively showcases work and allows for easy content updates through the CMS.'
	},
	{
		title: 'RHINOStreet',
		slug: 'rhinostreet',
		description: `I designed and developed this site for a startup that is looking to 
			revolutionize marketing. It is a local search engine that allows an 
			user to search for businesses within 20 miles of location.`,
		tools: 'Sveltekit, Tailwind',
		url: 'https://rhinostreet.com',
		img: {
			default:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1696524205/GWC/projects/Web_capture_5-10-2023_124212_rhinostreet.com_amazax.webp',
			webp: 'https://res.cloudinary.com/blackgandalf/image/upload/v1696524205/GWC/projects/Web_capture_5-10-2023_124212_rhinostreet.com_amazax.webp',
			jpg: 'https://res.cloudinary.com/blackgandalf/image/upload/v1696524205/GWC/projects/Web_capture_5-10-2023_124212_rhinostreet.com_amazax.jpg'
		},
		work: 'Web Design + Web Development + Hosting',
		type: 'Small Business',
		problem:
			'RHINOStreet needed a modern, fast platform to connect local businesses with customers through a location-based search engine, requiring a complex interface that was still intuitive.',
		solution:
			'Built a high-performance SvelteKit application with Tailwind CSS, featuring location-based search, business listings, and a clean, modern UI that makes finding local businesses effortless.',
		result:
			'The platform successfully launched with a user-friendly interface that helps local businesses get discovered, increasing visibility and customer connections.'
	},
	{
		title: 'Droplet Fuel',
		slug: 'droplet-fuel',
		description: `This was a contract for a startup that sold a smart oil gauge.`,
		tools: 'HTML / CSS / jQuery/ PHP/ MySQL',
		url: 'https://www.dropletfuel.com',
		img: {
			default:
				'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/dropletfuel.com_wnpg5n.webp',
			webp: 'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/dropletfuel.com_wnpg5n.webp',
			jpg: 'https://res.cloudinary.com/blackgandalf/image/upload/v1646855276/GWC/projects/dropletfuel.com_wnpg5n.jpg'
		},
		work: 'Web Development',
		type: 'Small Business',
		problem:
			"Droplet Fuel's old site was slow, confusing, and had a 90% bounce rate on mobile. They were losing customers who couldn't easily understand their product or find the information they needed.",
		solution:
			'I built them a new, lightweight site focusing on a clear Call to Action ("Get a Quote") and making the mobile experience simple and fast. The site was optimized for performance and user experience.',
		result:
			'In the first 30 days, their "Get a Quote" form submissions increased by 300%, and they closed two new clients who found them directly on their phone.'
	}
];

/**
 * Get a project by slug
 */
export function getProjectBySlug(slug) {
	return projects.find((project) => project.slug === slug);
}

/**
 * Get featured projects (first 3)
 */
export function getFeaturedProjects() {
	return projects.slice(0, 3);
}
