//STYLES SCSS
import "./Logo.scss";
import { NavLink } from "react-router-dom";
//REACT ICONS
import { FiCpu } from "react-icons/fi";

const Logo = () => {
  return (
    <div className="order-1 col-8 order-md-1 col-md-4">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h1 className="logo-hard">
          Hard
          <span className="logo-store">
            Store
            <FiCpu
              style={{ color: "#D84727", margin: "0px 5px", fontSize: "1rem" }}
            />
          </span>
        </h1>
      </NavLink>
    </div>
  );
};

export default Logo;
