import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Login from "./components/Login";
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

import "./index.css";
import "./style.css"; // implemented in Header, About, Contact

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouters = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div className="body">Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<div className="body">Loading...</div>}>
            <Contact />{" "}
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<div className="body">Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/hello",
    element: <h1>Hello, World!!</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouters} />);
