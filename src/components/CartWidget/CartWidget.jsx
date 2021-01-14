import CardWidget from "./CardWidget";
import { ImArrowRight } from "react-icons/im";
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
        <hr />
        <CardWidget />
      </div>
    </div>
  );
};

export default memo(CartWidget);
