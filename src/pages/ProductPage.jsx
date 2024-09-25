import { useProduts } from "../context/ProductsContext";

function ProductPage() {
  const products = useProduts();
  console.log(products);

  return (
    <div>
      <div>
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
