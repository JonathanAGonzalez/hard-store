//REACT ICONS
import { FaSearch } from "react-icons/fa";
//SCSS
import "./Search.scss";
import { useState } from "react";
import data from "../../data/productsNew";
//COMPONENT SEARCH
const Search = () => {
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const inputValues = (nombre) => {
    if (!nombre.trim()) {
      return setResult([]);
    }
    setInputValue(nombre);
    resultValue();
  };
  const resultValue = () => {
    const encontrado = data.map(
      (e) => e.nombre.toLocaleLowerCase().indexOf(inputValue) !== -1 && e.nombre
    );
    setResult(encontrado);
  };
  return (
    <>
      <div className="container-search order-3 col-12 order-md-2 col-md-4">
        <div className="search-result-container">
          <ul className="search-result-ul">
            {result !== false &&
              result.map(
                (e) =>
                  e !== false && (
                    <li className="search-result-li" key={e}>
                      {e}
                    </li>
                  )
              )}
          </ul>
        </div>
        <label className="container-input">
          <input
            className="input-search"
            type="text"
            placeholder="Busqueda...."
            onChange={(e) => {
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
