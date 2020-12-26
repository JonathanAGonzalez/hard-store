//REACT ICONS
import { FaSearch } from "react-icons/fa";

//SCSS
import "./Search.scss";

//COMPONENT SEARCH
const Search = () => {
  return (
    <div className="container-search order-3 col-12 order-md-2 col-md-4">
      <label className="container-input">
        <input
          className="input-search"
          type="text"
          placeholder="Busqueda...."
        />
        <FaSearch className="SearchIco" />
      </label>
    </div>
  );
};

export default Search;
