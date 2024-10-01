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
          <CardProducts key={product.id} />
        ))}
      </div>
    </section>
  );
}
