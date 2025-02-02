// Example script to modify HTTP response headers with a custom header
const regex = /^https:\/\/.*$/;

if (regex.test($request.url)) {
    $response.headers['X-Modified-By'] = 'Quantumult-X';
    $done($response);
} else {
    $done();
}
