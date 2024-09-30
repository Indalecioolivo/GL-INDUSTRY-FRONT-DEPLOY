import "./Home.css";
import Header from "../../modules/Header/Header";
import NavBar from "../../modules/NavBar/NavBar";
import StockModule from "../../modules/StockModule/StockModule";
import StockFlow from "../../modules/StockFlow/StockFlow";
import ModalRegisterFlow from "../../modules/ModalRegisterFlow/ModalRegisterFlow";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function Home() {
  const { stockHome, productHome, flowHome } = useContext(GeneralContext);
  return (
    <div className="home-container">
      <NavBar />
      <div className="content-container">
        <Header />
        {stockHome ? <StockModule /> : ""}
        {productHome ? "" : ""}
        {flowHome ? <StockFlow /> : ""}
      </div>
    </div>
  );
}
