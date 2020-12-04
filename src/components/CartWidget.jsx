import CardWidget from './CardWidget'
import "./scss/CartWidget.scss";
import { ImArrowRight } from "react-icons/im";
import image from "../assets/images/ddr4.jpg";
import { FaWindowClose } from "react-icons/fa";
import products from '../data/products';

const CartWidget = ({ widget, setWidget }) => {

  return (
    <div className="container-widget">
      <div className="cointainer-widget-header">
        <h4 className="container-widget-header-h4">
          Cart Widget{" "}
          <ImArrowRight
            className="container-widget-header-back"
            onClick={() => setWidget(!widget)}
          />
        </h4>
        <hr />
      </div>
        {
          products.map(({id,name,description,price}) =>(
              <CardWidget
              key={id}
              name={name}
              description={description}
              price={price}
              image = {image}
              />
          ))
        }
    </div>
  );
};

export default CartWidget;
