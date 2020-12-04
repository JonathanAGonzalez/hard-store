import React from 'react'

import { FaWindowClose } from "react-icons/fa";
const CardWidget = ({name,description,price,id,image}) => {
    return (
      <>
        <div className="container-product">
        <div className="card-w-product-data">
          <FaWindowClose className="card-w-product-ico-remove" />
          <div className="card-w-product-container-img">
            <img
              className="card-w-product-img img-fluid"
              src={image}
              alt="Logo"
            />
          </div>
          <div className="card-w-product-container-data">
            <p className="card-w-product-data-title">{name}</p>
            <small className="card-w-product-data-small">{description}</small>
            <p className="card-w-product-data-price">${price}</p>
          </div>
        </div>
      </div>
      <hr />
      </>
    )
}

export default CardWidget
