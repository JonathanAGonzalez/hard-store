import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.scss";
const CartTable = ({ product, cantidadProduct }) => {
  const cartContext = useContext(CartContext);
  const [cartProduct, setCartProduct] = cartContext;

  const deleteProduct = (id) => {
    const filter = cartProduct.product.filter((prod) => prod.product.id !== id);
    setCartProduct({ ...cartProduct, product: filter });
  };
  return (
    <tr>
      <th scope="row">
        <button
          className="cart-btn-delete"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>
      </th>
      <th>{cantidadProduct}</th>
      <th>
        <img
          src={product.imagen}
          alt="Foto producto"
          className="img-fluid cart-img"
        />
      </th>
      <td>{product.nombre}</td>
      <td>${product.precio}</td>
    </tr>
  );
};

export default CartTable;
