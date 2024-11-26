export async function onRequest({ request }) {
	const url = new URL(request.url)

	const proxyUrl = 'https://minideserts.site'
	const backendUrl = `${proxyUrl}${url.pathname}`

	const response = await fetch(backendUrl, {
		method: request.method,
		headers: request.headers,
		body: request.body,
	})

	return response
}
