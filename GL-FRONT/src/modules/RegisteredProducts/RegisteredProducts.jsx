import "./RegisteredProducts.css";
import SearchModule from "../SearchModule/SearchModule";
import CardProducts from "../CardProducts/CardProducts";
import { db } from "../../services/db";

export default function RegisteredProducts() {
  return (
    <section className="products-container">
      <SearchModule />
      <div className="products-area">
        {db.map((product) => (
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
