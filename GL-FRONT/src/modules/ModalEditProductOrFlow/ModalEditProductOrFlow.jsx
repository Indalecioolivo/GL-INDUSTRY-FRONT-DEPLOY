import "./ModalEditProductOrFlow.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";
import ModalAlert from "../ModalAlert/ModalAlert";

export default function ModalEditProductOrFlow() {
  const {
    showModalEdit,
    setShowModalEdit,
    patchProduct,
    showModalAlert,
    toModalInformations,
    patchFlow,
  } = useContext(GeneralContext);
  function handleCloseModal(e) {
    e.stopPropagation();
    setShowModalEdit({ ...setShowModalEdit, showModal: false });
  }

  function handleChangeProductInfos(e) {
    const value = e.target.value;
    setShowModalEdit({
      ...showModalEdit,
      productInfos: { ...showModalEdit.productInfos, [e.target.name]: value },
    });
  }
  function handleChangeChargeInfos(e) {
    setShowModalEdit({
      ...showModalEdit,
      flowInfos: {
        ...showModalEdit.flowInfos,
        [e.target.name]: e.target.value,
      },
    });
  }

  async function handleSubmitEdit(e) {
    e.preventDefault();
    await patchProduct();
  }
  async function handleSubmitEditFlow(e) {
    e.preventDefault();
    await patchFlow();
  }

  return (
    <div className="modal-edit-container">
      {showModalAlert.showModal ? <ModalAlert /> : ""}
      {toModalInformations.currentPage === "Produtos" ||
      toModalInformations.currentPage === "Estoque" ? (
        <div className="modal-edit-box">
          <img src={CloseIcon} alt="" onClick={(e) => handleCloseModal(e)} />
          <h2>Editar Produto</h2>
          <form action="" onSubmit={(e) => handleSubmitEdit(e)}>
            <label htmlFor="productName">Nome</label>
            <input
              id="productName"
              type="text"
              name="name"
              value={showModalEdit.productInfos.name}
              onChange={(e) => handleChangeProductInfos(e)}
            />
            <label htmlFor="productBarCode">Código de Barras</label>
            <input
              id="productBarCode"
              type="text"
              name="bar_code"
              maxLength={13}
              value={showModalEdit.productInfos.bar_code}
              onChange={(e) => handleChangeProductInfos(e)}
            />
            <label htmlFor="productDescription">Descrição</label>
            <input
              id="productDescription"
              type="text"
              name="description"
              value={showModalEdit.productInfos.description}
              onChange={(e) => handleChangeProductInfos(e)}
            />
            <label htmlFor="productVolume">Volume em ML</label>
            <input
              id="productVolume"
              type="number"
              name="volume"
              value={showModalEdit.productInfos.volume}
              onChange={(e) => handleChangeProductInfos(e)}
            />
            <label htmlFor="productPrice">Valor</label>
            <input
              id="productPrice"
              type="text"
              name="price"
              value={showModalEdit.productInfos.price}
              onChange={(e) => handleChangeProductInfos(e)}
            />
            <input type="submit" className="button-edit" value="Confirmar" />
          </form>
        </div>
      ) : (
        <div className="modal-edit-box">
          <img src={CloseIcon} alt="" onClick={(e) => handleCloseModal(e)} />
          <h2>Editar flow</h2>
          <form action="" onSubmit={(e) => handleSubmitEditFlow(e)}>
            <label htmlFor="flowType">Tipo de Fluxo:</label>
            <select
              name="type"
              id="flowType"
              value={showModalEdit.flowInfos.type}
              onChange={(e) => handleChangeChargeInfos(e)}
            >
              <option value="">Escolha o tipo de Fluxo</option>
              <option value="Produção">Produção</option>
              <option value="Venda">Venda</option>
            </select>
            <label htmlFor="">Código de Barras</label>
            <input
              type="text"
              id="bar_code"
              name="bar_code"
              value={showModalEdit.flowInfos.bar_code}
              onChange={(e) => handleChangeChargeInfos(e)}
            />
            <label htmlFor="">Quantidade</label>
            <input
              type="number"
              name="amount"
              value={showModalEdit.flowInfos.amount}
              onChange={(e) => handleChangeChargeInfos(e)}
            />
            <input type="submit" className="button-edit" value="Editar Fluxo" />
          </form>
        </div>
      )}
    </div>
  );
}
