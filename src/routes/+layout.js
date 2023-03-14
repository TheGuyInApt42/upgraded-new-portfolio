/**
 * @type {import('@sveltejs/kit').LayoutLoad}
 */
import { page } from '$app/stores';
export async function load() {
	return {
		path: page.path,
	};
}
