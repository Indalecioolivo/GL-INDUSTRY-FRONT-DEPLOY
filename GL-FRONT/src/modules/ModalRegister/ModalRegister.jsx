import "./ModalRegister.css";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext, useState } from "react";
import CloseIcon from "../../assets/close-icon.png";
import ModalAlert from "../ModalAlert/ModalAlert";

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
    errorsRegisterFlow,
    validateFields,
    errorsRegisterProduct,
    postNewProduct,
    showModalAlert,
    postNewFlow,
  } = useContext(GeneralContext);
  function handleCloseModal(e) {
    e.stopPropagation();
    setShowModalRegister({ ...showModalRegister, showModal: false });
  }
  async function handleSubmitProduct(e) {
    e.preventDefault();
    await postNewProduct();
  }

  async function handleSubmitFlow(e) {
    e.preventDefault();
    postNewFlow();
  }

  return (
    <div className="modalRegister-container">
      {showModalAlert.showModal ? <ModalAlert /> : ""}
      {showModalRegister.currentPage === "Produtos" ? (
        <div className="modalRegister">
          <img src={CloseIcon} alt="" onClick={(e) => handleCloseModal(e)} />
          <h2>Registrar Produto</h2>
          <form
            action=""
            onSubmit={(e) => {
              handleSubmitProduct(e);
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
              onBlur={(event) => validateFields(event, event.target.value)}
            />
            <p>{errorsRegisterProduct.name ? "*Campo Obrigatório" : ""}</p>
            <label htmlFor="productBarCode">Código de Barras</label>
            <input
              id="productBarCode"
              type="text"
              name="bar_code"
              maxLength={13}
              value={productRegister.bar_code}
              onChange={(event) => handleProductRegister(event)}
              onBlur={(event) => validateFields(event, event.target.value)}
            />
            <p>{errorsRegisterProduct.bar_code ? "*Campo Obrigatório" : ""}</p>
            <label htmlFor="productDescription">Descrição</label>
            <input
              id="productDescription"
              type="text"
              name="description"
              value={productRegister.description}
              onChange={(event) => handleProductRegister(event)}
              onBlur={(event) => validateFields(event, event.target.value)}
            />
            <p>
              {errorsRegisterProduct.description ? "*Campo Obrigatório" : ""}
            </p>
            <label htmlFor="productVolume">Volume em ML</label>
            <input
              id="productVolume"
              type="number"
              name="volume"
              value={productRegister.volume}
              onChange={(event) => handleProductRegister(event)}
              onBlur={(event) => validateFields(event, event.target.value)}
            />
            <p>{errorsRegisterProduct.volume ? "*Campo Obrigatório" : ""}</p>
            <label htmlFor="productPrice">Valor</label>
            <input
              type="text"
              id="productPrice"
              name="price"
              value={productRegister.formattedValue}
              onChange={(event) => handleCoinChange(event)}
              onBlur={(event) => validateFields(event, event.target.value)}
            />
            <p>{errorsRegisterProduct.price ? "*Campo Obrigatório" : ""}</p>
            <input
              type="submit"
              value="Registrar Produto"
              className="button-register"
              // onClick={() => console.log(productRegister)}
            />
          </form>
        </div>
      ) : (
        <div className="modalRegister">
          <img src={CloseIcon} alt="" onClick={(e) => handleCloseModal(e)} />
          <h2>Registrar Fluxo</h2>
          <form action="" onSubmit={(e) => handleSubmitFlow(e)}>
            <label htmlFor="flowType">Tipo de Fluxo:</label>
            <select
              name="type"
              id="flowType"
              value={flowRegister.type}
              onChange={(event) => handleFlowRegister(event)}
              onBlur={(event) => validateFields(event, event.target.value)}
            >
              <option value="">Escolha Tipo de Fluxo</option>
              <option value="Produção">Produção</option>
              <option value="Venda">Venda</option>
            </select>
            {errorsRegisterFlow.type ? <p>*Campo Obrigatório</p> : ""}
            <label htmlFor="flowProductBarCode">Código de Barras</label>
            <input
              id="flowProductBarCode"
              name="bar_code"
              type="text"
              maxLength={13}
              value={flowRegister.bar_code}
              onChange={(event) => handleFlowRegister(event)}
              onBlur={(event) => validateFields(event, event.target.value)}
            />
            {errorsRegisterFlow.bar_code ? <p>*Campo Obrigatório</p> : ""}
            <label htmlFor="flowProductAmount">Quantidade</label>
            <input
              type="number"
              id="flowProductAmount"
              name="amount"
              value={flowRegister.amount}
              onChange={(event) => handleFlowRegister(event)}
              onBlur={(event) => validateFields(event, event.target.value)}
            />
            {errorsRegisterFlow.amount ? <p>*Campo Obrigatório</p> : ""}
            <input
              type="submit"
              value="Registrar Fluxo"
              className="button-register"
              // onClick={(e) => validateFields(e, flowRegister)}
            />
          </form>
        </div>
      )}
    </div>
  );
}
