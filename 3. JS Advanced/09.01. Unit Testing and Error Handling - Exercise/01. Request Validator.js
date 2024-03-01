function validateRequest(request) {
    const methodPattern = /^(GET|POST|DELETE|CONNECT)$/;
    const uriPattern = /^(\*|[a-zA-Z0-9\.]+)$/;
    const versionPattern = /^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/;
    const messagePattern = /^[^<>\\&'"]*$/;

    if (!request.hasOwnProperty('method') || !methodPattern.test(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!request.hasOwnProperty('uri') || !uriPattern.test(request.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (!request.hasOwnProperty('version') || !versionPattern.test(request.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!request.hasOwnProperty('message') || !messagePattern.test(request.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

let request = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

try {
    let validRequest = validateRequest(request);
    console.log(validRequest);
} catch (error) {
    console.log(error.message);
}
