import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";
const Cart = () => {
  const CartItem = useContext(CartContext);
  const [cartProduct] = CartItem;
  console.log(cartProduct);
  return (
    <div>
      <div>
        <h1>CARRITO</h1>
        <div className="table-responsive">
          <table className="table">
            <caption>
              {cartProduct.product.length === 0 ? "No hay productos" : ""}
            </caption>
            <thead>
              <tr>
                <th scope="col">Eliminar</th>
                <th scope="col">Cant. Productos</th>
                <th scope="col">Descripción</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            {cartProduct.product.map((product, index) => (
              <tbody key={index}>
                <CartTable
                  key={index}
                  product={product.product}
                  cantidadProduct={product.cantidad}
                />
              </tbody>
            ))}
          </table>

          {cartProduct.product.length !== 0 && (
            <Link to="/checkout">
              <button className="cart-btn-build mb-5">Finalizar Compra</button>
            </Link>
          )}
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
