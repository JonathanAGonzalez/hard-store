import { useState, useEffect } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import ProductItem from "./ProductItem";
import cpuGamer from "../../assets/images/products/cpugamer.jpg";
import data from "../../data/products.js";
import Spinner from "../Spinner/Spinner";

const ProductsSlide = () => {
  const [items, setItems] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  const getProfuctsFromDb = async () => {
    try {
      const result = await getProducts;
      setItems(result);
    } catch (err) {
      alert("No podemos mostrar los productos en este momento");
    }
  };

  useEffect(() => {
    getProfuctsFromDb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="mb-3">Productos Destacados</h3>
          </div>
          <div className="col-6 text-right">
            <a
              className="btn btn-dark mb-3 mr-1"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="prev"
            >
              <BsArrowLeft />
            </a>
            <a
              className="btn btn-dark mb-3 "
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="next"
            >
              <BsArrowRight />
            </a>
          </div>
          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              {!items.length ? (
                <Spinner />
              ) : (
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      {items.map((product) => (
                        <ProductItem
                          key={product.id}
                          image={cpuGamer}
                          title={product.nombre}
                          characteristic={product.description}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      {items.map((product) => (
                        <ProductItem
                          key={product.id}
                          image={cpuGamer}
                          title={product.nombre}
                          characteristic={product.description}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlide;
