import "./NavBar.css";
import { useState, useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import { Link } from "react-router-dom";
import StockIcon from "../../assets/stock-icon.png";
import ProductIcon from "../../assets/product-icon.png";
import FlowIcon from "../../assets/flow-icon.png";
import FlowRawIcon from "../../assets/flow-raw-icon.png";
import RawMaterial from "../../assets/chemical-icon.png";

export default function NavBar() {
  const { setContentHome } = useContext(GeneralContext);
  return (
    <nav>
      <Link to="/">
        <img onClick={() => setContentHome("Estoque")} src={StockIcon} alt="" />
      </Link>
      <Link to="/products">
        <img
          onClick={() => setContentHome("Produtos")}
          src={ProductIcon}
          alt=""
        />
      </Link>
      <Link to="/flows">
        <img
          onClick={() => setContentHome("Fluxo Estoque")}
          src={FlowIcon}
          alt=""
        />
      </Link>
      <Link to="/raw-material">
        <img
          onClick={() => setContentHome("Matéria Prima")}
          src={RawMaterial}
          alt=""
        />
      </Link>
      <Link to="/flows-raw-material">
        <img src={FlowRawIcon} alt="" />
      </Link>
    </nav>
  );
}
