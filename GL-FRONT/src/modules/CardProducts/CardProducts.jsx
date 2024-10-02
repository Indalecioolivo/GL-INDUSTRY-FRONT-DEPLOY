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
  const {
    toModalInformations,
    setToModalInformations,
    handleOpenModalInformations,
  } = useContext(GeneralContext);
  function handleClick() {
    console.log(id, bar_code, name, description, volume, stock, price);
  }

  return (
    <div className="card-container">
      <img src={photoIcon} alt="" />
      <h3>{name}</h3>
      <p
        onClick={() =>
          handleOpenModalInformations(
            true,
            id,
            bar_code,
            name,
            description,
            volume,
            stock,
            price
          )
        }
      >
        Detalhes
      </p>
    </div>
  );
}
