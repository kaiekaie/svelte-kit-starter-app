// export async function getSession(request) {}

export const handle = async ({
	event,
	resolve
}: {
	event: RequestEvent;
	resolve: (event: RequestEvent) => Promise<Response>;
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
