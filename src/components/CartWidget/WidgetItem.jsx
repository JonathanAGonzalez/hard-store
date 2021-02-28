import useMiles from "../../hooks/useMiles";
export const WidgetItem = ({ producto }) => {

  
  return (
    <>
       <div className="container-product mt-4">
        <div className="card-w-product-data">
          <div className="card-w-product-container-img">
            <img
              className="card-w-product-img img-fluid"
              src={producto.imagen}
              alt="FotoProducto"
            />
          </div>
          
          <div className="card-w-product-container-data">
            <p className="card-w-product-data-title">{producto.nombre}</p>
            <p className="card-w-product-data-price">
              ${useMiles(producto.precioTotal)}
            </p>
            <small>Cantidad: {producto.cantidadProducto}</small>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
