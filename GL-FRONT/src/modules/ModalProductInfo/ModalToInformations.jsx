import "./ModalToInformations.css";
import CloseIcon from "../../assets/close-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function ModalProductInfo() {
  const { toModalInformations, handleOpenModalInformations } =
    useContext(GeneralContext);

  return (
    <div className="modalProductInfo-container">
      {toModalInformations.currentPage === "Produtos" ? (
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
          <button>Editar Produto</button>
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
          <strong>Fluxo de {toModalInformations.flowInfos.type}</strong>
          <p>{toModalInformations.flowInfos.type}</p>
          <strong>Código de Barras</strong>
          <p>{toModalInformations.flowInfos.bar_code}</p>
          <button>Editar Fluxo</button>
        </div>
      )}
    </div>
  );
}
