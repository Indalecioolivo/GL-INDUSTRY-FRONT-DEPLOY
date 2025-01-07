// import "./RawMaterial.css";
import "../StockModule/StockModule.css";
import { useContext } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import FilterRegisterModule from "../../modules/FilterRegisterModule/FilterRegisterModule";
import ModalToRegisterRawMaterial from "../../modules/ModalToRegisterRawMaterial/ModalToRegisterRawMaterial";

export default function RawMaterial() {
  const { rawMaterialData } = useContext(GeneralContext);

  return (
    <section className="stock-module-container">
      <FilterRegisterModule />
      <ModalToRegisterRawMaterial />
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
            <tr key={rawMaterial.id}>
              <td>{rawMaterial.name}</td>
              <td>{rawMaterial.bar_code}</td>
              <td>{rawMaterial.stock}</td>
              <td>Incluir estado da matéria bd</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
