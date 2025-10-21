import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes.ts";
import RootProvider from "./providers/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootProvider>
      <RouterProvider router={router} />
    </RootProvider>
  </StrictMode>
);
