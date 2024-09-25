import { useProduts } from "../context/ProductsContext";

function ProductPage() {
  console.log(useProduts());

  return <div>ProducsPaged</div>;
}

export default ProductPage;
