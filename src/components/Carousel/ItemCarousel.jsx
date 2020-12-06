import image2 from "../../assets/images/slide/Mother/mother.png";
const ItemCarousel = ({ title, description, btn }) => {
  return (
    <div className="carousel-item carousel-bg-change d-block">
      <div className="carousel-container-image">
        <img src={image2} className="carousel-image" alt="Slide1" />
      </div>
      <div className="data">
        <h3 className="data-title">{title}</h3>
        <small className="data-small">{description}</small>
        <button className="data-button">{btn}</button>
      </div>
    </div>
  );
};

export default ItemCarousel;
