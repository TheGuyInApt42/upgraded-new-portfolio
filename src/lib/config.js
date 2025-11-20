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
	phone: '(914) 419-4033',
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
		result:
			'The website increased online traffic and helped the store establish a stronger digital presence, attracting more local gaming customers and improving brand recognition.'
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
