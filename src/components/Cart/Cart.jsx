import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./Cart.scss";
const Cart = () => {
  const CartItem = useContext(CartContext);
  const [cartProduct] = CartItem;
  return (
    <div>
      <div>
        <h1>CARRITO</h1>
        <p>Producto</p>
        <div className="table-responsive">
          <table className="table">
            <caption>Producto</caption>
            <thead>
              <tr>
                <th scope="col">Cantidad</th>
                <th scope="col"></th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            {cartProduct.product.map((product) => (
              <tbody>
                <tr>
                  <th scope="row">2</th>
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
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
