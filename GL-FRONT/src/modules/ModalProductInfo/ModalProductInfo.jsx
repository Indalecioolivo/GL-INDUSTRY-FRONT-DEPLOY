import "./ModalProductInfo.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function ModalProductInfo() {
  const { setShowModalProductInfo, setToModalProductInfo, toModalProductInfo } =
    useContext(GeneralContext);
  function handleClick(e) {
    e.stopPropagation();
    setToModalProductInfo({
      showModal: false,
      id: "",
      bar_code: "",
      name: "",
      description: "",
      volume: "",
      stock: "",
      price: "",
    });
  }

  return (
    <div className="modalProductInfo-container">
      <div className="modalProductInfo">
        <img src={CloseIcon} alt="" onClick={(e) => handleClick(e)} />
        <h2>{toModalProductInfo.name}</h2>
        <strong>Código de Barras</strong>
        <p>{toModalProductInfo.bar_code}</p>
        <strong>Descrição:</strong>
        <p>{toModalProductInfo.description}</p>
        <strong>Volume ML</strong>
        <p>{toModalProductInfo.volume}</p>
        <strong>Estoque Disponível</strong>
        <p>{toModalProductInfo.stock}</p>
        <strong>Preço</strong>
        <p>R${toModalProductInfo.price}</p>
      </div>
    </div>
  );
}
