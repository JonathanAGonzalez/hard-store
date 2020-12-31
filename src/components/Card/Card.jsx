import "./Card.scss";
const Card = ({ nombre, imagen, precio }) => {
  return (
    <div className="Card-default col-10 col-lg-2">
      <h1 className="Card-default-h1">{nombre}</h1>
      <hr />
      <div className="Card-default-imagen">
        <img className="img-fluid" src={imagen} alt="Card Imagen" />
      </div>
      <p className="Card-default-price">${precio}</p>
      <button className="Card-default-btn">Ver mas</button>
    </div>
  );
};

export default Card;
