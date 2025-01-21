import "./ModalConfirmation.css";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function ModalConfirmation({ action }) {
  const { setShowModalConfirmation } = useContext(GeneralContext);
  return (
    <div className="modal-confirmation-container">
      <h3>Deseja prosseguir com a ação?</h3>
      <div className="for-buttons">
        <button onClick={() => action()}>Sim</button>
        <button
          className="btn-exclude"
          onClick={() => setShowModalConfirmation(false)}
        >
          Não
        </button>
      </div>
    </div>
  );
}
