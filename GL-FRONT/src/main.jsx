import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GeneralContextProvider } from "./context/GeneralContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login/Login.jsx";
import StockModule from "./pages/StockModule/StockModule.jsx";
import RegisteredProducts from "./pages/RegisteredProducts/RegisteredProducts.jsx";
import StockFlow from "./pages/StockFlow/StockFlow.jsx";
import { PrivateRoutes, UnPrivateRoutes } from "./routes/routes.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <StockModule />,
      },
      {
        path: "/products",
        element: <RegisteredProducts />,
      },
      {
        path: "/flows",
        element: <StockFlow />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralContextProvider>
      <RouterProvider router={router} />
    </GeneralContextProvider>
  </StrictMode>
);
