// import "../StockFlow/StockFlow.css";
import { useContext, useEffect } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import SearchModule from "../../modules/SearchModule/SearchModule";
import ModalToFlowsInfos from "../../modules/ModalToFlowsInfos/ModalToFlowsInfos";
import ModalEditFlowRawMaterial from "../../modules/ModalEditFlowRawMaterial/ModalEditFlowRawMaterial";
import ModalAlert from "../../modules/ModalAlert/ModalAlert";

export default function FlowRawMaterial() {
  const {
    setTitleContentHome,
    flowRawMaterialData,
    toModalFlowInfos,
    setToModalFlowInfos,
    toModalEditFlowRawMaterial,
    showModalAlert,
  } = useContext(GeneralContext);
  useEffect(() => {
    setTitleContentHome("Fluxo de Matéria Prima");
  }, []);

  return (
    <section className="stock-flow-container">
      {toModalFlowInfos.showModal ? <ModalToFlowsInfos /> : ""}
      {toModalEditFlowRawMaterial.showModal ? <ModalEditFlowRawMaterial /> : ""}
      {showModalAlert.showModal ? <ModalAlert /> : ""}
      <SearchModule />
      <table>
        <thead>
          <tr>
            <th>Matéria Prima</th>
            <th>Tipo de Fluxo</th>
            <th>Quantidade</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {flowRawMaterialData.map((flow) => (
            <tr
              key={flow.id}
              onClick={(e) =>
                setToModalFlowInfos({
                  showModal: true,
                  title: "Matéria Prima",
                  amount: flow.amount,
                  date: flow.date,
                  type: flow.type,
                  bar_code: flow.rawMaterial_bar_code,
                  id: flow.id,
                })
              }
            >
              <td>{flow.rawMaterial_bar_code}</td>
              <td>{flow.type}</td>
              <td>{flow.amount}</td>
              <td>{flow.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
