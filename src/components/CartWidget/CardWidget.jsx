import { useContext, memo } from "react";
import { CartContext } from "../../context/CartContext";
import { WidgetItem } from "./WidgetItem";

const CardWidget = () => {
  const [cartProduct] = useContext(CartContext);
  console.log("render widget desde CARDWIDGET");
  return (
    <>
      {cartProduct.product.map((prod, index) => (
        <WidgetItem key={index} prod={prod} />
      ))}
      <hr />
    </>
  );
};

export default memo(CardWidget);
