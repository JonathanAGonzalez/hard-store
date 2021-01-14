import { Link, Redirect } from "react-router-dom";
import { useState, useContext, memo } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import Swal from "sweetalert2";
import ItemCount from "../ItemCount/ItemCount";
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

  const addCart = () => {
    if (product && cartProduct.qty !== 0) {
      setCartProduct({
        ...cartProduct,
        product: [
          ...cartProduct.product,
          { cantidad: cartProduct.qty, product: product },
        ],
      });

      setMove(true);
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
            <p className="item-detail-price">${precio}</p>
            <ul className="item-detail-ul">
              {id === parseInt(ids.id) &&
                descripcion.map((element, index) => (
                  <li className="item-detail-li" key={index}>
                    {" "}
                    {element}
                  </li>
                ))}
            </ul>
            <div className="row justify-content-around">
              <ItemCount stock={3} initial={1} />
              <button className="item-detail-btn col-5">Comprar</button>
              <button
                className="item-detail-btn col-5"
                onClick={() => addCart()}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 mt-5">
            <h5>Especificaciones:</h5>
            <ul>
              {info !== undefined &&
                info.map((element, index) => <li key={index}>{element} </li>)}
            </ul>
          </div>
        </div>
        {move && <Redirect to="/cart" />}
      </>
    )
  );
};

export default memo(ItemDetail);
