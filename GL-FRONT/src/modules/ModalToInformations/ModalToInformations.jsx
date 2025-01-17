import "./ModalToInformations.css";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";
import CloseIcon from "../../assets/close-icon.png";
import ModalAlert from "../ModalAlert/ModalAlert";

export default function ModalProductInfo() {
  const {
    toModalInformations,
    handleOpenModalInformations,
    setShowModalEdit,
    deleteFlow,
    showModalAlert,
    deleteProduct,
  } = useContext(GeneralContext);
  function handleOpenModalEditProduct() {
    setShowModalEdit({
      ...toModalInformations,
      showModal: true,
    });
    handleOpenModalInformations(false);
  }
  function handleOpenModalEditFlow() {
    setShowModalEdit({
      ...toModalInformations,
      showModal: true,
    });
    handleOpenModalInformations(false);
  }
  function handleExclude() {
    if (
      toModalInformations.currentPage === "Produtos" ||
      toModalInformations.currentPage === "Estoque"
    ) {
      deleteProduct();
    } else {
      deleteFlow();
    }
  }
  return (
    <div className="modalProductInfo-container">
      {showModalAlert.showModal ? <ModalAlert /> : ""}
      {toModalInformations.currentPage === "Produtos" ||
      toModalInformations.currentPage === "Estoque" ? (
        <div className="modalProductInfo">
          <img
            src={CloseIcon}
            alt=""
            onClick={() => handleOpenModalInformations(false)}
          />
          <h2>{toModalInformations.productInfos.name}</h2>
          <strong>Código de Barras</strong>
          <p>{toModalInformations.productInfos.bar_code}</p>
          <strong>Descrição:</strong>
          <p>{toModalInformations.productInfos.description}</p>
          <strong>Volume ML</strong>
          <p>{toModalInformations.productInfos.volume}/ml</p>
          <strong>Estoque Disponível</strong>
          <p>{toModalInformations.productInfos.stock}</p>
          <strong>Preço</strong>
          <p>R$ {toModalInformations.productInfos.price / 10}</p>
          <div className="for-buttons">
            <button onClick={() => handleOpenModalEditProduct()}>
              Editar Produto
            </button>
            <button className="btn-exclude" onClick={(e) => handleExclude(e)}>
              Excluir Produto
            </button>
          </div>
        </div>
      ) : (
        <div className="modalProductInfo">
          <img
            src={CloseIcon}
            alt=""
            onClick={() => handleOpenModalInformations(false)}
          />
          <h2>{toModalInformations.flowInfos.type}</h2>
          <strong>Quantidade</strong>
          <p>{toModalInformations.flowInfos.amount}</p>
          <strong>Data</strong>
          <p>{toModalInformations.flowInfos.date}</p>
          <strong>Tipo de Fluxo</strong>
          <p>{toModalInformations.flowInfos.type}</p>
          <strong>Código de Barras</strong>
          <p>{toModalInformations.flowInfos.bar_code}</p>
          <div className="for-buttons">
            <button onClick={() => handleOpenModalEditFlow()}>
              Editar Fluxo
            </button>
            <button className="btn-exclude" onClick={(e) => handleExclude(e)}>
              Excluir Fluxo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
