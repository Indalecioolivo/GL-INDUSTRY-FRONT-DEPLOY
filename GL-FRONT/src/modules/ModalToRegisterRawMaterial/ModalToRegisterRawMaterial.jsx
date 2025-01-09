import "./ModalToRegisterRawMaterial.css";
import CloseIcon from "../../assets/close-icon.png";

export default function ModalToRegisterRawMaterial() {
  return (
    <div className="modalrawmaterial-container">
      <div className="modal-add-rawmaterial">
        <img src={CloseIcon} alt="" />
        <h2>Registrar Matéria Prima</h2>
        <form action="">
          <label htmlFor="productName">Nome</label>
          <input id="productName" name="name" type="text" />
          <label htmlFor="flowProductBarCode">Código de Barras</label>
          <input
            id="flowProductBarCode"
            name="bar_code"
            type="text"
            maxLength={13}
            // value={flowRegister.bar_code}
            // onChange={(event) => handleFlowRegister(event)}
            // onBlur={(event) => validateFields(event, event.target.value)}
          />
          <label htmlFor="flowProductAmount">Quantidade</label>
          <input
            type="number"
            id="flowProductAmount"
            name="amount"
            // value={flowRegister.amount}
            // onChange={(event) => handleFlowRegister(event)}
            // onBlur={(event) => validateFields(event, event.target.value)}
          />
          <input
            type="submit"
            value="Registrar Fluxo"
            className="button-register"
            // onClick={(e) => validateFields(e, flowRegister)}
          />
        </form>
      </div>
    </div>
  );
}
