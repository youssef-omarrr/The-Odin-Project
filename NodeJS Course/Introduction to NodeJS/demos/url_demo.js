const url = require('url');
const myURL = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myURL.href); // http://mywebsite.com:8000/hello.html?id=100&status=active
console.log(myURL.toString()); // http://mywebsite.com:8000/hello.html?id=100&status=active

// Host (root domain)
console.log(myURL.host); // mywebsite.com:8000
// Hostname (does not get port)
console.log(myURL.hostname); // mywebsite.com

// Pathname
console.log(myURL.pathname); // /hello.html

// Serialized query (gives everything after the question mark)
console.log(myURL.search); // ?id=100&status=active

// Params object (gives the query string as an object)
console.log(myURL.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add params
myURL.searchParams.append('abc', '123');
console.log(myURL.searchParams); // URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myURL.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`); // id: 100, status: active, abc: 123
});
