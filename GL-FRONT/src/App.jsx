import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Home /> */}
      <Outlet />
    </>
  );
}

export default App;
