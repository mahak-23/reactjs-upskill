# Let's Get Hooked

## 1. Difference between Named Export, Default Export, and \* as Export

### **Named Export:**

- Allows multiple exports per file.
- Must use `{}` when importing.
- The name must match the exported name.

```js
export const MyComponent = () => {};
export const MyComponent2 = () => {};
```

```js
    // Ex. importing a single named export
    import { MyComponent } from "./MyComponent";

    // Ex. importing multiple named exports
    import { MyComponent, MyComponent2 } from "./MyComponent";

    // Ex. giving a named import a different name by using "as":
    import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

### **Default Export:**
- Only one default export per file.
- No `{}` needed when importing.
- Can import using any name.

```js
const MyComponent = () => {};
export default MyComponent;
import AnyName from "./MyComponent"; // Can use any name
````

### **`* as Export` (Import Everything as an Object):**

- Imports all named exports as an object.

```js
import * as Components from "./MyComponent";
<Components.MyComponent />
<Components.MyComponent2 />
```

---

## 2. What is a `config.js` file and why is it important?

A `config.js` file stores settings and configuration data for an application. This allows easy changes without modifying the main code.

Example:

```js
const config = {
  name: "John",
  surname: "Doe",
};
export default config;
```

Now, you can import and use this config anywhere in the app.

---

## 3. What are React Hooks?

React Hooks allow functional components to use state and lifecycle features without converting them into class components.

### **Common React Hooks:**

- `useState`: Manages component state.
- `useEffect`: Handles side effects (API calls, timers, etc.).
- `useContext`: Provides global data without prop drilling.
- `useReducer`: Alternative to `useState` for complex logic.
- `useRef`: Accesses DOM elements directly.

### **Example of `useState`:**

```js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
```

This component updates the count when the button is clicked.

---

## 4. Why do we need the `useState` Hook?

The `useState` Hook allows functional components to have a state, making them more powerful. `useState` has the ability to encapsulate local state in a functional component.
we can use Hooks in Functional Components

Example:

```js
const [name, setName] = useState("Guest");
```

Here, `name` is a reactive variable that updates when `setName` is called.

---
