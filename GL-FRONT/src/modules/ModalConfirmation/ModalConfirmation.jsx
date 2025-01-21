import "./ModalConfirmation.css";

export default function ModalConfirmation() {
  return (
    <div className="modal-confirmation-container">
      <h3>Deseja prosseguir com a ação?</h3>
      <div className="for-buttons">
        <button>Sim</button>
        <button className="btn-exclude">Não</button>
      </div>
    </div>
  );
}
