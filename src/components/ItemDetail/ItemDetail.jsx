import { useState, useContext, memo, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
//ICONO REACT
import { RiArrowDropRightLine } from "react-icons/ri";
//FIREBASE
import { firebase } from "../../firebase/index";
//LIBRERIA ALERTA
import Swal from "sweetalert2";
// COMPONENTE
import ItemCount from "../ItemCount/ItemCount";
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
  product,
  ids,
}) => {
  const CartItems = useContext(CartContext);
  const [cartProduct, setCartProduct] = CartItems;
  const [move, setMove] = useState(false);
  const [succes, setSucces] = useState(false);
  const [stock, setStock] = useState(0);
  const suma = precio * cartProduct.qty;

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

  const addCart = () => {
    if (product && cartProduct.qty !== 0) {
      setCartProduct({
        ...cartProduct,
        product: [
          ...cartProduct.product,
          {
            cantidad: cartProduct.qty,
            product: product,
            precioTotal: product.precio * cartProduct.qty,
          },
        ],
      });
      setSucces(true);
      setTimeout(() => {
        setSucces(false);
      }, 2500);
    } else {
      Swal.fire({
        icon: "error",
        title: "Te olvidaste de poner una cantidad",
      });
    }
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

            <p className="item-detail-price">
              ${cartProduct.qty === 0 ? precio : suma}
            </p>
            <ul className="item-detail-ul">
              {id === parseInt(ids.id) &&
                descripcion.map((element, index) => (
                  <li className="item-detail-li" key={index}>
                    {element}
                  </li>
                ))}
            </ul>
            <div className="row justify-content-around">
              <ItemCount stock={stock} initial={1} />
              <button
                className="item-detail-btn col-5"
                onClick={() => addCart()}
              >
                Agregar al carrito
              </button>
              <button
                className="item-detail-btn col-5"
                onClick={() => setMove(true)}
              >
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
        {move && <Redirect to="/checkout" />}
      </>
    )
  );
};

export default memo(ItemDetail);
