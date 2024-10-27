import "./RegisteredProducts.css";
import { GeneralContext } from "../../context/GeneralContext";
import { db } from "../../services/db";
import { useContext } from "react";
import SearchModule from "../../modules/SearchModule/SearchModule";
import CardProducts from "../../modules/CardProducts/CardProducts";
import ModalToInformations from "../../modules/ModalToInformations/ModalToInformations";
import ModalRegister from "../../modules/ModalRegister/ModalRegister";

export default function RegisteredProducts() {
  const { toModalInformations, showModalRegister, productsData } =
    useContext(GeneralContext);
  return (
    <section className="products-container">
      {toModalInformations.showModal ? <ModalToInformations /> : ""}
      {showModalRegister.showModal ? <ModalRegister /> : ""}
      <SearchModule />
      <div className="products-area">
        {productsData.map((product) => (
          <CardProducts
            key={product.id}
            id={product.id}
            bar_code={product.bar_code}
            name={product.name}
            description={product.description}
            volume={product.volume}
            stock={product.stock}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
