import "./StockFlow.css";
import { flowdb } from "../../services/db";
import CloseIcon from "../../assets/close-icon.png";
import SearchIcon from "../../assets/search-icon.png";

export default function StockFlow() {
  return (
    <section>
      <p>
        <button>Registrar</button>
        <div className="toInput">
          <input type="text" />
          <img src={CloseIcon} className="closeIcon" alt="" />
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
            <tr>
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
