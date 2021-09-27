import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';
import { config } from 'dotenv';
config();

const svelteConfig = {
	preprocess: preprocess({
		postcss: true,
		replace: [['process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV)]]
	}),

	kit: {
		files: {
			assets: 'public'
		},
		ssr: true,
		hydrate: true,
		hostHeader: 'X-Forwarded-Host',
		adapter: node(),
		target: '#svelte'
	}
};

export default svelteConfig;
