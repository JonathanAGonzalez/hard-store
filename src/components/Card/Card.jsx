import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ nombre, imagen, precio, id }) => {
  return (
    <div className="Card-default col-10 col-md-2">
      <h1 className="Card-default-h1">{nombre}</h1>
      <hr />
      <div className="Card-default-imagen">
        <img className="img-fluid" src={imagen} alt="Card Imagen" />
      </div>
      <p className="Card-default-price">${precio}</p>
      <Link to={`/detail/${id}`}>
        <button className="Card-default-btn">Ver mas</button>
      </Link>
    </div>
  );
};

export default Card;
