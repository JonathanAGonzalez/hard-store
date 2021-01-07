import Swal from "sweetalert2";
import { useContext } from "react";

//CONTEXT
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ stock, initial, onAdd, id }) => {
  const [cartProduct, setCartProduct] = useContext(CartContext);

  const addProduct = () => {
    if (cartProduct.qty >= stock) {
      return Swal.fire({
        title: "Error!",
        text: "No me queda mas en stock",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    setCartProduct({ ...cartProduct, qty: cartProduct.qty + 1 });
  };

  const removeProduct = () => {
    if (cartProduct.qty <= initial) {
      return Swal.fire({
        title: "Error!",
        text: "Tenes que tener al menos un producto agregado",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    setCartProduct({ ...cartProduct, qty: cartProduct.qty - 1 });
  };

  return (
    <>
      <div className="card-count d-flex mb-5">
        <button
          className="card-count-btn"
          onClick={() => addProduct(cartProduct.qty + 1)}
        >
          +
        </button>
        <span className="card-count-qty">{cartProduct.qty}</span>
        <button
          className="card-count-btn"
          onClick={() => removeProduct(cartProduct.qty - 1)}
        >
          -
        </button>
      </div>
    </>
  );
};

export default ItemCount;
