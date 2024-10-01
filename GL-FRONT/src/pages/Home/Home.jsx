import "./Home.css";
import Header from "../../modules/Header/Header";
import NavBar from "../../modules/NavBar/NavBar";
import StockModule from "../../modules/StockModule/StockModule";
import RegisteredProducts from "../../modules/RegisteredProducts/RegisteredProducts";
import StockFlow from "../../modules/StockFlow/StockFlow";
import ModalRegisterFlow from "../../modules/ModalRegisterFlow/ModalRegisterFlow";
import ModalProductInfo from "../../modules/ModalProductInfo/ModalProductInfo";

import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function Home() {
  const {
    stockHome,
    productHome,
    flowHome,
    showModalRegisterFlow,
    showModalProductInfo,
    toModalProductInfo,
  } = useContext(GeneralContext);
  return (
    <div className="home-container">
      <NavBar />
      <div className="content-container">
        <Header />
        {stockHome ? <StockModule /> : ""}
        {productHome ? <RegisteredProducts /> : ""}
        {flowHome ? <StockFlow /> : ""}
        {showModalRegisterFlow ? <ModalRegisterFlow /> : ""}
        {toModalProductInfo.showModal ? <ModalProductInfo /> : ""}
      </div>
    </div>
  );
}
