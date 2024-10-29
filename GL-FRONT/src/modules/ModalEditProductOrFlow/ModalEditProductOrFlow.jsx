import "./ModalEditProductOrFlow.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";
import ModalAlert from "../ModalAlert/ModalAlert";

export default function ModalEditProductOrFlow() {
  const { showModalEdit, setShowModalEdit, patchProduct, showModalAlert } =
    useContext(GeneralContext);
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

  async function handleSubmitEdit(e) {
    e.preventDefault();
    await patchProduct();
  }

  return (
    <div className="modal-edit-container">
      {showModalAlert.showModal ? <ModalAlert /> : ""}
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
    </div>
  );
}
