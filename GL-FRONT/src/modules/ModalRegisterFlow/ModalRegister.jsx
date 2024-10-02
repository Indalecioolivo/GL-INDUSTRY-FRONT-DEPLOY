import "./ModalRegister.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function ModalRegister() {
  const { showModalRegister, setShowModalRegister } =
    useContext(GeneralContext);
  function handleClick(e) {
    e.stopPropagation();
    setShowModalRegister({ ...showModalRegister, showModal: false });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="modalRegister-container">
      {showModalRegister.currentPage === "Produtos" ? (
        <div className="modalRegister">
          <img src={CloseIcon} alt="" onClick={(e) => handleClick(e)} />
          <h2>Registrar Produto</h2>
          <form
            action=""
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label htmlFor="">Tipo de Registro</label>
            <select name="" id="">
              <option value="">Produto Único</option>
              <option value="">Kit</option>
            </select>
            <label htmlFor="">Nome</label>
            <input type="text" />
            <label htmlFor="">Código de Barras</label>
            <input type="number" />
            <label htmlFor="">Descrição</label>
            <input type="text" />
            <label htmlFor="">Volume em ML</label>
            <input type="number" />
            <label htmlFor="">Valor</label>
            <input type="number" />
            <input
              type="submit"
              value="Registrar"
              className="button-register"
            />
          </form>
        </div>
      ) : (
        <div className="modalRegister">
          <img src={CloseIcon} alt="" onClick={(e) => handleClick(e)} />
          <h2>Registrar Fluxo</h2>
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
            <input
              type="submit"
              value="Registrar"
              className="button-register"
            />
          </form>
        </div>
      )}
    </div>
  );
}
