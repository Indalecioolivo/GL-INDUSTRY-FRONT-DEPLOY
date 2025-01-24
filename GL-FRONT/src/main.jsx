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
import RawMaterial from "./pages/RawMaterial/RawMaterial.jsx";
import FlowRawMaterial from "./pages/FlowRawMaterial/FlowRawMaterial.jsx";
import { PrivateRoutes, UnPrivateRoutes } from "./routes/routes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      {
        path: "/raw-material",
        element: (
          <PrivateRoutes>
            <RawMaterial />
          </PrivateRoutes>
        ),
      },
      {
        path: "/flows-raw-material",
        element: (
          <PrivateRoutes>
            <FlowRawMaterial />
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
