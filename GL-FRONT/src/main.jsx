import "./index.css";
import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import { GeneralContextProvider } from "./context/GeneralContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login/Login.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import StockModule from "./pages/StockModule/StockModule.jsx";
import RegisteredProducts from "./pages/RegisteredProducts/RegisteredProducts.jsx";
import StockFlow from "./pages/StockFlow/StockFlow.jsx";
import { PrivateRoutes, UnPrivateRoutes } from "./routes/routes.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <App />
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <StockModule />
          </PrivateRoutes>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRoutes>
            <RegisteredProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/flows",
        element: (
          <PrivateRoutes>
            <StockFlow />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <UnPrivateRoutes>
        <Login />
      </UnPrivateRoutes>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralContextProvider>
      <RouterProvider router={router} />
    </GeneralContextProvider>
  </StrictMode>
);
