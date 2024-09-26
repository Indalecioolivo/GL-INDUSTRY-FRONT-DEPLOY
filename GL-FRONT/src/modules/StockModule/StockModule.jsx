import "./StockModule.css";
import { db } from "../../services/db";

export default function StockModule() {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Volume</th>
            <th>Qtd. Estoque</th>
            <th>Preço</th>
            <th>Cód Barras</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {db.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.volume}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>{product.bar_code}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
