import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./Checkout.scss";
const Checkout = () => {
  const [card, setCard] = useState("");
  const [cardBack, setCardBack] = useState("");
  const [cartProduct, setCartProduct] = useContext(CartContext);
  console.log(cartProduct);

  const handleCard = (e) => {
    const num = e.target.value;
    if (num.length <= 16) {
      setCard(e.target.value);
    } else {
      alert("Maximo 16 numeros de tarjeta");
      setCard("");
    }
  };

  const handleCardBack = (e) => {
    const num = e.target.value;
    if (num.length > 3) {
      alert("El codigo de seguridad solo tiene 3 caracteres");
      setCardBack("");
    } else {
      setCardBack(num);
    }
  };

  const handlePurchase = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Estas seguro que queres finalizar la compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, comprar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Gracias por tu compra!", "www.hardstore.com.ar", "success");
      }
    });
  };

  return (
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
          />
          <label className="label-form">Nombre</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="text"
            name="last-name"
            className="col-12 input-form"
            required
          />
          <label className="label-form">Apellido</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="number"
            name="phone"
            className="col-12 input-form"
            required
          />
          <label className="label-form">Telefono</label>
        </div>
        <div className="row mt-5 d-flex justify-content-center align-items-center">
          {card.length < 3 && (
            <h4>
              Coloca los 16 numeros de la tarjeta y los 3 numeros de seguridad
            </h4>
          )}
        </div>
        <div className="row">
          <div
            className={
              card.length >= 3
                ? "col-5 mt-5 check-card"
                : "col-5 mt-5 check-card-on"
            }
          >
            <img
              src="/assets/images/card/cardFront.png"
              alt="tarjeta"
              className="check-card-front"
            />
            <p className="check-card-number">{card}</p>
            <small>{card.length}</small>
          </div>

          <div
            className={
              cardBack.length >= 2
                ? "col-5 mt-5 check-card-back"
                : "col-5 mt-5 check-card-back-on"
            }
          >
            <img
              src="/assets/images/card/cardBack.png"
              alt="tarjeta"
              className="check-card-back-img"
            />
            <p className="check-card-numberback">{cardBack}</p>
            <small>{cardBack.length}</small>
          </div>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="number"
            name="credit"
            className="col-12 input-form"
            required
            value={card}
            onChange={(e) => handleCard(e)}
          />
          <label className="label-form">Nº Tarjeta de credito</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="number"
            name="cod"
            className="col-12 input-form"
            required
            value={cardBack}
            onChange={(e) => handleCardBack(e)}
          />
          <label className="label-form">Codigo de seguridad</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="text"
            name="direction"
            className="col-12 input-form"
            required
          />
          <label className="label-form">Direccion de entrega</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="date"
            name="date"
            className="col-12 input-form"
            required
          />
          <label className="label-form" style={{ top: "-8px" }}>
            Fecha
          </label>
        </div>
        <div className="row form-label-container">
          <textarea
            name="especificacion"
            className="form-text-area mt-3 col-11"
            cols="20"
            rows="5"
            placeholder="Especificaciones"
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
  );
};

export default Checkout;
