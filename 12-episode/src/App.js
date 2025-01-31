import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import ContextAPI from "./components/contextAPI/ContextAPI";

/**
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * Lazy Loading
 * on demand loading
 * dynamic import
 */
const About = lazy(() => import("./components/About"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
]);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<RouterProvider router={appRoute} />);
// rootElement.render(<AppLayout/>)
// rootElement.render(<Test/>)
