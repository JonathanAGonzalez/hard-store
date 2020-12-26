import ListNavBar from "./ListNavBar";
import { useState } from "react";

import CartWidget from "../CartWidget/CartWidget";
//SCSS
import "./NavBar.scss";

//COMPONENT NAVBAR
const NavBar = ({ categories, offers, contact, widget, setWidget }) => {
  const [navCategories, setNavCategories] = useState(false);

  return (
    <nav className="nav row">
      {widget && <CartWidget widget={widget} setWidget={setWidget} />}
      <div className="container-nav col-12 col-md-4">
        <div
          className="menu categories"
          onClick={() => setNavCategories(!navCategories)}
        >
          {categories}
          {navCategories && <ListNavBar />}
        </div>
        <a className="menu-a" href="/">
          {offers}
        </a>
        <a className="menu-a" href="/">
          {contact}
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
