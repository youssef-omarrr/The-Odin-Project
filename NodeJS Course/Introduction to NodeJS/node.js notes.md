# Run Node.js scripts from the command line  
Node.js provides multiple ways to execute JavaScript code from the shell, ranging from invoking files directly to evaluating inline scripts and using its built-in task runner.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  

---

## 1. Running Files with `node`  
- After installing Node.js, the simplest invocation is:  
  ```bash
  node app.js
  ```  
  which tells the shell to execute the file `app.js` with the Node.js runtime.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- You must be in the same directory as the script, or provide the correct relative or absolute path to the file.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  

---

## 2. Using a “Shebang” Line  
- A **shebang** (`#!`) at the top of a script lets Unix-like OS loaders choose the interpreter automatically rather than typing `node` each time.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- Example specifying Node’s absolute path:  
  ```js
  #!/usr/bin/node
  ```  
   ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- More portable form uses `env`:  
  ```js
  #!/usr/bin/env node
  // your JavaScript code…
  ```  
   ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- To make the file executable, grant execute permission:  
  ```bash
  chmod u+x app.js
  ```  
   ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- **Definition**: a shebang is the character sequence `#!` at the start of a script that tells the OS which interpreter to use.  ([Shebang (Unix) - Wikipedia](https://en.wikipedia.org/wiki/Shebang_%28Unix%29?utm_source=chatgpt.com))  

---

## 3. Evaluating Code with `-e` / `--eval`  
- Node can execute JavaScript expressions or statements passed directly as strings, without a file.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- Example:  
  ```bash
  node -e "console.log(123)"
  ```  
   ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- On Windows `cmd.exe`, single quotes won’t work; you must use double quotes. On PowerShell or Git Bash, both single and double quotes are accepted.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  

---

## 4. Automatic Restarts with `--watch`  
- Since Node.js v16, the `--watch` flag automatically restarts the application whenever source files change.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- Usage:  
  ```bash
  node --watch app.js
  ```  
   ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- This feature is intended for development workflows to streamline testing and debugging.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  

---

## 5. Built-in Task Runner via `--run`  
- Node.js includes a minimal task runner to invoke scripts defined in your project’s `package.json` without relying on `npm run` or `yarn run`.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- In `package.json`, define scripts:  
  ```json
  {
    "scripts": {
      "start": "node app.js",
      "dev":   "node --run -- --watch",
      "test":  "node --test"
    }
  }
  ```  
   ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- Run a script by name:  
  ```bash
  node --run test
  ```  
   ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  

---

## 6. Passing Arguments to Scripts  
- To forward additional flags or arguments to your scripts, insert a double dash (`--`) after `--run`:  
  ```bash
  node --run dev -- --watch
  ```  
  passes `--watch` into the `dev` script.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  

---

## 7. Environment Variables Set by `--run`  
- When using `--run`, Node.js populates two special env vars:  
  - `NODE_RUN_SCRIPT_NAME`: the script key being executed.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
  - `NODE_RUN_PACKAGE_JSON_PATH`: the file path to `package.json`.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  

---

## 8. Intentional Limitations of the Task Runner  
- Unlike `npm run`, Node’s built-in runner omits features like `pre`/`post` hooks and focuses on minimalism and performance.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  
- It is best for straightforward tasks but lacks the extensibility of dedicated task runners.  ([Node.js — Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line))  

---


---

# Making HTTP requests with Node.js
How to perform HTTP requests with Node.js using GET, POST, PUT and DELETE

## Perform a GET Request

There are many ways to perform an HTTP GET request in Node.js, depending on the abstraction level you want to use.

The simplest way to perform an HTTP request using Node.js is to use the [Axios library](https://github.com/axios/axios):

```js
const axios = require('axios');

axios
  .get('https://example.com/todos')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
```

However, Axios requires the use of a 3rd party library.

A GET request is possible just using the Node.js standard modules, although it's more verbose than the option above:

```js
const https = require('https');

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET',
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
```

## Perform a POST Request

Similar to making an HTTP GET request, you can use the [Axios library](https://github.com/axios/axios) to perform a POST request:

```js
const axios = require('axios');

axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk',
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
```

Or alternatively, use Node.js standard modules:

```js
const https = require('https');

const data = JSON.stringify({
  todo: 'Buy the milk',
});

const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
```

## PUT and DELETE

PUT and DELETE requests use the same POST request format - you just need to change the `options.method` value to the appropriate method.

---



# Node’s `http.createServer`

Node’s `http.createServer([options][, requestListener])` is the primary factory method for spinning up an HTTP server in pure Node.js. It returns an `http.Server` instance (which inherits from `net.Server`), accepts an optional **options** object to customize server behavior and the classes used for requests/responses, and an optional **requestListener** callback that executes on every incoming HTTP request. Once created, you call `server.listen()` on a port (and optionally hostname/backlog) to start accepting connections. Under the hood it leverages Node’s **EventEmitter** and stream APIs to parse messages into `IncomingMessage` and `ServerResponse` objects without buffering entire payloads, enabling high-throughput, non-blocking I/O.  ([HTTP | Node.js v23.11.0 Documentation](https://nodejs.org/api/http.html), [Node.js http.createServer() Method - W3Schools](https://www.w3schools.com/nodejs/met_http_createserver.asp?utm_source=chatgpt.com))

---

## Signature & Return Value  
### Method Signature  
```js
http.createServer([options][, requestListener])
```
- `options` _(optional)_: an object conforming to `http.ServerOptions`, largely mirroring `net.ServerOptions` (e.g., `allowHalfOpen`, `pauseOnConnect`) plus HTTP-specific hooks for using custom `IncomingMessage` / `ServerResponse` subclasses  ([What Is The Use Case Of Options Argument Added to http ...](https://stackoverflow.com/questions/57717492/what-is-the-use-case-of-options-argument-added-to-http-createserver-method?utm_source=chatgpt.com)).  
- `requestListener` _(optional)_: a function `(req, res) => { … }` automatically bound to the server’s `'request'` event  ([Node.js http.createServer() Method - W3Schools](https://www.w3schools.com/nodejs/met_http_createserver.asp?utm_source=chatgpt.com)).  

### Return Value  
- Returns an instance of `http.Server`, which inherits from `net.Server` and implements methods like `.listen()`, `.close()`, and emits `'request'`, `'connection'`, `'error'`, and other events  ([HTTP | Node.js v23.11.0 Documentation](https://nodejs.org/api/http.html)).

---

## The `options` Parameter  
### Purpose  
- Allows **customization** of server behavior at creation time without subclassing or manual event wiring  ([What Is The Use Case Of Options Argument Added to http ...](https://stackoverflow.com/questions/57717492/what-is-the-use-case-of-options-argument-added-to-http-createserver-method?utm_source=chatgpt.com)).  
- Common use cases:  
  - **`allowHalfOpen`** (Boolean): whether to keep a socket open for writing after the other end sends FIN (default `false`).  
  - **`pauseOnConnect`** (Boolean): whether to pause sockets on connection, useful for connection hand-off in cluster setups (default `false`).  
  - **Custom Classes**: override which constructors Node uses for `IncomingMessage` and `ServerResponse`  ([What Is The Use Case Of Options Argument Added to http ...](https://stackoverflow.com/questions/57717492/what-is-the-use-case-of-options-argument-added-to-http-createserver-method?utm_source=chatgpt.com)).

### Example  
```js
import { createServer, IncomingMessage, ServerResponse } from 'http';

class MyReq extends IncomingMessage { /* … */ }
class MyRes extends ServerResponse { /* … */ }

const server = createServer(
  { IncomingMessage: MyReq, ServerResponse: MyRes, allowHalfOpen: true },
  (req, res) => { /* handler */ }
);
```
 ([What Is The Use Case Of Options Argument Added to http ...](https://stackoverflow.com/questions/57717492/what-is-the-use-case-of-options-argument-added-to-http-createserver-method?utm_source=chatgpt.com))

---

## The `requestListener` Callback  
### Invocation  
- Called once per HTTP request with two arguments:  
  1. `req` – an instance of `http.IncomingMessage` (a readable stream)  
  2. `res` – an instance of `http.ServerResponse` (a writable stream)  ([Node.js http.createServer() Method - W3Schools](https://www.w3schools.com/nodejs/met_http_createserver.asp?utm_source=chatgpt.com)).  

### Responsibilities  
- **Read request data** (e.g., `req.url`, `req.method`, streaming body via `req.on('data', ...)`).  
- **Write response headers** via `res.writeHead(statusCode, headers)` or `res.setHeader(name, value)`.  
- **Send response body** using `res.write(chunk)` and finalize with `res.end([data])`  ([Node.js http.createServer() Method - W3Schools](https://www.w3schools.com/nodejs/met_http_createserver.asp?utm_source=chatgpt.com)).  

---

## Creating & Starting the Server  
### Minimal “Hello World” Example  
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080/');
});
```
- `.listen(port[, hostname][, backlog][, callback])` binds the server to an address and begins accepting connections  ([Node.js server without a framework - Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework?utm_source=chatgpt.com)).  
- Callback to `.listen` fires when binding completes, emitting the `'listening'` event.  

### Listening Details  
- **Port**: numeric port or `0` for an OS-assigned random port (`server.address().port` afterwards).  
- **Hostname**: defaults to listening on all IPv4/IPv6 interfaces.  
- **Backlog**: OS queue length for pending connections.  

---

## Under the Hood: Events & Streams  
### Event-Driven Parsing  
- Incoming TCP connections emit a `'connection'` event on the `http.Server`, which is handled internally to parse HTTP messages, raising a `'request'` event once headers & chunk-streaming setup are ready  ([HTTP | Node.js v23.11.0 Documentation](https://nodejs.org/api/http.html?utm_source=chatgpt.com)).  

### Stream-Based I/O  
- **`IncomingMessage`** is a `Readable` stream: emits `'data'` and `'end'` events for request bodies.  
- **`ServerResponse`** is a `Writable` stream: write headers + body in chunks, with implicit `Content-Length` or chunked encoding  ([HTTP | Node.js v23.11.0 Documentation](https://nodejs.org/api/http.html?utm_source=chatgpt.com)).  

---

## When & Why to Use `http.createServer` Directly  
### Advantages  
- **No external dependencies**—pure Node.js, minimal footprint.  
- **Full control** over low-level HTTP handling and performance tuning.  
- Great for simple APIs, microservices, or learning the HTTP lifecycle.  

### Considerations  
- Writing manual routing, body parsing, cookie handling, and other middleware yourself.  
- For larger apps, frameworks like Express/Koa/Fastify build on top of `http.createServer` to simplify these tasks.  ([Create a Server with the Node.js HTTP Module - DEV Community](https://dev.to/bearer/create-a-server-with-the-node-js-http-module-50ao?utm_source=chatgpt.com))  

---

## Further Reading  
- **Official Anatomy of an HTTP Transaction** for a deep dive on message flow  ([Anatomy of an HTTP Transaction - Node.js](https://nodejs.org/en/learn/modules/anatomy-of-an-http-transaction?utm_source=chatgpt.com))  
- **MDN: Node.js Server Without a Framework** (hands-on static server example)  ([Node.js server without a framework - Learn web development](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework?utm_source=chatgpt.com))  
- **DigitalOcean Tutorial**: building a JSON-returning API with the HTTP module  ([How To Create a Web Server in Node.js with the HTTP Module](https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module?utm_source=chatgpt.com))  
