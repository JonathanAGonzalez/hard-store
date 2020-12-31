import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/productsNew";
import Card from "../Card/Card";
import Loading from "../Spinner/Spinner";
const Category = () => {
  const category = useParams().section;

  const [products, setProducts] = React.useState([]);

  const showProducts = products.filter(
    (product) => product.category === category
  );

  const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  const getProductsFromDb = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getProductsFromDb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return products.length !== 0 ? (
    <div className="row justify-content-center">
      {showProducts.map(
        ({ nombre, imagen, description, especificaciones, precio, id }) => (
          <Card
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
