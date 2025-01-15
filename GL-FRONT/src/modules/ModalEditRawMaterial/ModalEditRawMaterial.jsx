import "./ModalEditRawMaterial.css";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";
import CloseIcon from "../../assets/close-icon.png";

export default function ModalEditRawMaterial() {
  const {
    toEditRawMaterial,
    setToEditRawMaterial,
    handleOpenModalEditRawMaterial,
  } = useContext(GeneralContext);

  function handleChangeRawMaterialInfo(e) {
    const value = e.target.value;
    setToEditRawMaterial({
      ...toEditRawMaterial,
      [e.target.name]: value,
    });
  }

  async function handleSubmitEdit(e) {
    e.preventDefault();
  }
  return (
    <div className="modal-edit-container">
      <div className="modal-edit-box">
        <img
          src={CloseIcon}
          alt=""
          onClick={() => handleOpenModalEditRawMaterial(false)}
        />
        <h2>Editar Matéria Prima</h2>
        <form action="" onSubmit={(e) => handleSubmitEdit(e)}>
          <label htmlFor="rawMaterialName">Nome</label>
          <input
            id="rawMaterialName"
            type="text"
            name="name"
            value={toEditRawMaterial.name}
            onChange={(e) => handleChangeRawMaterialInfo(e)}
          />
          <label htmlFor="rawMaterialBarCode">Código de Barras</label>
          <input
            id="rawMaterialBarCode"
            type="text"
            name="bar_code"
            maxLength={13}
            value={toEditRawMaterial.bar_code}
            onChange={(e) => handleChangeRawMaterialInfo(e)}
          />
          <input type="submit" className="button-edit" value="Confirmar" />
        </form>
      </div>
    </div>
  );
}
