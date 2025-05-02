const os  = require('os');

// Platform
console.log('Platform: ' + os.platform()); // Returns the operating system platform

// CPU Architecture
console.log('CPU Architecture: ' + os.arch()); // Returns the CPU architecture

// Free Memory
console.log('Free Memory: ' + os.freemem()); // Returns the amount of free system memory in bytes

// Total Memory
console.log('Total Memory: ' + os.totalmem()); // Returns the total amount of system memory in bytes

// Home Directory
console.log('Home Directory: ' + os.homedir()); // Returns the home directory of the current user

// Uptime
console.log('Uptime: ' + os.uptime()); // Returns the system uptime in seconds

// Hostname
console.log('Hostname: ' + os.hostname()); // Returns the hostname of the operating system
