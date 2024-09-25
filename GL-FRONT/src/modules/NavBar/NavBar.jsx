import "./NavBar.css";
import StockIcon from "../../assets/stock-icon.png";
import ProductIcon from "../../assets/product-icon.png";
import FlowIcon from "../../assets/flow-icon.png";

export default function NavBar() {
  return (
    <nav>
      <img src={StockIcon} alt="" />
      <img src={ProductIcon} alt="" />
      <img src={FlowIcon} alt="" />
    </nav>
  );
}
