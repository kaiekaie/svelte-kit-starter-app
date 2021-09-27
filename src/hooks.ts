// export async function getSession(request) {}

export const handle = async ({ request, resolve }: Handler) => {
	const headers = {};

	const response = await resolve(request);

	return {
		...response,
		headers: {
			...response.headers,
			...headers
		}
	};
};

// export async function handleError({ error, request }) {
// 	console.log(error);
// }
// export function getSession(request) {
// 	let tester = process.env;
// 	return JSON.stringify(tester);
// }
