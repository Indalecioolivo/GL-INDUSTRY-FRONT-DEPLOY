import "./ModalRegister.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";
import InputMask from "react-input-mask";

export default function ModalRegister() {
  const {
    showModalRegister,
    setShowModalRegister,
    productRegister,
    handleProductRegister,
    handleCoinChange,
    flowRegister,
    setFlowRegister,
    handleFlowRegister,
  } = useContext(GeneralContext);
  function handleClick(e) {
    e.stopPropagation();
    setShowModalRegister({ ...showModalRegister, showModal: false });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(flowRegister);
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
            <label htmlFor="productName">Nome</label>
            <input
              id="productName"
              type="text"
              name="name"
              value={productRegister.name}
              onChange={(event) => handleProductRegister(event)}
            />
            <label htmlFor="productBarCode">Código de Barras</label>
            <InputMask
              id="productBarCode"
              mask="9'99999'99999"
              name="bar_code"
              value={productRegister.bar_code}
              onChange={(event) => handleProductRegister(event)}
            />
            <label htmlFor="productDescription">Descrição</label>
            <input
              id="productDescription"
              type="text"
              name="description"
              value={productRegister.description}
              onChange={(event) => handleProductRegister(event)}
            />
            <label htmlFor="productVolume">Volume em ML</label>
            <input
              id="productVolume"
              type="number"
              name="volume"
              value={productRegister.volume}
              onChange={(event) => handleProductRegister(event)}
            />
            <label htmlFor="productPrice">Valor</label>
            <input
              type="text"
              id="productPrice"
              value={productRegister.formattedValue}
              onChange={(event) => handleCoinChange(event)}
            />
            <input
              type="submit"
              value="Registrar"
              className="button-register"
              onClick={() => console.log(productRegister)}
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
            <label htmlFor="flowType">Tipo de Fluxo:</label>
            <select
              name="type"
              id="flowType"
              value={flowRegister.type}
              onChange={(event) => handleFlowRegister(event)}
            >
              <option value="">Escolha Tipo de Fluxo</option>
              <option value="entrada">Produção</option>
              <option value="saida">Venda</option>
            </select>
            <label htmlFor="flowProductBarCode">Código de Barras</label>
            <InputMask
              id="flowProductBarCode"
              mask="9'99999'99999"
              name="bar_code"
              value={flowRegister.bar_code}
              onChange={(event) => handleFlowRegister(event)}
            />
            <label htmlFor="flowProductName">Nome</label>
            <input
              type="text"
              id="flowProductName"
              name="name"
              value={flowRegister.name}
              onChange={(event) => handleFlowRegister(event)}
            />
            <label htmlFor="dateFlow">Data</label>
            <input
              type="date"
              id="dateFlow"
              name="date"
              value={flowRegister.date}
              onChange={(event) => handleFlowRegister(event)}
            />
            <label htmlFor="flowProductAmount">Quantidade</label>
            <input
              type="number"
              id="flowProductAmount"
              name="amount"
              value={flowRegister.amount}
              onChange={(event) => handleFlowRegister(event)}
            />
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
