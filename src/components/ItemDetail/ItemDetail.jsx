import React from "react";
import ImgMac from "../../assets/images/products/appleretina.png";

const ItemDetail = ({ nombre, descripcion, precio }) => {
  return (
    <>
      <div className="col-3 item-detail">
        <img className="img-fluid" src={ImgMac} alt="" />
      </div>
      <div className="col-3">
        <h3>{nombre}</h3>
        <p>${precio}</p>
        <ul>
          <li>{descripcion.memoria}</li>
          <li>{descripcion.modelo}</li>
          <li>{descripcion.disco}</li>
          <li>{descripcion.procesador}</li>
        </ul>
        <button>Comprar</button>
      </div>
    </>
  );
};

export default ItemDetail;
