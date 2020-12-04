import ListNavBar from "./ListNavBar";
import { useState } from "react";
//SCSS
import "./scss/NavBar.scss";

//COMPONENT NAVBAR
const NavBar = ({ categories, offers, contact }) => {
  const [navCategories, setNavCategories] = useState(false);

  const handleNavCategories = () => {
    setNavCategories(!navCategories);
  };

  return (
    <nav className="nav row">
      <div className="container-nav col-12 col-md-4">
        <div className="menu categories" onClick={handleNavCategories}>
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
