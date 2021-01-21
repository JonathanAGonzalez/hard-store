import { useState, memo } from "react";
import { NavLink } from "react-router-dom";
//COMPONENTE
import ListNavBar from "./ListNavBar";
import CartWidget from "../CartWidget/CartWidget";
//SCSS
import "./NavBar.scss";

//COMPONENT NAVBAR
const NavBar = ({ home, categories, contact, widget, setWidget }) => {
  const [navCategories, setNavCategories] = useState(false);

  return (
    <nav className="nav row">
      {widget ? (
        <CartWidget widget={widget} setWidget={setWidget} active="active" />
      ) : (
        <CartWidget widget={widget} setWidget={setWidget} hide="hide" />
      )}
      <div className="container-nav col-12 col-md-4">
        <NavLink
          exact
          activeStyle={{ color: "#d84727" }}
          className="menu-a"
          to="/"
        >
          {home}
        </NavLink>
        <div
          className="menu categories"
          onMouseEnter={() => setNavCategories(!navCategories)}
        >
          <NavLink
            className="menu-a"
            activeStyle={{ color: "#d84727" }}
            to="/categories"
          >
            {categories}
          </NavLink>
          <ListNavBar />
          {navCategories && <ListNavBar active={navCategories} />}
        </div>

        <NavLink
          activeStyle={{ color: "#d84727" }}
          className="menu-a"
          to="/contact"
        >
          {contact}
        </NavLink>
      </div>
    </nav>
  );
};

export default memo(NavBar);
