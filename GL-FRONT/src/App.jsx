import "./App.css";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GeneralContext } from "./context/GeneralContext";
import Header from "./modules/Header/Header";
import NavBar from "./modules/NavBar/NavBar";

function App() {
  const { getUserData, getAllProducts, getAllFlows, getAllRawMaterial } =
    useContext(GeneralContext);
  useEffect(() => {
    getUserData();
    getAllProducts();
    getAllFlows();
    getAllRawMaterial();
  }, []);
  return (
    <div className="home-container">
      <NavBar />
      <div className="content-container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
