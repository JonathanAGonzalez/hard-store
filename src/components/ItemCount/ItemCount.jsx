//LIBRERIA ALERTA
import Swal from "sweetalert2";
//HOOKS
import { useContext, memo } from "react";
//CONTEXT
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ stock, count, setCount }) => {
  const [cartProduct, setCartProduct] = useContext(CartContext);

  //AGREGO PRODUCTO AL CARRITO
  const addProduct = () => {
    if (cartProduct.qty >= stock) {
      return Swal.fire({
        title: "UPS!😓",
        text: "No tenemos stock de este producto",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (count < stock) {
      setCount(count + 1);
      setCartProduct({
        ...cartProduct,
        qty: count + 1,
      });
    }
  };
  //SACO UN PRODUCTO DEL CARRITO
  const removeProduct = () => {
    if (count <= 1) {
      return Swal.fire({
        title: "Woow!",
        text: "Tenes que tener al menos un producto agregado",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    setCount(count - 1);
    setCartProduct({
      ...cartProduct,
      qty: count - 1,
    });
  };

  return (
    <>
      <div className="card-count d-flex mb-5">
        <button className="card-count-btn" onClick={removeProduct}>
          -
        </button>

        <span className="card-count-qty">{count}</span>

        <button className="card-count-btn" onClick={addProduct}>
          +
        </button>
      </div>
    </>
  );
};

export default memo(ItemCount);
