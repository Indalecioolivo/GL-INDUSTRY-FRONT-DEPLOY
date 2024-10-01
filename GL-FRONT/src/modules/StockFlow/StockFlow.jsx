import "./StockFlow.css";
import { flowdb } from "../../services/db";
import SearchModule from "../SearchModule/SearchModule";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function StockFlow() {
  const {} = useContext(GeneralContext);
  return (
    <section>
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
          {flowdb.map((fluxo) => (
            <tr key={fluxo.id}>
              <td>{fluxo.name}</td>
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
