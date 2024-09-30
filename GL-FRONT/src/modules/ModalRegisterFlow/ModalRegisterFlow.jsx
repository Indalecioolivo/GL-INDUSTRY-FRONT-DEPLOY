import "./ModalRegisterFlow.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function ModalRegisterFlow() {
  const { setShowModalRegisterFlow } = useContext(GeneralContext);
  function handleClick(e) {
    e.stopPropagation();
    setShowModalRegisterFlow(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="modalRegister-container">
      <div className="modalRegister">
        <img src={CloseIcon} alt="" onClick={(e) => handleClick(e)} />
        <h2>Registrar</h2>
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label htmlFor="">Tipo de Fluxo:</label>
          <select name="" id="">
            <option value="">Produção</option>
            <option value="">Venda</option>
          </select>
          <label htmlFor="">Código de Barras</label>
          <input type="number" />
          <label htmlFor="">Nome</label>
          <input type="text" />
          <label htmlFor="">Data</label>
          <input type="date" />
          <label htmlFor="">Quantidade</label>
          <input type="number" />
          <input type="submit" value="Registrar" className="button-register" />
        </form>
      </div>
    </div>
  );
}
