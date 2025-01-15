import "./ModalToInfoRawMaterial.css";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";
import CloseIcon from "../../assets/close-icon.png";

export default function ModalToInfoRawMaterial() {
  const {
    toRawMaterialInformations,
    handleOpenModalRawMaterialInformations,
    handleOpenModalEditRawMaterial,
  } = useContext(GeneralContext);

  return (
    <div className="modalRawMaterialInfo-container">
      <div className="modalRawMaterialInfo">
        <img
          src={CloseIcon}
          alt=""
          onClick={() => handleOpenModalRawMaterialInformations(false)}
        />
        <h2>Matéria Prima</h2>
        <strong>Nome:</strong>
        <p>{toRawMaterialInformations.name}</p>
        <strong>Código de Barras:</strong>
        <p>{toRawMaterialInformations.bar_code}</p>
        <strong>Quantidade:</strong>
        <p>{toRawMaterialInformations.stock}</p>
        <div className="for-buttons">
          <button onClick={() => handleOpenModalEditRawMaterial(true)}>
            Editar Matéria Prima
          </button>
          <button
            className="btn-exclude"
            // onClick={(e) => handleExclude(e)}
          >
            Excluir Matéria Prima
          </button>
        </div>
      </div>
    </div>
  );
}
