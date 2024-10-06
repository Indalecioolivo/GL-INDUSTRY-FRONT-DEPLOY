import "./Home.css";
import Header from "../../modules/Header/Header";
import NavBar from "../../modules/NavBar/NavBar";
import StockModule from "../../modules/StockModule/StockModule";
import RegisteredProducts from "../../modules/RegisteredProducts/RegisteredProducts";
import StockFlow from "../../modules/StockFlow/StockFlow";
import ModalRegister from "../../modules/ModalRegister/ModalRegister";
import ModalToInformations from "../../modules/ModalProductInfo/ModalToInformations";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function Home() {
  const {
    stockHome,
    productHome,
    flowHome,
    showModalRegister,
    toModalInformations,
  } = useContext(GeneralContext);
  return (
    <div className="home-container">
      <NavBar />
      <div className="content-container">
        <Header />
        {stockHome ? <StockModule /> : ""}
        {productHome ? <RegisteredProducts /> : ""}
        {flowHome ? <StockFlow /> : ""}
        {showModalRegister.showModal ? <ModalRegister /> : ""}
        {toModalInformations.showModal ? <ModalToInformations /> : ""}
      </div>
    </div>
  );
}
