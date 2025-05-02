const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

module.exports = Logger;


// add this to index.js to test the logger
// const Logger = require('./logger');
// i = 1;

// const logger = new Logger();

// logger.on('message', 
//     (data) => console.log(`\n${i++}) Called Listener:`, data));


// logger.log('Hello World!');
// logger.log('Hello Node.js!');
// logger.log('Hello JavaScript!');
// logger.log('Hello TypeScript!');
// logger.log('Hello Python!');