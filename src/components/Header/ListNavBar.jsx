import { NavLink } from "react-router-dom";
import categories from "../../data/categories";

const ListNavBar = () => {
  return (
    <ul className="menu-ul">
      <li>
        <ul className="menu-ul-sub">
          {categories.map((category) => (
            <li key={category.nombre}>
              <NavLink activeStyle={{ color: "#d84727" }} to={category.ruta}>
                {category.nombre}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default ListNavBar;
