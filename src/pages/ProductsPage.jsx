import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProduts } from "../context/ProductsContext";
import styles from "./ProductsPage.module.css";

function ProductPage() {
  const products = useProduts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>

      <div>slider</div>
    </div>
  );
}

export default ProductPage;
