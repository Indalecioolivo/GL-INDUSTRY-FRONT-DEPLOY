import "./CardProducts.css";
import photoIcon from "../../assets/photo-icon.png";

export default function CardProducts() {
  return (
    <div className="card-container">
      <img src={photoIcon} alt="" />
      <h3>Kit Curly Active Desprogressiva cabelos cacheados</h3>
      <p>Detalhes</p>
    </div>
  );
}
