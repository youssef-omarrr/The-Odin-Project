const http = require('http');

// Create server object
http.createServer((req, res) => { // (req, res) are the request and response objects
    // Write response header that includes HTTP status code and content type
    // 200 is the HTTP status code for OK
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Write response content
    res.end('<h1>Hello World</h1>');
}).listen(5000, () => console.log('Server running on port 5000...')); // Listen on port 5000
// http://localhost:5000