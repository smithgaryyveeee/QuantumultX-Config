const regex = /^https:\/\/.*$/; // This is the regular expression that matches all HTTPS URLs

if (regex.test(request.url)) {
    // Modify the HTTP response headers
    const modifiedResponseHeaders = ['X-Modified-By'];

    // Add custom header to response
    modifiedResponseHeaders.push('Content-Type: text/html');

    // Return the modified response
    callback(responseWithModifiedHeaders);
} else {
    // No changes needed, continue processing the request as usual
    callback();
}

function* handleRequest() {
    let response = yield; // The regular http.createServer() function in Node.js accepts a callback function. In this case, we're using an arrow function with a more functional syntax.

    // Process the incoming request and generate a modified response. Here, I've added the custom header 'Content-Type: text/html'.
    const responseWithModifiedHeaders = makeHtmlString('<p>Hello from modified server!</p>');

    yield responseWithModifiedHeaders;
}

const server = http.createServer(handleRequest);
server.listen(3000, () => console.log('Server running on port 3000'));

