/**
 * @fileoverview SITE CONFIG — swap this file per client, everything else stays the same.
 *
 * Checklist when duplicating for a new client:
 *  1. businessName, shortName, tagline, city, phone, email
 *  2. colors.accent / colors.cta (brand palette)
 *  3. heroImage (real photo or keep Unsplash placeholder)
 *  4. services[] — 3–6 cards; icon must be a valid Lucide icon name (PascalCase)
 *  5. gallery[] — swap src URLs with real project photos
 *  6. trustBadges[] — update years/certifications as needed
 *  7. serviceAreaHeadline, serviceAreaBody, serviceAreaList
 *  8. ctaHeadline, ctaBody
 *  9. navLinks (keep hrefs matching section IDs below)
 */

/** @type {MockupConfigs} */
export const mockupConfigs = {
	'dipietro-landscaping': {
		// ─── Identity ───────────────────────────────────────────────────────────────
		businessName: 'DiPietro Landscaping & Masonry',
		metaTitle:
			'DiPietro Landscaping & Masonry | Professional Landscaping & Masonry Services in Westchester County',
		shortName: 'DiPietro',
		tagline: 'Professional Landscaping & Masonry Services in Westchester County',
		trustLine: 'Reliable · Licensed & Insured · Free Estimates',
		city: 'Westchester County, NY',
		phone: '(914) 699-8550',
		email: '', // optional — leave empty to hide email link

		// ─── Brand Colors ────────────────────────────────────────────────────────────
		// accent: primary green used for headings, borders, hover states
		// accentDark: darker shade for backgrounds, nav
		// cta: warm/urgent color for Call Now buttons (stands out from green)
		colors: {
			accent: '#3d6b4f', // forest green
			accentDark: '#1e3d2b', // deep green (hero overlay, nav, footer)
			accentLight: '#5a9470', // lighter green (hover states, accents)
			cta: '#c4621a', // burnt orange — high-contrast call button
			ctaHover: '#a34f12'
		},

		// ─── Hero ────────────────────────────────────────────────────────────────────
		// Replace with a real photo URL once client provides images.
		// Ideal: landscape/overhead shot of a finished project, 1920×1080+, high quality.
		heroImage:
			'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&auto=format&fit=crop&q=80',

		// ─── Services ────────────────────────────────────────────────────────────────
		// icon: any valid Lucide icon name (PascalCase), see https://lucide.dev
		// Recommended: 4–6 services for a balanced grid
		services: [
			{
				icon: 'Scissors',
				title: 'Lawn Maintenance',
				description:
					'Regular mowing, edging, blowing, and seasonal cleanups that keep your property looking sharp all year.'
			},
			{
				icon: 'Flower2',
				title: 'Landscape Design',
				description:
					'Custom planting plans, mulching, garden borders, and design that transforms your outdoor space.'
			},
			{
				icon: 'Layers',
				title: 'Masonry Work',
				description:
					'Patios, walkways, retaining walls, and steps built with quality stone and expert craftsmanship.'
			},
			{
				icon: 'TreePine',
				title: 'Tree Services',
				description:
					'Professional trimming, removal, and stump grinding to keep your property safe and beautiful.'
			},
			{
				icon: 'Droplets',
				title: 'Irrigation Systems',
				description: 'Installation and seasonal start-up/shut-down of smart sprinkler systems.'
			},
			{
				icon: 'MoveVertical',
				title: 'Grading & Drainage',
				description:
					'Slope correction and drainage solutions that prevent erosion and protect your foundation.'
			}
		],

		// ─── Gallery ─────────────────────────────────────────────────────────────────
		// Replace src with real project photos. Aim for 6 photos, mix of project types.
		// Recommended size: at least 800×600, landscape orientation preferred.
		gallery: [
			{
				src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80',
				alt: 'Landscaped backyard with lush lawn',
				label: 'Backyard Transformation'
			},
			{
				src: 'https://images.unsplash.com/photo-1597440474403-27bdc1d07c32?w=800&auto=format&fit=crop&q=80',
				alt: 'Bluestone patio installation',
				label: 'Bluestone Patio'
			},
			{
				src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&auto=format&fit=crop&q=80',
				alt: 'Pristine lawn maintenance',
				label: 'Lawn Care Program'
			},
			{
				src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
				alt: 'Garden refresh and planting',
				label: 'Garden Refresh'
			},
			{
				src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&auto=format&fit=crop&q=80',
				alt: 'Stone retaining wall',
				label: 'Retaining Wall'
			},
			{
				src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80',
				alt: 'Paver walkway and steps',
				label: 'Walkway & Steps'
			}
		],

		// ─── Trust Badges ────────────────────────────────────────────────────────────
		trustBadges: [
			{ icon: 'ShieldCheck', label: 'Licensed & Insured' },
			{ icon: 'BadgeCheck', label: 'Free Estimates' },
			{ icon: 'Clock', label: '15+ Years Experience' },
			{ icon: 'MapPin', label: 'Locally Owned & Operated' }
		],

		// ─── Service Area ────────────────────────────────────────────────────────────
		serviceAreaHeadline: 'Proudly Serving Westchester County',
		serviceAreaBody:
			'We provide expert landscaping and masonry services throughout Westchester County and surrounding areas. Wherever you are, we bring quality craftsmanship directly to your door.',
		serviceAreaList: [
			'Yonkers',
			'Mount Vernon',
			'New Rochelle',
			'White Plains',
			'Bronxville',
			'Scarsdale',
			'Pelham',
			'Larchmont',
			'Mamaroneck',
			'Tarrytown',
			'Dobbs Ferry',
			'Ardsley'
		],

		// ─── CTA Section ─────────────────────────────────────────────────────────────
		ctaHeadline: 'Ready to Transform Your Property?',
		ctaBody:
			"Get a free, no-obligation estimate. We'll assess your needs and provide a clear proposal — no pressure, no surprises.",

		// ─── Navigation ──────────────────────────────────────────────────────────────
		navLinks: [
			{ label: 'Services', href: '#services' },
			{ label: 'Our Work', href: '#work' },
			{ label: 'Why Us', href: '#trust' },
			{ label: 'Service Area', href: '#area' },
			{ label: 'Contact', href: '#contact' }
		]
	},
	'vernon-hills': {
		// ─── Identity ───────────────────────────────────────────────────────────────
		businessName: 'Vernon Hills Landscaping',
		metaTitle: 'Vernon Hills Landscaping | Professional Landscaping Services in Vernon Hills, IL',
		shortName: 'Vernon Hills Landscaping',
		tagline: 'Professional Landscaping Services in Vernon Hills, IL',
		trustLine: 'Reliable · Licensed & Insured · Free Estimates',
		city: 'Westchester County, NY',
		phone: '(914) 699-8550',
		email: '', // optional — leave empty to hide email link

		// ─── Brand Colors ────────────────────────────────────────────────────────────
		// accent: primary green used for headings, borders, hover states
		// accentDark: darker shade for backgrounds, nav
		// cta: warm/urgent color for Call Now buttons (stands out from green)
		colors: {
			accent: '#3d6b4f', // forest green
			accentDark: '#1e3d2b', // deep green (hero overlay, nav, footer)
			accentLight: '#5a9470', // lighter green (hover states, accents)
			cta: '#c4621a', // burnt orange — high-contrast call button
			ctaHover: '#a34f12'
		},

		// ─── Hero ────────────────────────────────────────────────────────────────────
		// Replace with a real photo URL once client provides images.
		// Ideal: landscape/overhead shot of a finished project, 1920×1080+, high quality.
		heroImage:
			'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&auto=format&fit=crop&q=80',

		// ─── Services ────────────────────────────────────────────────────────────────
		// icon: any valid Lucide icon name (PascalCase), see https://lucide.dev
		// Recommended: 4–6 services for a balanced grid
		services: [
			{
				icon: 'Scissors',
				title: 'Lawn Maintenance',
				description:
					'Regular mowing, edging, blowing, and seasonal cleanups that keep your property looking sharp all year.'
			},
			{
				icon: 'Flower2',
				title: 'Landscape Design',
				description:
					'Custom planting plans, mulching, garden borders, and design that transforms your outdoor space.'
			},
			{
				icon: 'Layers',
				title: 'Masonry Work',
				description:
					'Patios, walkways, retaining walls, and steps built with quality stone and expert craftsmanship.'
			},
			{
				icon: 'TreePine',
				title: 'Tree Services',
				description:
					'Professional trimming, removal, and stump grinding to keep your property safe and beautiful.'
			},
			{
				icon: 'Droplets',
				title: 'Irrigation Systems',
				description: 'Installation and seasonal start-up/shut-down of smart sprinkler systems.'
			},
			{
				icon: 'MoveVertical',
				title: 'Grading & Drainage',
				description:
					'Slope correction and drainage solutions that prevent erosion and protect your foundation.'
			}
		],

		// ─── Gallery ─────────────────────────────────────────────────────────────────
		// Replace src with real project photos. Aim for 6 photos, mix of project types.
		// Recommended size: at least 800×600, landscape orientation preferred.
		gallery: [
			{
				src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80',
				alt: 'Landscaped backyard with lush lawn',
				label: 'Backyard Transformation'
			},
			{
				src: 'https://images.unsplash.com/photo-1597440474403-27bdc1d07c32?w=800&auto=format&fit=crop&q=80',
				alt: 'Bluestone patio installation',
				label: 'Bluestone Patio'
			},
			{
				src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&auto=format&fit=crop&q=80',
				alt: 'Pristine lawn maintenance',
				label: 'Lawn Care Program'
			},
			{
				src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=80',
				alt: 'Garden refresh and planting',
				label: 'Garden Refresh'
			},
			{
				src: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&auto=format&fit=crop&q=80',
				alt: 'Stone retaining wall',
				label: 'Retaining Wall'
			},
			{
				src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80',
				alt: 'Paver walkway and steps',
				label: 'Walkway & Steps'
			}
		],

		// ─── Trust Badges ────────────────────────────────────────────────────────────
		trustBadges: [
			{ icon: 'ShieldCheck', label: 'Licensed & Insured' },
			{ icon: 'BadgeCheck', label: 'Free Estimates' },
			{ icon: 'Clock', label: '15+ Years Experience' },
			{ icon: 'MapPin', label: 'Locally Owned & Operated' }
		],

		// ─── Service Area ────────────────────────────────────────────────────────────
		serviceAreaHeadline: 'Proudly Serving Westchester County',
		serviceAreaBody:
			'We provide expert landscaping and masonry services throughout Westchester County and surrounding areas. Wherever you are, we bring quality craftsmanship directly to your door.',
		serviceAreaList: [
			'Yonkers',
			'Mount Vernon',
			'New Rochelle',
			'White Plains',
			'Bronxville',
			'Scarsdale',
			'Pelham',
			'Larchmont',
			'Mamaroneck',
			'Tarrytown',
			'Dobbs Ferry',
			'Ardsley'
		],

		// ─── CTA Section ─────────────────────────────────────────────────────────────
		ctaHeadline: 'Ready to Transform Your Property?',
		ctaBody:
			"Get a free, no-obligation estimate. We'll assess your needs and provide a clear proposal — no pressure, no surprises.",

		// ─── Navigation ──────────────────────────────────────────────────────────────
		navLinks: [
			{ label: 'Services', href: '#services' },
			{ label: 'Our Work', href: '#work' },
			{ label: 'Why Us', href: '#trust' },
			{ label: 'Service Area', href: '#area' },
			{ label: 'Contact', href: '#contact' }
		]
	}
};

/**
 * @typedef {Object} SiteConfig
 * @property {string} businessName
 * @property {string} metaTitle
 * @property {string} shortName
 * @property {string} tagline
 * @property {string} trustLine
 * @property {string} city
 * @property {string} phone
 * @property {string} email
 * @property {{ accent: string, accentDark: string, accentLight: string, cta: string, ctaHover: string }} colors
 * @property {string} heroImage
 * @property {Array<{ icon: string, title: string, description: string }>} services
 * @property {Array<{ src: string, alt: string, label: string }>} gallery
 * @property {Array<{ icon: string, label: string }>} trustBadges
 * @property {string} serviceAreaHeadline
 * @property {string} serviceAreaBody
 * @property {string[]} serviceAreaList
 * @property {string} ctaHeadline
 * @property {string} ctaBody
 * @property {Array<{ label: string, href: string }>} navLinks
 */
