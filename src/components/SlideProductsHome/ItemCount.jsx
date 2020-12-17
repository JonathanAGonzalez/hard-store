import { useState } from "react";
import Swal from "sweetalert2";
const ItemCount = ({ stock, initial }) => {
  const [quantity, setQuantity] = useState(1);

  const addProduct = () => {
    if (quantity >= stock) {
      return Swal.fire({
        title: "Error!",
        text: "No me queda mas en stock",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    setQuantity(quantity + 1);
  };

  const removeProduct = () => {
    if (quantity <= initial) {
      return Swal.fire({
        title: "Error!",
        text: "Tenes que tener al menos un producto agregado",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    setQuantity(quantity - 1);
  };

  return (
    <div className="card-count d-flex">
      <button
        className="card-count-btn"
        onClick={() => addProduct(quantity + 1)}
      >
        +
      </button>
      <span className="card-count-qty">{quantity}</span>
      <button
        className="card-count-btn"
        onClick={() => removeProduct(quantity - 1)}
      >
        -
      </button>
    </div>
  );
};

export default ItemCount;
