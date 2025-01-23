import "./ModalToRegisterFlowRawMaterial.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function ModalToRegisterFlowRawMaterial() {
  const {
    toModalRegisterFlowRawMaterial,
    setToModalRegisterFlowRawMaterial,
    setShowModalRegisterFlowMaterial,
    postNewFlowRawMaterial,
  } = useContext(GeneralContext);
  function onSubmit(e) {
    e.preventDefault();
    postNewFlowRawMaterial();
  }
  function CloseModal() {
    setShowModalRegisterFlowMaterial(false);
  }
  function onChangeFields(e) {
    setToModalRegisterFlowRawMaterial({
      ...toModalRegisterFlowRawMaterial,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="modal-register-flow-raw-material-container">
      <div className="modal-register">
        <img src={CloseIcon} alt="" onClick={() => CloseModal()} />
        <h2>Registrar Matéria Prima</h2>
        <form action="" onSubmit={(e) => onSubmit(e)}>
          <label htmlFor="flowType">
            <strong>Tipo de Fluxo</strong>
          </label>
          <select
            name="type"
            id="flowType"
            value={toModalRegisterFlowRawMaterial.type}
            onChange={(e) => onChangeFields(e)}
          >
            <option value="">Escolha o Tipo de Fluxo</option>
            <option value="Produção">Entrada</option>
            <option value="Venda">Saída</option>
          </select>
          <label htmlFor="flowRawMaterialBarCode">
            <strong>Código de Barras</strong>
          </label>
          <input
            type="text"
            id="flowRawMaterialBarCode"
            name="bar_code"
            maxLength={13}
            value={toModalRegisterFlowRawMaterial.bar_code}
            onChange={(e) => onChangeFields(e)}
          />
          <label htmlFor="flowRawMaterialAmount">
            <strong>Quantidade</strong>
          </label>
          <input
            type="number"
            id="flowRawMaterialAmount"
            name="amount"
            value={toModalRegisterFlowRawMaterial.amount}
            onChange={(e) => onChangeFields(e)}
          />
          <input
            type="submit"
            value="Registrar Fluxo"
            className="button-register"
          />
        </form>
      </div>
    </div>
  );
}
