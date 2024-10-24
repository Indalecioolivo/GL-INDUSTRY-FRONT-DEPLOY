import "./StockFlow.css";
import { flowdb } from "../../services/db";
import SearchModule from "../../modules/SearchModule/SearchModule";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function StockFlow() {
  const { handleOpenModalInformations } = useContext(GeneralContext);
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
            <tr
              key={fluxo.id}
              onClick={() =>
                handleOpenModalInformations(
                  true,
                  fluxo.id,
                  fluxo.bar_code,
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
