//HOOKS
import { useContext, memo, useEffect, useState } from "react";
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
  const [cartCount, setCartCount] = useState(0);
  const quantity = cartProduct.product.map((prod) => prod.cantidad);
  //SUMA DEL CARRITO
  useEffect(() => {
    const totalQuantity = quantity.reduce((a, b) => a + b, 0);
    setCartCount(totalQuantity);
  }, [quantity]);

  return (
    <div className="cart-container order-2 col-4  order-md-3 col-md-4 ">
      <AiOutlineUser className="mx-4 cart-icon User" />
      <div className="cart-container">
        {cartProduct.qty > 0 && (
          <>
            <FaOpencart
              className="cart-icon"
              onClick={() => setWidget(!widget)}
            />
            <div className="cart-qty">
              <span className="cart-qty-num">{cartCount}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(CartPerfil);
