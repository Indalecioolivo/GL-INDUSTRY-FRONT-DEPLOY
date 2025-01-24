import "./StockFlow.css";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext, useEffect } from "react";
import SearchModule from "../../modules/SearchModule/SearchModule";
import ModalToInformations from "../../modules/ModalToInformations/ModalToInformations";
import ModalRegister from "../../modules/ModalRegister/ModalRegister";
import ModalEditProductOrFlow from "../../modules/ModalEditProductOrFlow/ModalEditProductOrFlow";

export default function StockFlow() {
  const {
    handleOpenModalInformations,
    showModalRegister,
    toModalInformations,
    flowData,
    showModalEdit,
    setTitleContentHome,
  } = useContext(GeneralContext);
  useEffect(() => {
    setTitleContentHome("Fluxo Estoque");
  }, []);

  return (
    <section className="stock-flow-container">
      {showModalRegister.showModal ? <ModalRegister /> : ""}
      {toModalInformations.showModal ? <ModalToInformations /> : ""}
      {showModalEdit.showModal ? <ModalEditProductOrFlow /> : ""}
      <SearchModule />
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Tipo Fluxo</th>
            <th>Quantidade</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {flowData.map((fluxo) => (
            <tr
              key={fluxo.id}
              onClick={() =>
                handleOpenModalInformations(
                  true,
                  fluxo.id,
                  fluxo.product_bar_code,
                  fluxo.name,
                  "",
                  "",
                  "",
                  "",
                  fluxo.amount,
                  fluxo.date,
                  fluxo.type
                )
              }
            >
              <td>{fluxo.product_bar_code}</td>
              <td>{fluxo.type}</td>
              <td>{fluxo.amount}</td>
              <td>{fluxo.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
