import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProduts } from "../context/ProductsContext";
import styles from "./ProductsPage.module.css";

import {
  filterProducts,
  getIntialQuery,
  searchProducts,
} from "../helpers/helper";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

function ProductsPage() {
  const products = useProduts();

  const [disPlayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    setDisplayed(products);

    setQuery(getIntialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!disPlayed.length && <Loader />}
          {disPlayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>

        <Sidebar setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
