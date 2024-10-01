import "./RegisteredProducts.css";
import SearchModule from "../SearchModule/SearchModule";
import CardProducts from "../CardProducts/CardProducts";

export default function RegisteredProducts() {
  return (
    <section className="products-container">
      <SearchModule />
      <CardProducts />
    </section>
  );
}
