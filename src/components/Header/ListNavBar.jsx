import { Link } from "react-router-dom";
import categories from "../../data/categories";

const ListNavBar = () => {
  return (
    <ul className="menu-ul">
      <li>
        <ul className="menu-ul-sub">
          {categories.map((category) => (
            <li key={category.nombre}>
              <Link to={category.ruta}>{category.nombre}</Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default ListNavBar;
