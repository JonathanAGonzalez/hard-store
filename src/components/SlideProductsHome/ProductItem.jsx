import ItemCount from "./ItemCount";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./Scss/Product.scss";
const ProductItem = ({ image, title, characteristic, id, precio }) => {
  const onAdd = (qty) => {
    Swal.fire({
      title: "Exito!",
      text: `Agregaste al carrito ${qty} productos`,
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <div className="products-stretch col-lg-4 col-xl-3 mb-3">
      <div className="card ">
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
          <ItemCount stock={5} initial={1} onAdd={onAdd} />

          <Link to={`/detail/${id}`}>
            <button className="card-button-more"> Ver mas</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
