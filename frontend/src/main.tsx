import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShirtList from "./components/shirtlist";
import Shirt from "./components/shirt";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShirtList/>,
  },
  {
      path: "shirts/:id",
      element: <Shirt/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  );
