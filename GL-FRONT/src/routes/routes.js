import { getItem } from "../utils/storage";

export function PrivateRoutes({ children }) {
  const token = getItem("tokenGL");
  console.log(token);

  return token ? children : (location.pathname = "/login");
}

export function UnPrivateRoutes({ children }) {
  const token = getItem("tokenGL");
  return !token ? children : (location.pathname = "/");
}
