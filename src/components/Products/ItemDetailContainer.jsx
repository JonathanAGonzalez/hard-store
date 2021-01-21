//ESTILOS
import "./ItemDetailContainer.scss";
const ItemDetailContainer = ({ title, description, image }) => {
  return (
    <div className="card bg-dark text-white m-3 d-none d-md-block col-10 col-md-5 col-lg-5">
      <img className="card-img my-4" src={image} alt="Imagen Card" />
      <div className="card-container-data">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="card-btn mb-3">Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
