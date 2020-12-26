import CardWidget from "./CardWidget";
import { ImArrowRight } from "react-icons/im";
import image from "../../assets/images/ddr4.jpg";
import products from "../../data/products";
import "./CartWidget.scss";

const CartWidget = ({ widget, setWidget }) => {
  return (
    <div className="container-widget">
      <div className="cointainer-widget-header">
        <h4 className="container-widget-header-h4">
          CardWidget
          <ImArrowRight
            className="container-widget-header-back"
            onClick={() => setWidget(!widget)}
          />
        </h4>
        <hr />
      </div>
      {products.map(({ id, name, description, price }) => (
        <CardWidget
          key={id}
          name={name}
          description={description}
          price={price}
          image={image}
        />
      ))}
    </div>
  );
};

export default CartWidget;
