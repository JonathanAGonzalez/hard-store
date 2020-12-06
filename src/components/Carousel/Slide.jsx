import "./Carousel.scss";
import image from "../../assets/images/slide/Mother/mother.png";
const Slide = ({ title, description, btn }) => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mt-3 col-12 col-md-4"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item carousel-bg-change ">
          <div className="carousel-container-image">
            <img src={image} className="carousel-image" alt="Slide1" />
          </div>
          <div className="data">
            <h3 className="data-title">MotherBoard AMD</h3>
            <small className="data-small">
              AMD B550 Preparada para los procesadores AMD Ryzen™ de 3.ª
              generación y posteriores.*
            </small>
            <button className="data-button">Comprar</button>
          </div>
        </div>
        <div className="carousel-item carousel-bg-change2 active ">
          <div className="carousel-container-image">
            <img src={image} className="carousel-image" alt="Slide2" />
          </div>
          <div className="data">
            <h3 className="data-title">MotherBoard INTEL</h3>
            <small className="data-small">
              AM4 INTEL Preparada para los procesadores INTEL AM4™ de 4.ª
              generación y posteriores.*
            </small>
            <button className="data-button">Comprar</button>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slide;
