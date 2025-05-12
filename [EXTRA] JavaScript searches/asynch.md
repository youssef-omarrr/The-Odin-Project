## Summary

An `async` function declares a function whose execution may be suspended using `await` to pause for a Promise to settle. Calling an `async` function always returns a Promise that resolves with the function’s return value (or rejects if it throws). Internally, each `await` splits the function body into stages that build up a Promise chain, allowing you to write asynchronous code in a more synchronous-looking style and use ordinary `try`/`catch` for error handling. ([MDN Web Docs][1], [MDN Web Docs][1])

---

## 1. Declaration & Syntax

* **Declaration form**:

  ```js
  async function foo(param1, param2) {
    // can use await here
  }
  ```

  There must be no line break between `async` and `function` or it becomes invalid. ([MDN Web Docs][1])
* **Expression form**:

  ````js
  const bar = async function(x) { … };
  const baz = async (x) => { … }; // arrow function
  ``` :contentReference[oaicite:2]{index=2}  
  ````

---

## 2. Return Value & Implicit Promises

* **Always returns a Promise**:

  ```js
  async function foo() { return 1; }
  foo().then(val => console.log(val)); // logs 1
  ```

  Even non-Promise return values get wrapped: `foo()` is like `Promise.resolve(1)`. ([MDN Web Docs][1])
* **Promise identity**: If you return an existing Promise, an `async` function wraps it in a new Promise (so identity differs from `Promise.resolve(p)`). ([MDN Web Docs][1])

---

## 3. `await` Semantics

* **Purpose**: Pause execution until a Promise settles, then resume with its resolved value (or throw on rejection). ([MDN Web Docs][1])
* **Location**: Only valid inside `async` functions. Using it at top level outside modules throws a syntax error. ([MDN Web Docs][1])
* **Equivalent transformation**:

  ````js
  async function f() {
    await X;
    // ...
  }
  // ≈
  function f() {
    return Promise.resolve(X).then(() => { /* … */ });
  }
  ``` :contentReference[oaicite:7]{index=7}  
  ````

---

## 4. Execution Order & Concurrency Patterns

* **Top-level sync**: Code before the first `await` runs immediately.
* **Sequential awaits**:

  ```js
  const a = await p1;
  const b = await p2;
  ```

  p2 is not started until p1 resolves. ([MDN Web Docs][1])
* **Concurrent start, serial resume**:

  ```js
  const p1 = fetch(url1);
  const p2 = fetch(url2);
  const a = await p1;
  const b = await p2;
  ```

  Both fetches start together, but results are awaited in order. ([MDN Web Docs][1])
* **True concurrency** with `Promise.all`:

  ```js
  const [a, b] = await Promise.all([p1, p2]);
  ```

  Builds one promise chain so errors are caught cleanly. ([MDN Web Docs][1])

---

## 5. Error Handling

* **`try`/`catch`**: Wrap `await` calls directly.

  ````js
  async function getData() {
    try {
      return await fetchData();
    } catch (err) {
      return fallback();
    }
  }
  ``` :contentReference[oaicite:11]{index=11}  
  ````
* **Chaining `catch`**:

  ````js
  async function getData() {
    const data = await fetchData().catch(() => fallbackData());
    return process(data);
  }
  ``` :contentReference[oaicite:12]{index=12}  
  ````
* **Unhandled rejections**: If you `await` promises not wired into the main chain, early rejections can bubble up unexpectedly. Use `Promise.all` or handle each promise’s errors. ([MDN Web Docs][1])

---

## 6. Hoisting & Compatibility

* **Hoisting**: `async function` declarations are hoisted like regular functions, so you can call them before their definition in the same scope. ([MDN Web Docs][1])
* **Browser support**: Widely supported in modern browsers since around April 2017. ([MDN Web Docs][1])

---

## Quick-Reference Code Snippets

```js
// Basic async/await
async function fetchAndLog() {
  console.log('Start');
  const data = await fetch('/api/data').then(r => r.json());
  console.log(data);
}

// Concurrent vs sequential
async function seq() {
  const r1 = await fetch('/one');
  const r2 = await fetch('/two');
  // runs in series
}
async function conc() {
  const p1 = fetch('/one');
  const p2 = fetch('/two');
  const [r1, r2] = await Promise.all([p1, p2]);
  // runs in parallel
}

// Error handling
async function safeFetch() {
  try {
    return await fetch('/api');
  } catch {
    return { error: true };
  }
}
```

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function "async function - JavaScript | MDN"
