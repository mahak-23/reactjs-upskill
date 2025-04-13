
# React Custom Hooks, Single Responsibility Principle & Code Optimization

## 📦 Single Responsibility & Modularity
- **Single Responsibility Principle (SRP):** Each component or module should have only one reason to change.
#### 📦 Benefits:
- Easy to test and debug.
- Easier to maintain.
- Promotes reusability and scalability.

- **Modularity:** Break your application into smaller, independent parts (components or hooks) that are easier to test, debug, and maintain.


### 🧠 Example: Modular Fetch Logic with Custom Hook

```js
export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
```

---

## 🔄 Custom Hooks in React

Custom Hooks in React are JavaScript functions whose names start with "use" and that may call other hooks.

### Why Create Custom Hooks?
- **Readability:** Cleaner and more organized code.
- **Reusability:** Use the same logic in multiple components.
- **Separation of concerns:** Keeps logic out of components.
- **Testable:** Easier to write unit tests.
- Improve code optimization and DRY principles

### Best Practices
- Store hooks inside a `hooks/` or `utils/hooks/` folder.
- Name custom hooks with a `use` prefix (e.g., `useFetch`, `useOnlineStatus`).
- Use **named exports** for better clarity.

### Example: useOnlineStatus Hook
```jsx
import { useState, useEffect } from "react";

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
```

### Usage in Component
```jsx
const NetworkStatus = () => {
  const isOnline = useOnlineStatus();

  return <div>{isOnline ? "Online ✅" : "Offline ❌"}</div>;
};
```
---

## 🧠 Is `use` prefix mandatory in custom hooks?
Yes. React uses the `use` prefix convention to detect hooks and ensure the Rules of Hooks are followed.

It's not mandatory by syntax, but required by React Rules of Hooks to work correctly.

---
## 📦 Package Custom Hooks (for Reuse)
Create a reusable npm package or internal library with all your custom hooks.

```bash
npm init
# write hooks and publish via npm or use via GitHub repo
```

---
## 🧩 Code Optimization Techniques

### Code-Splitting / Chunking / Dynamic Bundling
Parcel/Webpack by default bundles everything into a single JS file.

This affects performance in large apps. Solution: **Code-Splitting**.

### Why Split Code?
- Large applications take time to load when bundled into one big JS file.
- **Solution:** Split your app into smaller chunks or modules.

### Techniques
- **Dynamic Bundling**: Load only the required parts of the app.
- **Lazy Loading**: Load components only when they are needed.
- **Code-splitting**: Break down your app logically into smaller JS files.

### Example with `React.lazy()` and `Suspense`
```jsx
import React, { lazy, Suspense } from "react";
const Instamart = lazy(() => import("./components/Instamart"));

<Suspense fallback={<div>Loading...</div>}>
  <Instamart />
</Suspense>
```

### Key Points:
- Use `React.lazy()` for dynamic import.
- Wrap with `Suspense` to avoid rendering before the component is loaded.
- Use fallback (e.g., `Shimmer`) during loading.

### ❗ Avoid
```jsx
const Dynamic = lazy(() => import("./SomeComp"));
const App = () => {
  return <Dynamic />; // Avoid dynamic import inside frequently rendered components
};
```

## 🧵 Dynamic Bundling

Parcel/Webpack allows you to generate multiple production-ready JS bundles. React automatically loads only the needed bundle.

- **Dynamic Import** example:

```js
const Settings = lazy(() => import("./Settings"));
```

### Best Practices
- Don't lazy-load components inside another component’s render method.
- Always wrap lazy-loaded components with `<Suspense>`.
- Use `fallback` to show loading states (e.g., shimmer UI).

## ⚠️ Important Notes
- Hooks like `useParams`, `useLocation` also work using internal state and return updated values when routes change.
- Always test your custom hooks with various state changes and edge cases.
- Avoid using `async` directly in `useEffect`. Use an internal async function.

## 🔑 Summary of Concepts

| Concept                     | Benefit                                       |
|----------------------------|-----------------------------------------------|
| Custom Hooks               | Reusability, testability, modularity          |
| Single Responsibility      | Easier to maintain & debug                    |
| Lazy Loading               | Faster initial load, better UX                |
| Code Splitting             | Efficient resource use                        |
| Suspense                   | Loading placeholder for async components      |

| Topic | Key Point |
|-------|-----------|
| Custom Hooks | Reusable & abstract logic |
| Modularity | Keeps code manageable |
| SRP | One purpose per function/component |
| Lazy Loading | Reduces initial load time |
| Suspense | Waits for lazy-loaded components |
| Chunking | Breaks code into smaller pieces |
| Fallback UI | Ensures good UX during lazy load |

---

## 🧵 Resources
- [React Docs - Hooks](https://reactjs.org/docs/hooks-custom.html)
- [React Docs - Lazy and Suspense](https://reactjs.org/docs/code-splitting.html)
- [Medium: Dynamic Imports in JS](https://medium.com/@vincent.bocquet/dynamic-import-in-javascript-a-simple-guide-a808cff86458)
