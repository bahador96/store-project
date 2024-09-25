import { useProduts } from "../context/ProductsContext";

function ProductPage() {
  const products = useProduts();
  console.log(products);

  return <div>ProducsPaged</div>;
}

export default ProductPage;
