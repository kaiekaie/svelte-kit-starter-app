interface TypeTest {
	data: string;
}
interface Handler {
	request: ServerRequest<Record<string, any>, Body>;
	resolve: (
		request: ServerRequest<Record<string, any>, Body>
	) => ServerResponse | Promise<ServerResponse>;
}
