//REACT ICONS
import { FaSearch } from "react-icons/fa";
//SCSS
import "./Search.scss";
import { useState, useContext } from "react";
import data from "../../data/productsNew";
import { SearchContext } from "../../context/SearchContext";
//COMPONENT SEARCH

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [, setSearchResult] = useContext(SearchContext);

  const resultValue = () => {
    const encontrado = data.map(
      (e) => e.nombre.toLocaleLowerCase().indexOf(inputValue) !== -1 && e.nombre
    );
    const find = encontrado.filter((prodNombre) => prodNombre !== false);
    setSearchResult(find);
  };

  const inputValues = (nombre) => {
    if (nombre.length === 0) {
      return setSearchResult([]);
    }
    setInputValue(nombre);
    resultValue();
  };

  return (
    <>
      <div className="container-search order-3 col-12 order-md-2 col-md-4">
        <label className="container-input">
          <input
            className="input-search"
            type="text"
            placeholder="Busqueda...."
            onKeyUp={(e) => {
              inputValues(e.target.value);
            }}
          />
          <FaSearch className="SearchIco" />
        </label>
      </div>
    </>
  );
};

export default Search;
