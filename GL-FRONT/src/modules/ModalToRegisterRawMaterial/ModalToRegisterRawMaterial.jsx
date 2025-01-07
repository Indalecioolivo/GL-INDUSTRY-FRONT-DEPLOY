import "./ModalToRegisterRawMaterial.css";
import CloseIcon from "../../assets/close-icon.png";

export default function ModalToRegisterRawMaterial() {
  return (
    <div className="modalrawmaterial-container">
      <div className="modal-add-rawmaterial">
        <img src={CloseIcon} alt="" />
        <h2>Registrar Matéria Prima</h2>
      </div>
    </div>
  );
}
