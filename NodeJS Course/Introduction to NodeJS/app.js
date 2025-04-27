#!/usr/bin/env node


//  To use a shebang, your file should have executable permission. You can give app.js the executable permission by running:
// chmod u+x app.js


// Get request
const https = require('https');

const options = {
    hostname: 'example.com',
    port: 443,
    path: '/todos',
    method: 'GET',
};

const req = https.request(options, // argument
    res => { // callback function
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', d => {
            process.stdout.write(d);
        });
    });

req.on('error', error => {
    console.error(error);
});

req.end();



// post request
const https = require('https');

const data = JSON.stringify({
    todo: 'Buy the milk',
});

const options2 = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
    },
};

const req2 = https.request(options2,
    res => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', d => {
            process.stdout.write(d);
        });
    });

req2.on('error', error => {
    console.error(error);
});

req2.write(data);
req2.end();