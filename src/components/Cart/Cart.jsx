import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
const Cart = () => {
  const CartItem = useContext(CartContext);
  const [cartProduct, setCartProduct] = CartItem;
  console.log(cartProduct);
  return (
    <div>
      <div>
        <h1>CARRITO</h1>
        {JSON.stringify(cartProduct)}
      </div>
    </div>
  );
};

export default Cart;
