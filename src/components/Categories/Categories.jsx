import { NavLink } from "react-router-dom";
import categories from "../../data/categories";
import "./Categories.scss";
const Categories = () => {
  return (
    <div className="container-categories">
      <h1>TODAS LAS CATEGORIAS</h1>
      <ul>
        {categories.map((category) => (
          <NavLink key={category.nombre} to={`${category.ruta}`}>
            <li className="categories-li">{category.nombre}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
