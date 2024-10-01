import "./ModalProductInfo.css";
import CloseIcon from "../../assets/close-icon.png";

export default function ModalProductInfo() {
  function handleClick(e) {
    e.stopPropagation();
  }

  return (
    <div className="modalProductInfo-container">
      <div className="modalProductInfo">
        <img src={CloseIcon} alt="" onClick={(e) => handleClick(e)} />
        <h2>Nome Produto</h2>
      </div>
    </div>
  );
}
