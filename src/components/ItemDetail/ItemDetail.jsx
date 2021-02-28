import { useState, useContext, memo, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//ICONO REACT
import { RiArrowDropRightLine } from "react-icons/ri";
//FIREBASE
import { firebase } from "../../firebase/index";
//LIBRERIA ALERTA
import Swal from "sweetalert2";
//ESTILOS
import "./ItemDetail.scss";
import "../ItemCount/ItemCount.scss";
//CONTEXT
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  nombre,
  descripcion,
  precio,
  id,
  imagen,
  info,
  category,
  ids,
  product,
}) => {
  const CartItems = useContext(CartContext);
  const [cartProduct, setCartProduct] = CartItems;
  const [succes, setSucces] = useState(false);
  const [stock, setStock] = useState(0);
  const [count, setCount] = useState(1);
  const suma = precio * count;
  const history = useHistory();
  const actualId = id;
  const exist = cartProduct.product.some((items) => items.id === actualId);

  useEffect(() => {
    const db = firebase.firestore();

    const getStock = async () => {
      const prod = await db.collection("products").get();
      const data = prod.docs.filter(
        (e) => e.data().id === id && e.data().stock
      );
      setStock(data[0].data().stock);
    };
    getStock();
    return () => {
      setStock(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  //AGREGO PRODUCTO AL CARRITO
  const addProduct = () => {
    if (cartProduct.qty >= stock) {
      return Swal.fire({
        title: "UPS!😓",
        text: "No tenemos stock de este producto",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    if (count < stock) {
      setCount(count + 1);
    }
  };
  //SACO UN PRODUCTO DEL CARRITO
  const removeProduct = () => {
    if (count <= 1) {
      return Swal.fire({
        title: "Woow!",
        text: "Tenes que tener al menos un producto agregado",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    setCount(count - 1);
  };

  const addCart = () => {
    if (exist) {
      const productosCarrito = cartProduct.product.map((producto) => {
        if (producto.id === id) {
          producto.cantidadProducto += count;
          producto.precioTotal = producto.precio * producto.cantidadProducto;
          return producto;
        } else {
          return producto;
        }
      });
      setCartProduct({
        ...cartProduct,
        product: productosCarrito,
      });
      setSucces(true);

      setTimeout(() => {
        setSucces(false);
      }, 2000);
    } else {
      setCartProduct({
        ...cartProduct,
        product: [
          ...cartProduct.product,
          { ...product, cantidadProducto: count, precioTotal: suma },
        ],
      });
    }
  };

  const buy = () => {
    if (exist) {
      const productosCarrito = cartProduct.product.map((producto) => {
        if (producto.id === id) {
          producto.cantidadProducto += count;
          producto.precioTotal = producto.precio * producto.cantidadProducto;
          return producto;
        } else {
          return producto;
        }
      });
      setCartProduct({
        ...cartProduct,
        product: productosCarrito,
      });
      history.push("/cart");
    } else {
      setCartProduct({
        ...cartProduct,
        product: [
          ...cartProduct.product,
          { ...product, cantidadProducto: count, precioTotal: suma },
        ],
      });
    }
    history.push("/cart");
  };

  return (
    id === ids && (
      <>
        <div className="row justify-content-around align-items-center item-detail-container">
          <div className="col-12 col-md-6 col-lg-4 item-detail">
            <small>
              <Link to="/categories">Categoria </Link>
              <Link to={`/category/${category}`}>
                <RiArrowDropRightLine /> {category}
                <RiArrowDropRightLine />
              </Link>
              <Link to={`/detail/${id}`}> {nombre} </Link>
            </small>

            <img className="img-fluid" src={imagen} alt="IMAGEN PRODUCTO" />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h3>{nombre}</h3>
            {succes ? (
              <div className="alert alert-success" role="alert">
                Producto agregado
              </div>
            ) : (
              ""
            )}

            <p className="item-detail-price">${count === 1 ? precio : suma}</p>
            <ul className="item-detail-ul">
              {id === parseInt(ids.id) &&
                descripcion.map((element, index) => (
                  <li className="item-detail-li" key={index}>
                    {element}
                  </li>
                ))}
            </ul>
            <div className="row justify-content-around">
              <>
                <div className="card-count d-flex mb-5">
                  <button className="card-count-btn" onClick={removeProduct}>
                    -
                  </button>

                  <span className="card-count-qty">{count}</span>

                  <button className="card-count-btn" onClick={addProduct}>
                    +
                  </button>
                </div>
              </>

              <button className="item-detail-btn col-5" onClick={addCart}>
                Agregar al carrito
              </button>
              <button className="item-detail-btn col-5" onClick={buy}>
                Comprar
              </button>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 mt-5">
            <h5>Especificaciones:</h5>
            <p>{info}</p>
          </div>
        </div>
      </>
    )
  );
};

export default memo(ItemDetail);
