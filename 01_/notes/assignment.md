# 01 - Inception

## What is Emmet?

Emmet is a web development toolkit that enables developers to write HTML and CSS code more quickly and efficiently. It allows you to type shortcuts that expand into full pieces of code, based on an abbreviation structure commonly used by developers.

### Example:

**Input:**

```html
ul>li*3>a
```

**Output:**

```html
<ul>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

This expands into an unordered list (`ul`) with three list items (`li`), each containing an anchor (`a`) element.

---

## Difference between a Library and a Framework

Both a framework and a library are `pre-coded` support programs used to develop complex software applications.

- **Library**: A collection of packages that perform specific operations. Developers call methods from a library whenever needed. Example: React.js is a library.
- **Framework**: Provides a structure for software development and dictates the flow of the application. Example: Angular is a framework.

**Key Difference**: With a framework, the flow is controlled by the framework itself, whereas with a library, the developer controls the application flow.

---

## What is a CDN? Why do we use it?

CDN stands for **Content Delivery Network**. It is a system of distributed servers that work together to deliver web content efficiently, such as images, stylesheets, JavaScript files, and videos, to users based on their `geographical location`.

### Benefits of Using a CDN:

- Faster Content Delivery
- Improved Website Security
- Scalability
- Global Reach
- Reduced Bandwidth Costs

**React & ReactDOM CDN Links:**

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

---

## Why is React known as React?

React is called **React** because it efficiently "reacts" to changes in state without reloading the entire page. It was designed as a declarative, efficient, and flexible JavaScript library for building UI components.

---

## What is `crossorigin` in the `<script>` tag?

The `crossorigin` attribute sets the mode of the request to an HTTP **CORS (Cross-Origin Resource Sharing) Request**.

```html
<script crossorigin src="..."></script>
```

### Values:

- **anonymous**: Sends the request without credentials (cookies, authentication headers, etc.).
- **use-credentials**: Sends the request with credentials.

**Example:**

```html
<script src="https://example.com/script.js" crossorigin="anonymous"></script>
```

---

## Difference between React and ReactDOM

- **React**: Core library for building UI components (e.g., `React.createElement()` and `React.Component`).
- **ReactDOM**: Provides DOM-specific methods (e.g., `ReactDOM.render()`).

---

## Difference between `react.development.js` and `react.production.js` (CDN Files)

- **`react.development.js`**: Developer-friendly, readable, larger file size.

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

- **`react.production.js`**: Minified, optimized for performance, smaller file size.

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
></script>
```

---

## What are `async` and `defer` attributes in the `<script>` tag?

- **`async`**: The script is downloaded and executed immediately without waiting for the HTML to fully load.
- **`defer`**: The script is downloaded while parsing HTML but executed only after the document is fully parsed.

### Example:

```html
<script src="example.js" async></script>
<script src="example.js" defer></script>
```

---

## Additional Best Practices

- Use `type="module"` in script tags:

```html
<script type="module" src="main.js"></script>
```

- Use `<script defer nomodule>` for legacy support.
- Enables strict mode by default.
- Improves performance by loading and parsing code asynchronously.
