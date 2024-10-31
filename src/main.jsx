import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
// import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/contact/Contact";
import Services from "./Components/services/services";
import Users from "./Components/Users/Users";
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>Hello from react Router!!</div>,
  // },
  // {
  //   path: "/about",
  //   element: <div>I am the about page!</div>,
  // },
  // {
  //   path: "/contact",
  //   element: <div>Call me right now!</div>,
  // },
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
    ],
  },
  // {
  //   path: "header",
  //   element: <Header></Header>,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
