import { useState, useContext } from "react";
import { Link } from "react-router-dom";
//IMPORTO LIBRERIA
import Swal from "sweetalert2";
//CONTEXT
import { CartContext } from "../../context/CartContext";
//FIREBASE
import { firebase } from "../../firebase/index";
//ESTILOS
import "./Checkout.scss";
//COMPONENTE
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
  //CAPTURO CAMBIOS EN EL FORMULARIO
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  //AGREGO AL DOCUMENTO SALES LA INFO DEL FORMULARIO Y EL PRODUCTO EN CUESTION

  const handlePurchase = (e) => {
    e.preventDefault();
    const sales = { user, product: cartProduct.product };

    //ALERTA DE CONFIRMACION
    Swal.fire({
      title: "¿Finalizas la compra?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#222222",
      confirmButtonColor: "#d84727",
      confirmButtonText: "Si, comprar",
    }).then((result) => {
      if (result.isConfirmed) {
        //CONFIRMA RESULTADO
        if (cartProduct.product.length !== 0) {
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
        } else {
          //CONFIRMA FALTA DE PRODUCTO
          Swal.fire({
            html: "Te falto agregar un producto",
            confirmButtonColor: "#d84727",
            icon: "warning",
            footer: '<a href="/cart"><h4>Ir al carrito...🛒<h4/></a> ',
          });
        }
      }
    });
  };

  return access !== true ? (
    <div className="row justify-content-center">
      <div className="col-12 text-center">
        <Link to="/cart">
          <p> Volver al carrito... 🛒 </p>
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
                ? "mt-5 check-card-front-on"
                : "mt-5 check-card-front-off"
            }
          >
            <img
              src="/assets/images/card/cardFront.png"
              alt="tarjeta"
              className="check-card-front-img"
            />
            <p className="check-card-front-number">{user.cardFront}</p>
          </div>

          <div
            className={
              user.cardBack.length >= 2
                ? "mt-5 check-card-back-on"
                : "mt-5 check-card-back-off"
            }
          >
            <img
              src="/assets/images/card/cardBack.png"
              alt="tarjeta"
              className="check-card-back-img"
            />
            <p className="check-card-back-number">{user.cardBack}</p>
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
