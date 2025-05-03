import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {	
		// NOTE: make this path is correct otherwise post page wont load
		const post = await import(`../../../../lib/posts/${params.post}.md`)

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post } 
		}
	} catch(err) {
		error(404, err);
	}
}
