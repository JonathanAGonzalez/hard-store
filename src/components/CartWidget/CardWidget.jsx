import { useContext, memo } from "react";
import { CartContext } from "../../context/CartContext";
import { WidgetItem } from "./WidgetItem";

const CardWidget = () => {
  const [cartProduct] = useContext(CartContext);

  return (
    <>
      {cartProduct.product.map(prod=>
        <WidgetItem key={prod.id} producto={prod}/>
        
        )}
      
    </>
  );
};

export default memo(CardWidget);
