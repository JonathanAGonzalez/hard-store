import ItemCount from "./ItemCount";
import "./Product.scss";
const ProductItem = ({ image, title, characteristic }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img className="img-fluid" alt="100%x280" src={image} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          {characteristic === undefined ? (
            "cargando"
          ) : (
            <ol className="text-left card-list">
              <li className="card-text">{characteristic.memoria}</li>
              <li className="card-text">{characteristic.gabinete}</li>
              <li className="card-text">{characteristic.disco}</li>
              <li className="card-text">{characteristic.procesador}</li>
              <li className="card-text">{characteristic.fuente}</li>
            </ol>
          )}
          <ItemCount stock={5} initial={1} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
