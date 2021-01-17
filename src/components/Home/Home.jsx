import Slide from "../Carousel/Slide";
import ItemDetailContainer from "../Products/ItemDetailContainer";
import ProductsSlide from "../SlideProductsHome/ProductsSlide";
//IMAGENES
import rtx2060 from "../../assets/images/products/rtx-2060.png";
import ddr4 from "../../assets/images/products/ddr4.png";
const Home = () => {
  return (
    <>
      {/* MAIN */}
      <div className="row justify-content-center ">
        {/* SLIDE & PRODUCTS*/}
        <Slide
          slide1="Procesador Ryzen 7"
          slide2="Devastator GC-550"
          slide3="Cuotas Sin Interes!"
          slidebtn3="VER TARJETAS"
        />
        <div className="row justify-content-center" style={{ margin: "0" }}>
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
    </>
  );
};

export default Home;
