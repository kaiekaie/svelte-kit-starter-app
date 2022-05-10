export const get = () => {
	return {
		body: { example: 'test' }
	};
};

export const post = (req: Request) => {
	return {
		body: req?.body || { example: 'test' }
	};
};
