import ListNavBar from "./ListNavBar";
import { useState } from "react";

import CarWidget from "../components/CartWidget";
//SCSS
import "./scss/NavBar.scss";

//COMPONENT NAVBAR
const NavBar = ({ categories, offers, contact, widget, setWidget }) => {
  const [navCategories, setNavCategories] = useState(false);

  return (
    <nav className="nav row">
      {widget && <CarWidget widget={widget} setWidget={setWidget} />}
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
