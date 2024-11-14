import { Navigate } from "react-router-dom";
import { getItem } from "../utils/storage";

export function PrivateRoutes({ children }) {
  const token = getItem("tokenGL");
  return token ? children : <Navigate to="/login" />;
}

export function UnPrivateRoutes({ children }) {
  const token = getItem("tokenGL");
  return !token ? children : <Navigate to="/" />;
}
