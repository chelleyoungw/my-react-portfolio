// Imports required imports from React.
import React from "react"
import ReactDOM from "react-dom/client"

// Imports required imports from "react-router-dom" to set up application routing behavior.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Imports required imports from Bootstrap to apply CSS.
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

// Imports the App.jsx file which works with the router.
import App from "./App.jsx"

// Imports pages the router will use to conditionally show the appropriate views.
import ErrorPage from "./pages/ErrorPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";

// Defines the accessible routes, and which components to respond to which URL.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
    ],
  },
]);

// Renders the RouterProvider component to the HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);