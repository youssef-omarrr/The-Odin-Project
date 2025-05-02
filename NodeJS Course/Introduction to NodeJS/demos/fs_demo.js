const fs = require('fs');
const path = require('path');

// Create a folder
// asynchronous method
// fs.mkdir(path.join(__dirname, 'test'), 
// {}, 
// (err) => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

// synchronous method
// fs.mkdirSync(path.join(__dirname, 'test'));

// Create and write to a file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 
'Hello World!', 
(err) => {
    if (err) throw err;
    console.log('File created and written to...');
});

// Append to a file
fs.appendFile(path.join(__dirname, 'test', 'hello.txt'),
'\nI love Node.js!', 
(err) => {
    if (err) throw err;
    console.log('File appended...');
});

// Read a file
fs.readFile(path.join(__dirname, 'test', 'hello.txt'),
'utf8',
(err, data) => {
    if (err) throw err;
    console.log(data);
});

// Rename a file
fs.rename(path.join(__dirname, 'test', 'hello.txt'),
path.join(__dirname, 'test', 'helloworld.txt'), 
(err) => {
    if (err) throw err;
    console.log('File renamed...');
});