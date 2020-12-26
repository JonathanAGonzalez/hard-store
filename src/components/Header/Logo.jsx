//STYLES SCSS
import "./Logo.scss";

//REACT ICONS
import { FiCpu } from "react-icons/fi";

//COMPONENT LOGO
const Logo = () => {
  return (
    <div className="order-1 col-8 order-md-1 col-md-4">
      <h1 className="logo-hard">
        Hard
        <span className="logo-store">
          Store
          <FiCpu
            style={{ color: "#D84727", margin: "0px 5px", fontSize: "1rem" }}
          />
        </span>
      </h1>
    </div>
  );
};

export default Logo;
