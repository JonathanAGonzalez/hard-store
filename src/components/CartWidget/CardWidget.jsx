import { FaWindowClose } from "react-icons/fa";
import { useContext, memo } from "react";
import { CartContext } from "../../context/CartContext";

const CardWidget = () => {
  const [cartProduct] = useContext(CartContext);
  console.log("render widget");
  return (
    <div className="container-product">
      {cartProduct.product.map((prod) => (
        <div className="card-w-product-data">
          <FaWindowClose className="card-w-product-ico-remove" />
          <div className="card-w-product-container-img">
            <img
              className="card-w-product-img img-fluid"
              src={prod.imagen}
              alt="FotoProducto"
            />
          </div>
          <div className="card-w-product-container-data">
            <p className="card-w-product-data-title">{prod.nombre}</p>
            <small className="card-w-product-data-small">{prod.qty}</small>
            <p className="card-w-product-data-price">${prod.precio}</p>
          </div>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default memo(CardWidget);
