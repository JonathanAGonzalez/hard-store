import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import CartTable from "./CartTable";
import "./Cart.scss";
import CartTotal from "./CartTotal";
const Cart = () => {
  const CartItem = useContext(CartContext);
  const [cartProduct] = CartItem;
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
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
