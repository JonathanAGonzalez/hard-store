import { FaWindowClose } from "react-icons/fa";
import useMiles from "../../hooks/useMiles";
export const WidgetItem = ({ prod }) => {
  return (
    <>
      <div className="container-product mt-4">
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
            <p className="card-w-product-data-price">
              ${useMiles(prod.precio)}
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
