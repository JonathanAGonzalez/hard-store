import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.scss";
import useMiles from "../../hooks/useMiles";
const CartTotal = () => {
  const cartContext = useContext(CartContext);
  const [cartProduct] = cartContext;

  const [price, setPrice] = useState(0);

  useEffect(() => {
    const allPrice = cartProduct.product.map((prod) => prod.product.precio);
    const totalPrice = allPrice.reduce((a, b) => a + b, 0);
    setPrice(totalPrice);
  }, [cartProduct]);
  return (
    <div>
      <h5>Total del carrito :$ {useMiles(price)}</h5>
    </div>
  );
};

export default CartTotal;
