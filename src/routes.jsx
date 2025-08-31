import { createBrowserRouter } from "react-router-dom";
import { Base } from "./pages";

export const routesFlat = {
  landing: "",
  about: "who",
  portfolio: "portfolio",
  experience: "experience",
  contact: "contact",
};
export const router = createBrowserRouter([
  { path: "/", element: <Base /> },
]);
