import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { initTheme } from "./theme";
import { router } from "./routes";
import "./index.css";

initTheme();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-theme text-theme border-theme">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
