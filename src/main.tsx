import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
