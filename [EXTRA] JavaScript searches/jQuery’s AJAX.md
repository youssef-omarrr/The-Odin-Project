## Summary

jQuery’s AJAX module provides a flexible, chainable interface for making HTTP requests. At its core is the low-level `$.ajax()` method, which accepts a rich settings object to configure every aspect of the request. On top of that, several shorthand helpers—such as `$.get()`, `$.post()`, `$.getJSON()`, `$.getScript()`, and the `.load()` method—cover the most common use cases with minimal code. Global AJAX event handlers (`ajaxComplete`, `ajaxError`, etc.) let you monitor all requests in one place, while configuration hooks (`$.ajaxSetup()`, `$.ajaxPrefilter()`, `$.ajaxTransport()`) allow you to customize default behavior. Finally, all jQuery AJAX methods return a “jqXHR” object implementing the Promises/A interface, so you can use `.done()`, `.fail()`, `.always()`, and `.then()` for clean, chainable callbacks.

---

## 1. Core Method: `$.ajax()`

The `$.ajax()` method performs a fully configurable asynchronous HTTP request via a settings object. ([jQuery API][1])

* **Signature**: `jQuery.ajax( settings )` where `settings` is a plain object of key/value pairs. ([jQuery API][1])
* **Return**: A jqXHR object (superset of `XMLHttpRequest`) that implements the Promise interface. ([jQuery API][2])
* **Common options**: `url`, `type` (`"GET"`/`"POST"`), `data`, `dataType`, `headers`, `timeout`, `global`, and callback hooks like `success`/`error`/`complete`. ([jQuery API][1])

---

## 2. Shorthand Helpers

jQuery provides concise wrappers for the most frequent AJAX patterns:

### 2.1 `$.get()`

Load data via HTTP GET:

```js
jQuery.get(url, [data], [success], [dataType])
```

Returns a jqXHR. ([jQuery API][3])

* Common for fetching HTML or text.
* Can chain `.done()`, `.fail()`, `.always()`. ([jQuery API][4])

### 2.2 `$.post()`

Send data via HTTP POST:

```js
jQuery.post(url, [data], [success], [dataType])
```

Returns a jqXHR. ([jQuery API][4])

* Ideal for form submissions or RESTful create operations.
* Supports chaining of promise callbacks. ([jQuery API][4])

### 2.3 `$.getJSON()`

Fetch JSON-encoded responses via GET:

```js
jQuery.getJSON(url, [data], [success])
```

Returns a jqXHR that automatically parses JSON. ([jQuery API][2])

### 2.4 `$.getScript()`

Load and execute a JavaScript file:

```js
jQuery.getScript(url, [success])
```

Returns a jqXHR. ([jQuery API][5])

### 2.5 `.load()`

Fetch HTML and inject into elements:

```js
$(selector).load(url [, data ] [, complete ])
```

Supports loading page fragments via space-delimited selector syntax. ([jQuery API][6])

---

## 3. Global AJAX Event Handlers

Bind handlers that fire on **all** AJAX requests (if `global: true`):

```js
$(document).on("ajaxComplete", handler)
 $(document).on("ajaxError", handler)
 $(document).on("ajaxSend", handler)
```

These let you implement spinners, logging, or error banners in one place. ([jQuery API][7])

* **ajaxComplete** fires when any request finishes. ([jQuery API][8])
* **ajaxError** fires on failure.
* **ajaxSend** fires just before a request is sent.

---

## 4. Configuring AJAX Behavior

### 4.1 `$.ajaxSetup()`

Set global defaults for all future requests (not recommended for modular code):

```js
$.ajaxSetup({
  url: "/api/",
  type: "POST",
  global: false
});
```

Subsequent calls to `$.ajax()` inherit these settings. ([jQuery API][9])

### 4.2 `$.ajaxPrefilter()`

Hook into every request before it is processed to modify options or add custom logic:

```js
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  // e.g., add auth token header
});
```

Runs before each `$.ajax()` request. ([jQuery API][10])

### 4.3 `$.ajaxTransport()`

Define low-level transport mechanisms for special protocols (e.g., non-XHR transport):

```js
$.ajaxTransport("+*", function(options, originalOptions){
  return {
    send: function(headers, completeCallback){ … },
    abort: function(){ … }
  };
});
```

Only for advanced use when prefilters/converters aren’t enough. ([jQuery API][11])

---

## 5. Deferreds & Promise Integration

All jQuery AJAX methods return a jqXHR that implements Promises/A:

* **`.done(callback)`** on success.
* **`.fail(callback)`** on error.
* **`.always(callback)`** on either outcome. ([jQuery API][12])
* **`.then(doneCallback, failCallback)`** returns a new promise for chaining. ([jQuery API][13])

The underlying `jQuery.Deferred()` object lets you create and orchestrate your own async flows. ([jQuery API][14])

---

## 6. Error Handling Patterns

Use promise callbacks or the `error`/`complete` settings in `$.ajax()`:

```js
$.ajax({ url })
  .done(data => { … })
  .fail((jqXHR, status, err) => { console.error(err); })
  .always(() => { hideSpinner(); });
```

Or inside `settings`:

```js
$.ajax({
  url,
  error(jqXHR, status, err){ … },
  complete(){ … }
});
```

---

These notes should give you a quick yet thorough overview of jQuery’s AJAX capabilities—from the low-level `$.ajax()` method to shorthand calls, global event hooks, configuration overrides, and promise-based flow control.

[1]: https://api.jquery.com/jQuery.ajax/?utm_source=chatgpt.com "jQuery.ajax()"
[2]: https://api.jquery.com/jQuery.getJSON/?utm_source=chatgpt.com "jQuery.getJSON()"
[3]: https://api.jquery.com/jQuery.get/?utm_source=chatgpt.com "jQuery.get()"
[4]: https://api.jquery.com/jQuery.post/?utm_source=chatgpt.com "jQuery.post()"
[5]: https://api.jquery.com/jQuery.getScript/?utm_source=chatgpt.com "jQuery.getScript()"
[6]: https://api.jquery.com/load/?utm_source=chatgpt.com ".load() | jQuery API Documentation"
[7]: https://api.jquery.com/category/ajax/global-ajax-event-handlers/?utm_source=chatgpt.com "Category: Global Ajax Event Handlers - jQuery API Documentation"
[8]: https://api.jquery.com/ajaxComplete/?utm_source=chatgpt.com "ajaxComplete event - jQuery API Documentation"
[9]: https://api.jquery.com/jQuery.ajaxSetup/?utm_source=chatgpt.com "jQuery.ajaxSetup()"
[10]: https://api.jquery.com/jQuery.ajaxPrefilter/?utm_source=chatgpt.com "jQuery.ajaxPrefilter()"
[11]: https://api.jquery.com/jQuery.ajaxTransport/?utm_source=chatgpt.com "jQuery.ajaxTransport()"
[12]: https://api.jquery.com/deferred.always/?utm_source=chatgpt.com "deferred.always() - jQuery API Documentation"
[13]: https://api.jquery.com/deferred.then/?utm_source=chatgpt.com "deferred.then() - jQuery API Documentation"
[14]: https://api.jquery.com/category/deferred-object/?utm_source=chatgpt.com "Category: Deferred Object - jQuery API Documentation"
