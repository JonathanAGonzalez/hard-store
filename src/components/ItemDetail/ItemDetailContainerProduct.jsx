import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "../Spinner/Spinner";
import { firebase } from "../../firebase/index";

const ItemDetailContainerProduct = () => {
  const [items, setItems] = useState([]);
  const [result, setResult] = useState(true);
  const ids = useParams();

  useEffect(() => {
    if (result) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const getData = async () => {
        const db = firebase.firestore();

        const dat = await db
          .collection("products")
          .where("id", "==", parseInt(ids.id))
          .get();
        const data = dat.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(data);
      };
      getData();
    }
    return () => {
      setResult(false);
    };
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
