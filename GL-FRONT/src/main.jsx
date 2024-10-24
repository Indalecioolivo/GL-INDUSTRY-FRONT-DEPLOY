import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GeneralContextProvider } from "./context/GeneralContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login/Login.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import StockModule from "./pages/StockModule/StockModule.jsx";
import RegisteredProducts from "./pages/RegisteredProducts/RegisteredProducts.jsx";
import StockFlow from "./pages/StockFlow/StockFlow.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralContextProvider>
      <RouterProvider router={router} />
    </GeneralContextProvider>
  </StrictMode>
);
