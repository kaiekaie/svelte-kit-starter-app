import type { ServerRequest } from '@sveltejs/kit/types/hooks';

export const get = () => {
	return {
		body: { example: 'test' }
	};
};

export const post = (req: ServerRequest) => {
	return {
		body: req?.body || { example: 'test' }
	};
};
