import { useState, useEffect, memo } from "react";
//ESTILOS
import "./Scss/Product.scss";
import "./Scss/new.scss";
//COMPONENTES
import ProductItem from "./ProductItem";
import Spinner from "../Spinner/Spinner";
import Carousel from "react-elastic-carousel";
//FIREBASE
import { firebase } from "../../firebase/index";

const ProductsSlide = () => {
  const [items, setItems] = useState([]);
  //LLAMADOS A LOS PRODUCTOS
  useEffect(() => {
    const db = firebase.firestore();
    const getData = async () => {
      const result = await db.collection("products").get();
      const data = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    };
    getData();
  }, []);
  //SETEO DE SLIDE
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 5 },
  ];

  return items.length !== 0 ? (
    <div className="product-slide-container">
      <h3 className="product-slide-h3">Productos Nuevos</h3>
      <Carousel
        initialActiveIndex={0}
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
        breakPoints={breakPoints}
        autoTabIndexVisibleItems={true}
      >
        {items.map((product) => (
          <ProductItem
            key={product.id}
            image={product.imagen}
            title={product.nombre}
            characteristic={product.description}
            id={product.id}
            precio={product.precio}
          />
        ))}
      </Carousel>
      <div className="container-product">
        <div className="product-home"></div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default memo(ProductsSlide);
