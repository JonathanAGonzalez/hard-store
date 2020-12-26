import ItemCount from "./ItemCount";
import Swal from "sweetalert2";
import { Link} from 'react-router-dom';
import "./Scss/Product.scss";
const ProductItem = ({ image, title, characteristic }) => {
  const onAdd = (qty) => {
    Swal.fire({
      title: "Exito!",
      text: `Agregaste al carrito ${qty} productos`,
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

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
          <ItemCount stock={5} initial={1} onAdd={onAdd} />

          <Link to="/detail" ><button className="card-button-more"> Ver mas</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
