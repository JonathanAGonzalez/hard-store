const ItemSuccess = ({ item }) => {
 
  return (
    <>
      <p>
        Producto:{" "}
        <strong className="success-name">{item.nombre}</strong>
      </p>
      <p>Cantida: {item.cantidadProducto}</p>
      <p>
        Precio unitario: <strong>${item.precio}</strong>
      </p>
      <p>
        Total del precio:{" "}
        <strong className="success-price">${item.precioTotal}</strong>{" "}
      </p>
    </>
  );
};

export default ItemSuccess;
