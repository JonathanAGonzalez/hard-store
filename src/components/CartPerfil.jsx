//COMPONENTS
import { useState } from "react";
//IMPORT REACT ICONS
import { FaOpencart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
//SCSS
import "./scss/Cart.scss";

//COMPONENT
const CartPerfil = ({ widget, setWidget }) => {
  const handleWidget = () => {
    setWidget(!widget);
  };
  return (
    <div className="cart-container order-2 col-4  order-md-3 col-md-4 ">
      <AiOutlineUser className="mx-4 cart-icon User" />
      <FaOpencart className="cart-icon" onClick={handleWidget} />
    </div>
  );
};

export default CartPerfil;
