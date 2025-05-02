const path = require('path');

// Base file name
console.log(path.basename(__filename)); // path_demo.js
// Directory name
console.log(path.dirname(__filename)); // NodeJS Course/Introduction to NodeJS
console.log(__dirname); 

// File extension
console.log(path.extname(__filename)); // .js

// Create path object
const pathObj = path.parse(__filename);
console.log(pathObj); // { root: 'C:\\', dir: 'C:\\Users\\User\\Documents\\NodeJS Course\\Introduction to NodeJS', base: 'path_demo.js', ext: '.js', name: 'path_demo' }

// Concatenate paths
const newPath = path.join(__dirname, 'test', 'hello.html'); // __dirname is a global variable that contains the directory name of the current module
console.log(newPath); 