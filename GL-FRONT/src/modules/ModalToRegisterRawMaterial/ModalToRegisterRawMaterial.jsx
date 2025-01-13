import "./ModalToRegisterRawMaterial.css";
import { GeneralContext } from "../../context/GeneralContext";
import CloseIcon from "../../assets/close-icon.png";
import { useContext } from "react";

export default function ModalToRegisterRawMaterial() {
  const {
    setShowModalRegisterRawMaterial,
    rawMaterialRegister,
    handleRawMaterialRegister,
  } = useContext(GeneralContext);
  async function handleSubmitRawMaterial(e) {
    e.preventDefault();
  }

  return (
    <div className="modalrawmaterial-container">
      <div className="modal-add-rawmaterial">
        <img
          src={CloseIcon}
          alt=""
          onClick={(e) => setShowModalRegisterRawMaterial(false)}
        />
        <h2>Registrar Matéria Prima</h2>
        <form action="" onSubmit={(e) => handleSubmitRawMaterial(e)}>
          <label htmlFor="productName">Nome</label>
          <input
            id="productName"
            name="name"
            type="text"
            value={rawMaterialRegister.name}
            onChange={(event) => handleRawMaterialRegister(event)}
          />
          <label htmlFor="flowProductBarCode">Código de Barras</label>
          <input
            id="flowProductBarCode"
            name="bar_code"
            type="text"
            maxLength={13}
            value={rawMaterialRegister.bar_code}
            onChange={(event) => handleRawMaterialRegister(event)}
            // onBlur={(event) => validateFields(event, event.target.value)}
          />
          <label htmlFor="flowProductAmount">Quantidade</label>
          <input
            type="number"
            id="flowProductAmount"
            name="amount"
            value={rawMaterialRegister.amount}
            onChange={(event) => handleRawMaterialRegister(event)}
            // onBlur={(event) => validateFields(event, event.target.value)}
          />
          <input
            type="submit"
            value="Registrar Fluxo"
            className="button-register"
            onClick={(e) => console.log(rawMaterialRegister)}
          />
        </form>
      </div>
    </div>
  );
}
