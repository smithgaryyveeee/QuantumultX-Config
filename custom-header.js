// Modify HTTP response headers with a custom header

// This is the regular expression that matches all HTTPS URLs
const regex = /^https:\/\/.*$/;

if (regex.test($request.url)) {
    // Modify the HTTP response headers
    $response.headers['X-Modified-By'] = 'Quantumult-X';

    // Return the modified response
    $done($response);
} else {
    // No changes needed, continue processing the request as usual
    $done();
}
