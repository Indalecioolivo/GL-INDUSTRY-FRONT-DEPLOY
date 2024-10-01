import "./CardProducts.css";
import photoIcon from "../../assets/photo-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function CardProducts({
  id,
  bar_code,
  name,
  description,
  volume,
  stock,
  price,
}) {
  const { setShowModalProductInfo, setToModalProductInfo, toModalProductInfo } =
    useContext(GeneralContext);
  function handleClick() {
    setToModalProductInfo({
      showModal: true,
      id: id,
      bar_code: bar_code,
      name: name,
      description: description,
      volume: volume,
      stock: stock,
      price: price,
    });
    console.log({ id, bar_code, name, description, volume, stock, price });
  }
  return (
    <div className="card-container">
      <img src={photoIcon} alt="" />
      <h3>{name}</h3>
      <p onClick={() => handleClick()}>Detalhes</p>
    </div>
  );
}
