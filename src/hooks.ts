// export async function getSession(request) {}

import type { MaybePromise } from '@sveltejs/kit/types/helper';

export const handle = async ({
	event,
	resolve
}: {
	event: RequestEvent;
	resolve: (event: RequestEvent) => MaybePromise<Response>;
}) => {
	const response = await resolve(event);

	return response;
};

// export async function handleError({ error, request }) {
// 	console.log(error);
// }
// export function getSession(request) {
// 	let tester = process.env;
// 	return JSON.stringify(tester);
// }
