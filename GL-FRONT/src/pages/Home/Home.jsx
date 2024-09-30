import "./Home.css";
import Header from "../../modules/Header/Header";
import NavBar from "../../modules/NavBar/NavBar";
// import StockModule from "../../modules/StockModule/StockModule";
import StockFlow from "../../modules/StockFlow/StockFlow";
import ModalRegisterFlow from "../../modules/ModalRegisterFlow/ModalRegisterFlow";

export default function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <div className="content-container">
        <Header />
        {/* <StockModule /> */}
        <StockFlow />
        {<ModalRegisterFlow />}
      </div>
    </div>
  );
}
