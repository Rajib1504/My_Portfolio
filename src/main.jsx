import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
// import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </StrictMode>
);
