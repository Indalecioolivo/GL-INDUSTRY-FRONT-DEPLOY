import "./NavBar.css";
import { useState, useContext } from "react";
import StockIcon from "../../assets/stock-icon.png";
import ProductIcon from "../../assets/product-icon.png";
import FlowIcon from "../../assets/flow-icon.png";
import { GeneralContext } from "../../context/GeneralContext";

export default function NavBar() {
  const { setContentHome } = useContext(GeneralContext);
  return (
    <nav>
      <img onClick={() => setContentHome("Estoque")} src={StockIcon} alt="" />
      <img
        onClick={() => setContentHome("Produtos")}
        src={ProductIcon}
        alt=""
      />
      <img
        onClick={() => setContentHome("Fluxo Estoque")}
        src={FlowIcon}
        alt=""
      />
    </nav>
  );
}
