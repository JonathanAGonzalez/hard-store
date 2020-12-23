import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Slide from "./components/Carousel/Slide";
import rtx2060 from "./assets/images/products/rtx2060.png";
import ddr4 from "./assets/images/products/ddr4.png";
import ItemDetailContainer from "./components/Products/ItemDetailContainer";
import ProductsSlide from "./components/SlideProductsHome/ProductsSlide";
import "./components/scss/App.scss";
import ItemDetailContainerProduct from "./components/ItemDetail/ItemDetailContainerProduct";

function App() {
  const [widget, setWidget] = useState(false);

  return (
    <div className="container-app container-fluid">
      {/* HEADER */}
      <div className="row">
        <div className="container-header col-12">
          <Header widget={widget} setWidget={setWidget} />
        </div>
        {/* NAVBAR */}
        <div className="container-navbar col-12">
          <NavBar
            offers="Offers"
            categories="Categories"
            contact="Contact"
            widget={widget}
            setWidget={setWidget}
          />
        </div>
      </div>
      {/* MAIN */}
      <div className="row justify-content-center ">
        {/* SLIDE & PRODUCTS*/}
        <Slide
          slide1="Procesador Ryzen 7"
          slide2="Devastator GC-550"
          slide3="Cuotas Sin Interes!"
          slidebtn3="VER TARJETAS"
        />
        <ItemDetailContainer
          title="Gigabyte RTX 2060"
          description="GeForce RTX™ 2060
          Integrated with 6GB GDDR6"
          price="$1023"
          image={rtx2060}
        />
        <ItemDetailContainer
          title="Memory DDR4"
          description="ADATA PC4-24000 XPG GAMER D50 RGB GOLD"
          price="$3023"
          image={ddr4}
        />
      </div>

      {/* SLIDE PRODUCTS */}
      <ProductsSlide />

      {/* CONTAINER DETAIL */}
      <ItemDetailContainerProduct />
    </div>
  );
}

export default App;
