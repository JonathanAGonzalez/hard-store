//HOOKS
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//COMPONENTES
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import ItemDetailContainerProduct from "./components/ItemDetail/ItemDetailContainerProduct";
import Error404 from "./components/Error404/Error404";
import Category from "./components/Categories/Category";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import Checkout from "./components/Checkout/Checkout";
//ESTILOS
import "./components/scss/App.scss";
//CONTEXT
import { CartContext } from "./context/CartContext";
import { SearchContext } from "./context/SearchContext";
import SearchResult from "./components/SearchResult/SearchResult";

function App() {
  const [widget, setWidget] = useState(false);
  //ESTADO DEL PRODUCTO
  const [cartProduct, setCartProduct] = useState({
    qty: 1,
    product: [],
    outStock: false,
  });
  //ESTADO DEL BUSCADOR
  const [searchResult, setSearchResult] = useState([]);

  return (
    <SearchContext.Provider value={[searchResult, setSearchResult]}>
      <CartContext.Provider value={[cartProduct, setCartProduct]}>
        <Router>
          {/* HEADER CONTIENE EL CARRITO(WIDGET) ESTA EN EL ARCHIVO CARTPERFIL */}
          <div className="container-app container-fluid">
            <div className="row">
              <div className="container-header col-12">
                <Header widget={widget} setWidget={setWidget} />
              </div>
              {/* COMPONENTE RESULTADO DEL BUSCADOR */}
              {searchResult.length !== 0 && <SearchResult />}
              {/* NAVBAR */}
              <div className="container-navbar col-12">
                <NavBar
                  home="Home"
                  categories="Categorias ^ "
                  contact="Contacto"
                  widget={widget}
                  setWidget={setWidget}
                />
              </div>
            </div>
            {/* INICIO DE ROUTING */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/detail/:id?"
                component={ItemDetailContainerProduct}
              />
              <Route path="/category/:section?" component={Category} />
              <Route path="/contact" component={Contact} />
              <Route path="/categories" component={Categories} />
              <Route path="/cart" component={Cart} />
              <Route path="/admin" exact component={Admin} />
              <Route path="/checkout" exact component={Checkout} />
              <Route path="*" component={Error404} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </CartContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
