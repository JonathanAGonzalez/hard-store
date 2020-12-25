import React from "react";
import ItemDetail from "./ItemDetail";
import data from "../../data/productItem";
const ItemDetailContainerProduct = () => {
  const [items, setItems] = React.useState([]);
  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  const getProductsFromDb = async () => {
    try {
      const result = await getProducts;
      setItems(result);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getProductsFromDb();
  }, []);

  console.log(items);
  return (
    <div className="row justify-content-center item-detail-container">
      {items.map((product) => (
        <ItemDetail
          key={product.id}
          id={product.id}
          nombre={product.nombre}
          descripcion={product.description}
          precio={product.precio}
        />
      ))}
    </div>
  );
};

export default ItemDetailContainerProduct;
