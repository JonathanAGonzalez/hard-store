import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import Loading from "../Spinner/Spinner";
import { firebase } from "../../firebase/index";
const Category = () => {
  const category = useParams().section;
  const [products, setProducts] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    const getData = async () => {
      const result = await db.collection("products").get();
      const data = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setProducts(data);
    };
    getData();
  }, [category]);

  const showProducts = products.filter(
    (product) => product.category === category
  );

  return products.length !== 0 ? (
    <div className="row justify-content-center category">
      {showProducts.map(
        ({ nombre, imagen, description, especificaciones, precio, id }) => (
          <Card
            key={id}
            nombre={nombre}
            imagen={imagen}
            description={description}
            precio={precio}
            id={id}
            especificaciones={especificaciones}
          />
        )
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default Category;
