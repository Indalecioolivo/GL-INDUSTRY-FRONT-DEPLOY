import "./ModalToFlowsInfos.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function ModalToFlowsInfos() {
  const { toModalFlowInfos, setToModalFlowInfos } = useContext(GeneralContext);
  const { title, amount, date, type, bar_code } = toModalFlowInfos;
  function handleCloseModal(e) {
    setToModalFlowInfos(false);
  }

  return (
    <div className="modalFlowInfos-container">
      <div className="flowsInfos-modal">
        <img src={CloseIcon} alt="" onClick={(e) => handleCloseModal(e)} />
        <h2>Fluxo de {title}</h2>
        <strong>Quantidade</strong>
        <p>
          {amount}
          {title === "Matéria Prima" ? " KG" : ""}
        </p>
        <strong>Data</strong>
        <p>{date}</p>
        <strong>Tipo de Fluxo</strong>
        <p>{type}</p>
        <strong>Código de Barras</strong>
        <p>{bar_code}</p>
        <div className="for-buttons">
          <button>Editar Fluxo</button>
          <button className="btn-exclude">Excluir Fluxo</button>
        </div>
      </div>
    </div>
  );
}
