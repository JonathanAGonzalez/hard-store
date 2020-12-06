import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Slide from "./components/Carousel/Slide";
import ItemDetailContainer from "./components/Products/ItemDetailContainer";
import { useState } from "react";
import "./components/scss/App.scss";

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
      <div className="row justify-content-center">
        {/* SLIDE & PRODUCTS*/}
        <Slide />
        <ItemDetailContainer title='Placa de video' description='Amd radeon xr580' price='$1023'/>
        <ItemDetailContainer title='Placa de sonido' description='4 canales' price='$3023'/>
      </div>
    </div>
  );
}

export default App;
