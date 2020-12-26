import { useParams } from "react-router-dom";
import "./ItemDetail.scss";

const ItemDetail = ({ nombre, descripcion, precio, id, imagen, info }) => {
  const ids = useParams();
  return (
    id === parseInt(ids.id) && (
      <>
        <div className="row justify-content-around align-items-center item-detail-container">
          <div className="col-12 col-md-6 col-lg-4 item-detail">
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
      </>
    )
  );
};

export default ItemDetail;
