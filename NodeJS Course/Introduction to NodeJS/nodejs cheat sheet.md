### **Node.js Fundamentals**
1. **Runtime Architecture**
   - Event-driven, non-blocking I/O
   - Single-threaded event loop (libuv)
   - V8 JavaScript engine

2. **Core Modules**
   ```javascript
   const fs = require('fs');         // File system
   const http = require('http');     // HTTP server
   const path = require('path');     // File paths
   const os = require('os');         // OS utilities
   const events = require('events'); // Event emitter
   const util = require('util');      // Utilities
   ```

3. **Basic Server Example**
   ```javascript
   const http = require('http');
   const server = http.createServer((req, res) => {
     res.writeHead(200, {'Content-Type': 'text/plain'});
     res.end('Hello World');
   });
   server.listen(3000);
   ```

---

### **npm & Package Management**
1. **Common Commands**
   ```bash
   npm init                  # Initialize project
   npm install <package>     # Install package
   npm install --save-dev    # Install dev dependency
   npm update                # Update packages
   npm run <script>          # Run custom script
   ```

2. **package.json Essentials**
   ```json
   {
     "scripts": {
       "start": "node app.js",
       "dev": "nodemon app.js"
     },
     "dependencies": {
       "express": "^4.18.2"
     }
   }
   ```

---

### **Asynchronous Programming**
1. **Patterns**
   - **Callbacks**:
     ```javascript
     fs.readFile('file.txt', 'utf8', (err, data) => {
       if (err) throw err;
       console.log(data);
     });
     ```

   - **Promises**:
     ```javascript
     fs.promises.readFile('file.txt', 'utf8')
       .then(data => console.log(data))
       .catch(err => console.error(err));
     ```

   - **Async/Await**:
     ```javascript
     async function readFile() {
       try {
         const data = await fs.promises.readFile('file.txt', 'utf8');
         console.log(data);
       } catch (err) {
         console.error(err);
       }
     }
     ```

2. **Event Emitter**
   ```javascript
   const EventEmitter = require('events');
   class MyEmitter extends EventEmitter {}
   const myEmitter = new MyEmitter();
   
   myEmitter.on('event', () => console.log('Event fired!'));
   myEmitter.emit('event');
   ```

---

### **Express.js Basics**
1. **Basic Setup**
   ```javascript
   const express = require('express');
   const app = express();
   
   // Middleware
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   
   // Routes
   app.get('/', (req, res) => res.send('Home'));
   app.post('/submit', (req, res) => res.json(req.body));
   
   app.listen(3000);
   ```

2. **Common Middleware**
   - `express.static()`: Serve static files
   - `morgan`: HTTP request logger
   - `cors`: Enable CORS
   - `helmet`: Security headers
   - `cookie-parser`: Parse cookies

3. **Routing**
   ```javascript
   const router = express.Router();
   router.route('/users')
     .get((req, res) => { /* GET logic */ })
     .post((req, res) => { /* POST logic */ });
   ```

---

### **Database Integration**
1. **MongoDB (Mongoose)**
   ```javascript
   const mongoose = require('mongoose');
   mongoose.connect('mongodb://localhost:27017/mydb');

   const userSchema = new mongoose.Schema({
     name: String,
     email: { type: String, unique: true }
   });

   const User = mongoose.model('User', userSchema);
   ```

2. **SQL (MySQL)**
   ```javascript
   const mysql = require('mysql2');
   const pool = mysql.createPool({
     host: 'localhost',
     user: 'root',
     database: 'test'
   }).promise();
   
   const [rows] = await pool.query('SELECT * FROM users');
   ```

---

### **Authentication**
1. **JWT Example**
   ```javascript
   const jwt = require('jsonwebtoken');
   
   // Create token
   const token = jwt.sign({ userId: 123 }, 'secret-key', { expiresIn: '1h' });

   // Verify token
   jwt.verify(token, 'secret-key', (err, decoded) => {
     if (err) throw err;
     console.log(decoded);
   });
   ```

2. **Passport.js Strategy**
   ```javascript
   passport.use(new LocalStrategy(
     (username, password, done) => {
       User.findOne({ username }, (err, user) => {
         if (err) return done(err);
         if (!user) return done(null, false);
         if (!user.verifyPassword(password)) return done(null, false);
         return done(null, user);
       });
     }
   ));
   ```

---

### **Error Handling**
1. **Express Middleware**
   ```javascript
   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send('Something broke!');
   });
   ```

2. **Async Error Handling**
   ```javascript
   const asyncHandler = fn => (req, res, next) =>
     Promise.resolve(fn(req, res, next)).catch(next);
   
   app.get('/', asyncHandler(async (req, res) => {
     const data = await fetchData();
     res.json(data);
   }));
   ```

---

### **Testing & Debugging**
1. **Testing with Jest**
   ```javascript
   test('adds 1 + 2 to equal 3', () => {
     expect(sum(1, 2)).toBe(3);
   });
   ```

2. **Debugging**
   ```bash
   node --inspect app.js          # Enable inspector
   node --trace-warnings app.js   # Trace warnings
   ```

---

### **Deployment**
1. **Environment Variables**
   ```javascript
   require('dotenv').config();
   const PORT = process.env.PORT || 3000;
   ```

2. **Process Manager (PM2)**
   ```bash
   pm2 start app.js       # Start app
   pm2 monit             # Monitor
   pm2 save              # Save process list
   ```

---

### **Best Practices**
1. Use `async/await` over callbacks
2. Handle promise rejections:
   ```javascript
   process.on('unhandledRejection', (reason, promise) => {
     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
   });
   ```
3. Use proper logging (Winston/Bunyan)
4. Validate user input (Joi/express-validator)
5. Implement rate limiting

---

### **Useful Libraries**
- **Web Frameworks**: Express, Koa, Fastify
- **ORM/ODM**: Mongoose, Sequelize, Prisma
- **Testing**: Jest, Mocha, Chai
- **Logging**: Winston, Bunyan
- **Auth**: Passport.js, Auth0

---

### **Common Utilities**
```javascript
const util = require('util');
util.promisify(fs.readFile);    // Convert callback to promise
util.inspect(obj);              // String representation of object

// Path manipulation
path.join(__dirname, 'file.txt');
path.extname('index.html');      // '.html'
```
