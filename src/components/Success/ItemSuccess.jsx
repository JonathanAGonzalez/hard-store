const ItemSuccess = ({ item }) => {
  return (
    <>
      <p>
        Producto:{" "}
        <strong className="success-name">{item.product.nombre}</strong>
      </p>
      <p>Cantida: {item.cantidad}</p>
      <p>
        Precio unitario: <strong>${item.product.precio}</strong>
      </p>
      <p>
        Total del precio:{" "}
        <strong className="success-price">${item.precioTotal}</strong>{" "}
      </p>
    </>
  );
};

export default ItemSuccess;
