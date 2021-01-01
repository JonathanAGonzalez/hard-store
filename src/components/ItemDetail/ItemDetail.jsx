import { useParams, Link, Redirect } from "react-router-dom";
import { useState } from "react";
import "./ItemDetail.scss";

const ItemDetail = ({
  nombre,
  descripcion,
  precio,
  id,
  imagen,
  info,
  category,
}) => {
  const ids = useParams();

  const [redirect, setRedirect] = useState(false);

  return (
    id === parseInt(ids.id) && (
      <>
        <div className="row justify-content-around align-items-center item-detail-container">
          <div className="col-12 col-md-6 col-lg-4 item-detail">
            <small>
              <Link to="/categories">/categoria</Link>
              <Link to={`/category/${category}`}>/{category}</Link>/
              <Link to={`/detail/${id}`}>{nombre}</Link>
            </small>

            <img className="img-fluid" src={imagen} alt="IMAGEN PRODUCTO" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h3>{nombre}</h3>
            <p className="item-detail-price">${precio}</p>
            <ul className="item-detail-ul">
              {id === parseInt(ids.id) &&
                descripcion.map((element, index) => (
                  <li className="item-detail-li" key={index}>
                    {" "}
                    {element}
                  </li>
                ))}
            </ul>
            <button className="item-detail-btn">Comprar</button>
            <button
              className="item-detail-btn mx-4"
              onClick={() => setRedirect(true)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 mt-5">
            <h5>Especificaciones:</h5>
            <ul>
              {info !== undefined &&
                info.map((element, index) => <li key={index}>{element} </li>)}
            </ul>
          </div>
        </div>
        {redirect && <Redirect to="/cart" />}
      </>
    )
  );
};

export default ItemDetail;
