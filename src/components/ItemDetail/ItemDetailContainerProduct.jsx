import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import data from "../../data/productsNew";
import Loading from "../Spinner/Spinner";

const ItemDetailContainerProduct = () => {
  const [items, setItems] = useState([]);
  const ids = useParams();

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

  const getProductsFromDb = async () => {
    try {
      const result = await getProducts;
      setItems(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductsFromDb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  return items.length !== 0 ? (
    <>
      {items.map((product) => (
        <ItemDetail
          key={product.id}
          id={product.id}
          nombre={product.nombre}
          descripcion={product.description}
          precio={product.precio}
          imagen={product.imagen}
          info={product.especificaciones}
          category={product.category}
          product={product}
          ids={parseInt(ids.id)}
        />
      ))}
    </>
  ) : (
    <div className="row justify-content-center mt-5">
      <Loading />{" "}
    </div>
  );
};

export default memo(ItemDetailContainerProduct);
