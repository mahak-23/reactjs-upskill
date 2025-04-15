# React Routing and Hooks

## Best Practices in React Components
- Avoid creating a component inside another component. Every time the parent renders, the child gets recreated which impacts performance.
- Never declare state variables (`useState`) inside `if-else` blocks or loops. React must know when and how the state is initialized.
- Always use `useState` at the top level of the component, and only inside functional components.
- You can use multiple `useEffect` hooks for handling different side-effects based on your requirements.

---

## Working with Local Images
- Place your images inside `src/assets/images/`.
- Use them via the `import` statement:
```js
import logo from './assets/images/foodvilla.png';
<img src={logo} alt="Foodvilla Logo" />
```
- Apps like Swiggy load images from a CDN like Cloudinary for better performance, uptime, and caching benefits.

---

## useEffect Hook & Dependency Array
`useEffect` is a React hook used to perform side effects in function components, like data fetching, subscriptions, or DOM updates. It takes two arguments: a callback function and a dependency array.

```js
useEffect(() => {
  console.log("Component Mounted or Updated");
}, [dependency]);
```
- if no dependency array used then useEffect will be runs on every component render.
- If the dependency array is empty (`[]`), the effect runs only once when the component mounts.
- If any value inside the array changes, the effect runs again.

---

## React Router and Routing Setup
React Router is a library to handle navigation and routing in React apps.
It enables navigation among views and allows dynamic rendering of components based on the URL.

### Installing
```bash
npm install react-router-dom
```

### Basic Routing Setup
```js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

<RouterProvider router={router} />
```

---

## Creating Routing Configuration
You define routing configuration using an array of route objects, where each object maps a `path` to a React component (`element`).
We define routes using `createBrowserRouter()`:

```js
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> }
]);

<RouterProvider router={appRouter} />
```

> **Note:** Always define components before passing them in route configs. Avoid hoisting errors.

---

## Using RouterProvider
Earlier we used:
```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
```
Now, for routing:
```js
root.render(<RouterProvider router={appRouter} />);
```
This renders components based on path.

---

## Handling 404 Errors
If a user visits an undefined route, React Router shows a default error. You can customize it using `errorElement`.
You can show a custom error page using `useRouteError()`.

### Error Component
```js
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>{err.status} {err.statusText}</p>
    </div>
  );
};
```
Add `errorElement: <Error />` in the root route config.

---

## Nested Routes (Children Routes)
Define nested routes using `children` inside the root route:
```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // contains <Outlet />
    errorElement: <Error />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ]
  }
]);
```

---

## Outlet Keyword
Use `<Outlet />` to render child components in the parent layout.
It is a placeholder in parent components that renders the matched child route.
```js
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
```

---

## Header Links using Link Component
Use `Link` for client-side navigation instead of anchor (`<a>`) tags.
It used for seamless navigation without reloading the page. where as anchor tags reload whole page
```js
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
);
```

---

## Performance Monitoring
Use Chrome DevTools and React Developer Tools to inspect:
- Re-render patterns
- Network requests
- Component hierarchy

---

## Single Page Applications (SPA)
- SPAs load a single HTML file and dynamically update content via JS.
- Navigation is handled using client-side routing (React Router) which avoids full page reloads.

---

## Types of Routing
- **Client-Side Routing:** No full page reloads. Fast transitions. Navigation handled in the browser using JS (React Router).
- **Server-Side Routing:** Each route renders a new HTML page from the server.

---

## Dynamic Routing
Dynamic routes allow parameters inside the route path.
Use `:param` to define dynamic segments:
```js
{
  path: "/restaurant/:id",
  element: <RestaurantDetails />,
}
```
---

## Changing Restaurant IDs
Update the `:id` param in route path to dynamically show content for different restaurants.
Dynamic rendering based on `id` param:
```js
<Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
```

---

## useParams Hook
To access URL parameters like `:id`, use `useParams()`:
```js
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
  const { id } = useParams();
  return <div>Restaurant ID: {id}</div>;
};
```
---

## GraphQL Introduction
GraphQL is a query language that lets the client specify the structure of the required data. Benefits:
- Get only the data you need
- Single request for multiple resources
- Replaces multiple REST API calls with one flexible query


---

## Learning and Tools
- Official Docs: [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- For building forms: use [Formik](https://formik.org/)

