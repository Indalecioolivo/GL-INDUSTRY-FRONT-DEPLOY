import "../ModalEditProductOrFlow/ModalEditProductOrFlow.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function ModalEditFlowRawMaterial() {
  const {
    toModalEditFlowRawMaterial,
    setToModalEditFlowRawMaterial,
    patchFlowRawMaterial,
  } = useContext(GeneralContext);
  function handleCloseModal() {
    setToModalEditFlowRawMaterial(false);
  }
  function handleChange(e) {
    setToModalEditFlowRawMaterial({
      ...toModalEditFlowRawMaterial,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault(e);
    await patchFlowRawMaterial();
  }

  return (
    <div className="modal-edit-container">
      <div className="modal-edit-box">
        <img src={CloseIcon} alt="" onClick={() => handleCloseModal()} />
        <h2>{`Editar fluxo de ${toModalEditFlowRawMaterial.title}`}</h2>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="flowType">
            <strong>Tipo de Fluxo:</strong>
          </label>
          <select
            name="type"
            id="flowType"
            value={toModalEditFlowRawMaterial.type}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Escolha o tipo de fluxo</option>
            <option value="Produção">Entrada</option>
            <option value="Venda">Saída</option>
          </select>
          <label htmlFor="bar_code">
            <strong>Código de Barras:</strong>
          </label>
          <input
            type="text"
            id="bar_code"
            name="bar_code"
            maxLength={13}
            value={toModalEditFlowRawMaterial.bar_code}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="amount">
            <strong>Quantidade</strong>
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={toModalEditFlowRawMaterial.amount}
            onChange={(e) => handleChange(e)}
          />
          <input type="submit" className="button-edit" value="Editar Fluxo" />
        </form>
      </div>
    </div>
  );
}
