import "./StockFlow.css";
import { flowdb } from "../../services/db";
import SearchIcon from "../../assets/search-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function StockFlow() {
  const { setShowModalRegisterFlow } = useContext(GeneralContext);
  return (
    <section>
      <p>
        <button onClick={() => setShowModalRegisterFlow(true)}>
          Registrar
        </button>
        <div className="toInput">
          <input type="text" />
          <img src={SearchIcon} className="searchIcon" alt="" />
        </div>
      </p>
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
