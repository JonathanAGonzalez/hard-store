import { Link } from "react-router-dom";
import "./Carousel.scss";
import image from "../../assets/images/slide/1.jpg";
import image2 from "../../assets/images/slide/2.jpg";
import image3 from "../../assets/images/slide/3.jpg";

const Slide = ({ slide1, slide2, slide3, slidebtn3 }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide mt-3 col-12 col-md-12 col-lg-8 col-xl-6"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={image} alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>{slide1}</h5>
            <Link to={`/detail/5`}>
              <button className="carousel-btn">VER PRODUCTO</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <div className="carousel-caption  d-none d-md-block">
            <h5>{slide2}</h5>
            <Link to={`/detail/6`}>
              <button className="carousel-btn">VER PRODUCTO</button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>{slide3}</h5>
            <button className="carousel-btn">{slidebtn3}</button>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
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
