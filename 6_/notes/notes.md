# Understanding React Concepts and Microservices

## Monolith Architecture

A Monolith Architecture is a traditional way of building applications where everything, including the UI, backend logic, and database, is in a single codebase. This makes development and deployment easier but can lead to issues when scaling because any small change requires redeploying the entire application. It can also be difficult to manage as the application grows larger.

## Microservices - Separation of Concerns

Microservices architecture is a way to break down a large application into smaller, independent services. Each service is responsible for a specific task and can be developed, deployed, and scaled independently. This helps in making applications more flexible and easier to maintain. If one service fails, it does not affect the whole application.

## UI Microservice - Explanation with Diagram

UI Microservice is a part of the microservices architecture where the frontend is divided into smaller, independent components. Instead of having a single monolithic UI, each microservice can have its own UI components, making it easier to scale and manage. This ensures different teams can work on separate UI parts without conflicts.

## useEffect() Hook

The `useEffect` hook is used in React to handle side effects like fetching data from an API, setting up event listeners, or updating the document title. It runs after the component renders and can be used to clean up resources to improve performance.

### Example:

```js
import { useEffect } from "react";

function ExampleComponent() {
  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component Unmounted");
    };
  }, []);
  return <div>Hello World</div>;
}
```

## fetch(), Promise

The `fetch()` function is used to make API calls in JavaScript. It returns a Promise, which means it works asynchronously and does not block other code from running while waiting for the API response.

### Example:

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));
```

## React JS Syntax & Newer Approach for Fetching Data

React now uses `async/await` to handle API calls more easily than using `.then()`.

### Example:

```js
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

## CORS Policy

CORS (Cross-Origin Resource Sharing) is a security feature that prevents a web page from making requests to a different domain without permission. If a server does not allow CORS, the browser blocks the request.

## CORS Chrome Extension

Sometimes, developers use a Chrome extension to bypass CORS errors while testing APIs locally. However, this is not recommended for production as it can pose security risks.

## Spinning Loader

A spinning loader is a small animation shown while data is being loaded. This improves user experience by letting them know that the content is loading.

### Example (CSS):

```css
.loader {
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

## Shimmer UI

Shimmer UI is a loading effect that looks like a skeleton of the actual content before data loads. It improves user experience by showing placeholders instead of an empty screen.

## Shimmer Component Code

A simple React component to show a shimmer effect.

### Example:

```js
function Shimmer() {
  return <div className="shimmer-box"></div>;
}
```

## CSS Code for Shimmer Component

```css
.shimmer-box {
  width: 100px;
  height: 200px;
  background: linear-gradient(to right, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
  animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}
```

<img src="./shimmer-box-gif.gif" alt="Dine Out App" width="100" height="auto" />

## Conditional Rendering

Conditional rendering means showing different UI elements based on certain conditions.

## Using Ternary Operator

Instead of using `if-else`, the ternary operator makes the code shorter and cleaner.

### Example:

```js
const isLoggedIn = true;
return isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>;
```

## Why Do We Need State Variables? (useState)

State variables help React remember data between renders. Without state, components would reset every time they re-render.

## useState() Usage & Explanation

The `useState` hook allows components to have their own state. It returns a variable and a function to update that variable.

### Example:

```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Super Power of React

React is powerful because of its component-based structure, virtual DOM, and ability to manage state efficiently. It helps build dynamic and scalable applications.

## Reconciliation & Diff Algorithm Explained

React uses a diffing algorithm to compare the previous and new virtual DOM. It updates only the changed elements, making it highly efficient.

## Nice Explanation of Re-Rendering

Re-rendering happens when state or props change. React efficiently updates only the necessary parts of the UI without refreshing the entire page.

## DOM Manipulation & Virtual DOM

The Virtual DOM is a lightweight copy of the real DOM. React updates this virtual DOM first and then applies the changes to the real DOM efficiently, improving performance.

---
