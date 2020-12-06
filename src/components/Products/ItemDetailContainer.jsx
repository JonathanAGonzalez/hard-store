import "./ItemDetailContainer.scss";
const ItemDetailContainer = ({ title, description, price }) => {
  return (
    <div className=" mt-3 mx-4 col-md-3 product-slide-container">
      <h2 className="product-slide-title">{title}</h2>
      <small className="product-slide-description">{description}</small>
      <p className="product-slide-price">{price}</p>
    </div>
  );
};

export default ItemDetailContainer;
