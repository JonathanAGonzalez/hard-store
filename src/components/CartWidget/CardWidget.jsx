import { useContext, memo } from "react";
import { CartContext } from "../../context/CartContext";
import { WidgetItem } from "./WidgetItem";

const CardWidget = () => {
  const [cartProduct] = useContext(CartContext);
  return (
    <>
      {cartProduct.product.map((prod, index) => (
        <WidgetItem key={index} prod={prod.product} />
      ))}
    </>
  );
};

export default memo(CardWidget);
