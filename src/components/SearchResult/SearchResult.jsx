import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import data from "../../data/productsNew";
import ContainerResultSearch from "./ContainerResultSearch";
import "./Search.scss";
const SearchResult = () => {
  const searchContext = useContext(SearchContext);
  const [searchResult] = searchContext;
  const [productoEncontrado, setProductoEncontrado] = useState([]);

  const findProduct = () => {
    const findP = searchResult.map((e) =>
      data.find((prod) => prod.nombre === e)
    );
    setProductoEncontrado(findP);
  };

  useEffect(() => {
    findProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResult]);

  return (
    <div className="container-search-result">
      <ContainerResultSearch
        productoEncontrado={productoEncontrado}
        setProductoEncontrado={setProductoEncontrado}
      />
    </div>
  );
};

export default SearchResult;
