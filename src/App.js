//HOOKS
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//COMPONENTES
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Slide from "./components/Carousel/Slide";
import ItemDetailContainer from "./components/Products/ItemDetailContainer";
import ProductsSlide from "./components/SlideProductsHome/ProductsSlide";
import ItemDetailContainerProduct from "./components/ItemDetail/ItemDetailContainerProduct";
//IMAGENES
import rtx2060 from "./assets/images/products/rtx2060.png";
import ddr4 from "./assets/images/products/ddr4.png";
//ESTILOS
import "./components/scss/App.scss";
import Error404 from "./components/Error404/Error404";
import Hardware from "./components/categories/Hardware";

function App() {
  const [widget, setWidget] = useState(false);

  return (
    <Router>
      {/* HEADER */}
      <div className="container-app container-fluid">
        <div className="row">
          <div className="container-header col-12">
            <Header widget={widget} setWidget={setWidget} />
          </div>
          {/* NAVBAR */}
          <div className="container-navbar col-12">
            <NavBar
              home="Home"
              offers="Ofertas"
              categories="Categorias"
              contact="Contacto"
              widget={widget}
              setWidget={setWidget}
            />
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            {/* MAIN */}
            <div className="row justify-content-center ">
              {/* SLIDE & PRODUCTS*/}
              <Slide
                slide1="Procesador Ryzen 7"
                slide2="Devastator GC-550"
                slide3="Cuotas Sin Interes!"
                slidebtn3="VER TARJETAS"
              />
              <div className="row">
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
            </div>

            {/* SLIDE PRODUCTS */}
            <ProductsSlide />
          </Route>
          <Route path="/detail/:id?">
            {/* CONTAINER DETAIL */}
            <ItemDetailContainerProduct />
          </Route>
          <Route path="/category/:section?">
            <Hardware />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
