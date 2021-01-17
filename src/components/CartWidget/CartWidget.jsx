import CardWidget from "./CardWidget";
import { ImArrowRight } from "react-icons/im";
import { Link } from "react-router-dom";
import { memo } from "react";
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
        <small>
          <Link to="/cart" onClick={() => setWidget(false)}>
            Ir al carrito ->
          </Link>
        </small>
        <hr />
        <CardWidget />
      </div>
    </div>
  );
};

export default memo(CartWidget);
