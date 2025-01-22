import "./ModalToFlowsInfos.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function ModalToFlowsInfos() {
  const {
    toModalFlowInfos,
    setToModalFlowInfos,
    toModalEditFlowRawMaterial,
    setToModalEditFlowRawMaterial,
  } = useContext(GeneralContext);
  const { title, amount, date, type, bar_code, id } = toModalFlowInfos;
  function handleCloseModal(e) {
    setToModalFlowInfos(false);
  }
  function handleOpenModalEdit() {
    handleCloseModal();
    setToModalEditFlowRawMaterial({
      showModal: true,
      title,
      amount,
      type,
      bar_code,
      id,
    });
  }

  return (
    <div className="modalFlowInfos-container">
      <div className="flowsInfos-modal">
        <img src={CloseIcon} alt="" onClick={(e) => handleCloseModal(e)} />
        <h2>Fluxo de {title}</h2>
        <strong>Quantidade</strong>
        <p>{`${amount} ${title === "Matéria Prima" ? " KG" : " UN"}`}</p>
        <strong>Data</strong>
        <p>{date}</p>
        <strong>Tipo de Fluxo</strong>
        <p>{type}</p>
        <strong>Código de Barras</strong>
        <p>{bar_code}</p>
        <div className="for-buttons">
          <button onClick={(e) => handleOpenModalEdit()}>Editar Fluxo</button>
          <button className="btn-exclude">Excluir Fluxo</button>
        </div>
      </div>
    </div>
  );
}
