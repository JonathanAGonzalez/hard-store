import { useContext, memo } from "react";
//IMPORT REACT ICONS
import { FaOpencart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
//SCSS
import "./Cart.scss";

//COMPONENT
import { CartContext } from "../../context/CartContext";

const CartPerfil = ({ widget, setWidget }) => {
  const CartItem = useContext(CartContext);
  const [cartProduct] = CartItem;
  return (
    <div className="cart-container order-2 col-4  order-md-3 col-md-4 ">
      <AiOutlineUser className="mx-4 cart-icon User" />
      <div className="cart-container">
        {cartProduct.qty !== 0 && (
          <>
            <FaOpencart
              className="cart-icon"
              onClick={() => setWidget(!widget)}
            />
            <div className="cart-qty">
              <span className="cart-qty-num">{cartProduct.product.length}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(CartPerfil);
