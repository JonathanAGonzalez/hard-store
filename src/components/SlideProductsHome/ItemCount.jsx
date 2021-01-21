import { useState } from "react";
//LIBRERIA DE ALERTAS
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(1);
  //FUNCION PARA AGREGAR CANTIDAD
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
  //FUNCION PARA BORRAR CANTIDAD
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
    <>
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
      <div>
        <button className="card-count-btn mt-3" onClick={() => onAdd(quantity)}>
          Agregar Producto
        </button>
      </div>
    </>
  );
};

export default ItemCount;
