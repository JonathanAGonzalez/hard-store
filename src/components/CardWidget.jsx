import { FaWindowClose } from "react-icons/fa";
import img from "../assets/images/products/ddr4.png";
const CardWidget = ({ name, description, price, image }) => {
  return (
    <>
      <div className="container-product">
        <div className="card-w-product-data">
          <FaWindowClose className="card-w-product-ico-remove" />
          <div className="card-w-product-container-img">
            <img
              className="card-w-product-img img-fluid"
              src={img}
              alt="FotoProducto"
            />
          </div>
          <div className="card-w-product-container-data">
            <p className="card-w-product-data-title">Memoria DDR4</p>
            <small className="card-w-product-data-small">16 GB</small>
            <p className="card-w-product-data-price">$1245</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CardWidget;
