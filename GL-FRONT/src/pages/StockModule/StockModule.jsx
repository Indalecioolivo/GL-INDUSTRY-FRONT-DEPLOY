import "./StockModule.css";
import { db } from "../../services/db";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";
import ModalToInformations from "../../modules/ModalToInformations/ModalToInformations";

export default function StockModule() {
  const { handleOpenModalInformations, toModalInformations } =
    useContext(GeneralContext);
  return (
    <section>
      {toModalInformations.showModal ? <ModalToInformations /> : ""}
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
            <tr
              key={product.id}
              onClick={() =>
                handleOpenModalInformations(
                  true,
                  product.id,
                  product.bar_code,
                  product.name,
                  product.description,
                  product.volume,
                  product.stock,
                  product.price
                )
              }
            >
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
