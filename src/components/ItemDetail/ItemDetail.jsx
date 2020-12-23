
import React from 'react'
import Img from '../../assets/images/products/cpugamer.jpg'

const ItemDetail = ({nombre,descripcion,precio}) => {
    console.log(descripcion);
    return (
        <>
        <div className="col-3 item-detail">
            <img className="img-fluid" src={Img} alt=""/>
        </div>
        <div className="col-3">
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <ul>
                <li>{descripcion.memoria}</li>
                <li>{descripcion.gabinete}</li>
                <li>{descripcion.disco}</li>
                <li>{descripcion.procesador}</li>
                <li>{descripcion.fuente}</li>
            </ul>
            <div className="row item-characters">
                <h5>Caracteristicas del producto</h5>
            </div>
        </div>
        </>
    )
}

export default ItemDetail
