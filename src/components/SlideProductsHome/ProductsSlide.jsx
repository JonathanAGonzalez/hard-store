import { useState, useEffect, memo } from "react";
import ProductItem from "./ProductItem";
import Spinner from "../Spinner/Spinner";
import "./Scss/Product.scss";
import "./Scss/new.scss";
import Carousel from "react-elastic-carousel";
import { firebase } from "../../firebase/index";

const ProductsSlide = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const getData = async () => {
      const result = await db.collection("products").get();
      const data = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      setItems(data);
    };
    getData();
  }, []);

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
        easing="cubic-bezier(1,.15,.55,1.54)"
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
