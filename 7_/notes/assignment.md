# React Routing and Hooks 

## Adding Images in React
There are two ways to add images to your app:

### 1. Using a URL (CDN or Web)
```jsx
<img src="https://reactjs.org/logo-og.png" alt="React Logo" />
```

### 2. Importing Local Images
- Place images inside `src/assets/images/`
- Import the image and use it in JSX:

```js
import reactLogo from "../../assets/images/reactLogo.png";

export default function App() {
  return <img src={reactLogo} alt="react logo" />;
}
```

> 💡 Apps like Swiggy load images from CDNs (e.g. Cloudinary) because:
- CDN caches images for fast delivery
- High uptime and better performance
- Images are globally distributed

---

## What Happens on `console.log(useState())`?
It logs an array like `[undefined, ƒ]`:
- First value: current state (initially `undefined` if not set)
- Second value: a function to update the state

```js
const [state, setState] = useState();
console.log(useState()); // [undefined, ƒ]
```

---

## useEffect Hook & Dependency Array
`useEffect()` lets you perform side effects in function components (like fetching data, timers, etc).

### Syntax
```js
useEffect(() => {
  // side effect logic
}, [dependencies]);
```

### Cases
1. **No dependency array**: Runs after every render
```js
useEffect(() => {
  console.log("Runs on every render");
});
```

2. **Empty dependency array**: Runs once on mount
```js
useEffect(() => {
  console.log("Runs once on mount");
}, []);
```

3. **With specific dependencies**: Runs when any dependency changes
```js
useEffect(() => {
  console.log("Runs when 'count' changes");
}, [count]);
```

---

## Single Page Applications (SPA)
- A Single Page Application loads a single HTML page.
- Uses JavaScript to update content dynamically without full page reload.
- Routing is managed on the client side using libraries like React Router.

---

## Client Side Routing vs Server Side Routing

### Server-Side Routing
- Every time the URL changes, the browser sends a request to the server.
- A new page is returned by the server.

### Client-Side Routing
- Initial page loads all the JS and assets.
- Navigation is handled on the client via JS.
- Fast transitions, no page reload.

```js
// Using Link for client-side routing
<Link to="/about">About</Link>
```

---