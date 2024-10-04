import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			},
			platformProxy: {
				configPath: 'wrangler.toml',
				environment: undefined,
				experimentalJsonConfig: false,
				persist: false
			}
		}),
		alias: {
			'@components': './src/lib/components',
			'@stores': './src/stores'
		},
		prerender: {
			entries: [
				'*',
				'/api/posts/page/*',
				'/blog/category/*/page/',
				'/blog/category/*/page/*',
				'/blog/category/page/',
				'/blog/category/page/*',
				'/blog/page/',
				'/blog/page/*'
			],
			handleHttpError: ({ path, error }) => {
				// Include the error object
				if (error.status === 404) {
					if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
						return; // Ignore the 404 for this specific case
					} else if (path.startsWith('/blog/category/page/')) {
						console.warn(`Ignoring 404 for ${path} during prerendering`);
						return { status: 200 }; // Suppress the 404 error for these paths
					}
				}

				// For other errors, or if the path doesn't match the conditions above, re-throw the error
				throw new Error(error.message);
			}
		}
	},
	preprocess: [
		preprocess({
			postcss: true,
			scss: {
				// Ensures Sass variables are always available inside component <style> blocks as vars.$variableDefinedInFile
				prependData: `@use 'src/lib/assets/scss/vars';`
			}
		}),

		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		}),
		vitePreprocess({})
	]
};

export default config;
