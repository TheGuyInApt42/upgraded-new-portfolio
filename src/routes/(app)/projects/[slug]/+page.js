import { getProjectBySlug } from '$lib/config';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const project = getProjectBySlug(params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
}
