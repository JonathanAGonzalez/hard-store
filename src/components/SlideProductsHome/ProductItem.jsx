import { Link } from "react-router-dom";
import "./Scss/Product.scss";
const ProductItem = ({ image, title, characteristic, id, precio }) => {
  return (
    <div className="products-stretch">
      <div className="card m-auto p-0 col-11 col-md-9 col-xl-11">
        <img className="img-fluid" alt="card foto" src={image} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h4 className="card-price">${precio}</h4>
          {
            <ol className="text-left card-list">
              {characteristic.map((element, index) => (
                <li className="card-li" key={index}>
                  {element}
                </li>
              ))}
            </ol>
          }
          <div className="row ">
            <Link to={`/detail/${id}`} className="col-12">
              <button className="card-button-more "> Ver mas</button>
            </Link>
          </div>
          <div className="row">
            <Link className="col-12">
              <button className="card-button-more ">Agregar al carrito</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
