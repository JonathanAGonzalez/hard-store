import CardWidget from "./CardWidget";
import { ImArrowRight } from "react-icons/im";
import image from "../../assets/images/ddr4.jpg";
import productsNew from "../../data/productsNew";
import "./CartWidget.scss";

const CartWidget = ({ widget, setWidget, active }) => {
  return (
    <div
      className={
        widget ? `container-widget ${active}` : `container-widget hide`
      }
    >
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
      {productsNew.map(({ id, name, description, price }) => (
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
