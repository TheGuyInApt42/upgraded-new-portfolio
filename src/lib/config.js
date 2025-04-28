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
	address: '428 S 8th Ave',
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
