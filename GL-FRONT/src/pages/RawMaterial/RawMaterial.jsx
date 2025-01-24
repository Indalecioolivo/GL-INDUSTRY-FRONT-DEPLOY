// import "./RawMaterial.css";
import "../StockModule/StockModule.css";
import { useEffect } from "react";
import { useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import FilterRegisterModule from "../../modules/FilterRegisterModule/FilterRegisterModule";
import ModalToRegisterRawMaterial from "../../modules/ModalToRegisterRawMaterial/ModalToRegisterRawMaterial";
import ModalToInfoRawMaterial from "../../modules/ModalToInfoRawMaterial/ModalToInfoRawMaterial";
import ModalEditRawMaterial from "../../modules/ModalEditRawMaterial/ModalEditRawMaterial";

export default function RawMaterial() {
  const {
    rawMaterialData,
    showModalRegisterRawMaterial,
    toRawMaterialInformations,
    handleOpenModalRawMaterialInformations,
    toEditRawMaterial,
    setTitleContentHome,
    setShowModalRegisterRawMaterial,
  } = useContext(GeneralContext);

  useEffect(() => {
    setTitleContentHome("Matéria Prima");
  }, []);

  return (
    <section className="stock-module-container">
      <FilterRegisterModule
        functionOpenModal={setShowModalRegisterRawMaterial}
      />
      {showModalRegisterRawMaterial ? <ModalToRegisterRawMaterial /> : ""}
      {toRawMaterialInformations.showModal ? <ModalToInfoRawMaterial /> : ""}
      {toEditRawMaterial.showModal ? <ModalEditRawMaterial /> : ""}
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cód Barras</th>
            <th>Qtd. Estoque</th>
            <th>Estado Físico Matéria</th>
          </tr>
        </thead>
        <tbody>
          {rawMaterialData.map((rawMaterial) => (
            <tr
              key={rawMaterial.id}
              onClick={() =>
                handleOpenModalRawMaterialInformations(
                  true,
                  rawMaterial.name,
                  rawMaterial.bar_code,
                  rawMaterial.stock,
                  rawMaterial.id
                )
              }
            >
              <td>{rawMaterial.name}</td>
              <td>{rawMaterial.bar_code}</td>
              <td>{rawMaterial.stock} KG</td>
              <td>Em Breve</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
