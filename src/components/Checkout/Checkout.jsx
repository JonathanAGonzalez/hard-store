import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { firebase } from "../../firebase/index";
import "./Checkout.scss";
import Success from "../Success/Success";
const Checkout = () => {
  const [cartProduct, setCartProduct] = useContext(CartContext);
  const [access, setAccess] = useState(false);
  const [id, setId] = useState("");
  let date = new Date();
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    phone: 0,
    cardFront: "",
    cardBack: "",
    direccion: "",
    fecha: date,
    information: "",
  });
  const db = firebase.firestore();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    const sales = { user, product: cartProduct.product };
    Swal.fire({
      title: "Estas seguro que queres finalizar la compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, comprar",
    }).then((result) => {
      if (result.isConfirmed) {
        db.collection("sales")
          .add(sales)
          .then(({ id }) => {
            setId(id);
            Swal.fire(
              "Gracias por tu compra!",
              "www.hardstore.com.ar",
              "success"
            );
            setCartProduct({ qty: 0, product: [] });
            setAccess(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return access !== true ? (
    <div className="row justify-content-center">
      <div className="col-12 text-center">
        <Link to="/cart">
          <p> Volver al carrito...</p>
        </Link>
      </div>

      <form
        className="col-12 col-md-6 form"
        onSubmit={(e) => handlePurchase(e)}
      >
        <h1 className="form-h1">Checkout</h1>
        <div className="row container-input">
          <input
            type="text"
            name="name"
            className="col-12 input-form"
            required
            onChange={(e) => handleChange(e)}
          />
          <label className="label-form">Nombre</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="text"
            name="lastName"
            className="col-12 input-form"
            required
            onChange={(e) => handleChange(e)}
          />
          <label className="label-form">Apellido</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="number"
            name="phone"
            className="col-12 input-form"
            required
            onChange={(e) => handleChange(e)}
          />
          <label className="label-form">Telefono</label>
        </div>
        <div className="row mt-5 d-flex justify-content-center align-items-center">
          {user.cardFront.length < 3 && (
            <h4>
              Coloca los 16 numeros de la tarjeta y los 3 numeros de seguridad
            </h4>
          )}
        </div>
        <div className="row">
          <div
            className={
              user.cardFront.length >= 3
                ? "col-5 mt-5 check-card"
                : "col-5 mt-5 check-card-on"
            }
          >
            <img
              src="/assets/images/card/cardFront.png"
              alt="tarjeta"
              className="check-card-front"
            />
            <p className="check-card-number">{user.cardFront}</p>
            <small>{user.cardFront.length}</small>
          </div>

          <div
            className={
              user.cardBack.length >= 2
                ? "col-5 mt-5 check-card-back"
                : "col-5 mt-5 check-card-back-on"
            }
          >
            <img
              src="/assets/images/card/cardBack.png"
              alt="tarjeta"
              className="check-card-back-img"
            />
            <p className="check-card-numberback">{user.cardBack}</p>
            <small>{user.cardBack.length}</small>
          </div>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="number"
            name="cardFront"
            className="col-12 input-form"
            required
            value={user.cardFront}
            onChange={(e) =>
              e.target.value.length > 16
                ? alert("Maximo 16 numeros")
                : handleChange(e)
            }
          />
          <label className="label-form">Nº Tarjeta de credito</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="number"
            name="cardBack"
            className="col-12 input-form"
            required
            value={user.cardBack}
            onChange={(e) =>
              e.target.value.length > 3
                ? alert("Solamente 3 numeros")
                : handleChange(e)
            }
          />
          <label className="label-form">Codigo de seguridad</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="text"
            name="direccion"
            className="col-12 input-form"
            required
            onChange={(e) => handleChange(e)}
          />
          <label className="label-form">Direccion de entrega</label>
        </div>

        <div className="row form-label-container">
          <textarea
            name="information"
            className="form-text-area mt-3 col-11"
            cols="20"
            rows="5"
            placeholder="Especificaciones"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>

        <div className="row justify-content-center">
          <button className="form-btn m-3 col-10 col-md-4" type="reset">
            Reset
          </button>
          <button
            className="form-btn m-3 col-10 col-md-4"
            type="submit"
            onSubmit={(e) => handlePurchase(e)}
          >
            Comprar
          </button>
        </div>
      </form>
    </div>
  ) : (
    <Success id={id} />
  );
};

export default Checkout;
