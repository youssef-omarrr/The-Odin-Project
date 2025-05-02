const http = require('http');
const fs = require('fs'); // File system module to read files
const path = require('path'); // Path module to work with file and directory paths

const server = http.createServer((req, res) => {
    // first way that is not recommended

    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), 
    //     (err, content) => {
    //         if (err) {
    //             res.writeHead(500, { 'Content-Type': 'text/plain' });
    //             res.end('Server Error');
    //         } else {
    //             res.writeHead(200, { 'Content-Type': 'text/html' });
    //             res.end(content); // Serve the HTML file
    //         }
    //     });

    // } else if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), 
    //     (err, content) => {
    //         if (err) {
    //             res.writeHead(500, { 'Content-Type': 'text/plain' });
    //             res.end('Server Error');
    //         } else {
    //             res.writeHead(200, { 'Content-Type': 'text/html' });
    //             res.end(content); // Serve the HTML file
    //         }
    //     });
    // } 

    // else if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'John Doe', age: 30 },
    //         { name: 'Jane Doe', age: 25 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' }); // Set content type to JSON
    //     res.end(JSON.stringify(users)); // Serve JSON data

    // } else {
    //     fs.readFile(path.join(__dirname, 'public', '404.html'), 
    //     (err, content) => {
    //         if (err) {
    //             res.writeHead(500, { 'Content-Type': 'text/plain' });
    //             res.end('Server Error');
    //         } else {
    //             res.writeHead(404, { 'Content-Type': 'text/html' });
    //             res.end(content); // Serve the 404 HTML file
    //         }
    //     });
    // }



    // build file path
    let filePath = path.join(__dirname, 'public', 
        req.url === '/' ? 'index.html' : req.url); // Default to index.html if root URL

    // extension of file
    let extname = path.extname(filePath); // Get the file extension

    // initial content type
    let contentType = 'text/html'; // Default content type

    // check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'; // JavaScript file
            break;
        case '.css':
            contentType = 'text/css'; // CSS file
            break;
        case '.json':
            contentType = 'application/json'; // JSON file
            break;
        case '.png':
            contentType = 'image/png'; // PNG image
            break;
        case '.jpg':
            contentType = 'image/jpg'; // JPG image
            break;
        case '.gif':
            contentType = 'image/gif'; // GIF image
            break;
        case '.svg':
            contentType = 'image/svg+xml'; // SVG image
            break;
        default:
            contentType = 'text/html'; // Default to HTML if no match found
    }
        
    // read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') { // File not found error
                fs.readFile(path.join(__dirname, 'public', '404.html'), 
                (err, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8'); // Serve the 404 HTML file
                });
            } else { // Other server error
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(`Server Error : ${err.code}`); // Serve server error message
            }

        // If no error, serve the requested file content
        } else {
            // successful response
            res.writeHead(200, { 'Content-Type': contentType }); // Set content type header
            res.end(content); // Serve the requested file content
        }
    });
});

const PORT = process.env.PORT || 5000; // Use environment variable PORT or default to 5000
server.listen(PORT, 
    () => {
    console.log(`Server running on port ${PORT}...`);
});
