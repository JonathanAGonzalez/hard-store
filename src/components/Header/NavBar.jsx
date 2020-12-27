import ListNavBar from "./ListNavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
//SCSS
import "./NavBar.scss";

//COMPONENT NAVBAR
const NavBar = ({ home, categories, offers, contact, widget, setWidget }) => {
  const [navCategories, setNavCategories] = useState(false);

  return (
    <nav className="nav row">
      {widget && <CartWidget widget={widget} setWidget={setWidget} />}
      <div className="container-nav col-12 col-md-4">
        <Link className="menu-a" to="/">
          {home}
        </Link>
        <div
          className="menu categories"
          onClick={() => setNavCategories(!navCategories)}
        >
          {categories}
          {navCategories && <ListNavBar />}
        </div>

        <Link className="menu-a" to="/contact">
          {contact}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
