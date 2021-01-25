//ESTILOS
import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const valueInput = {
    name: "",
    email: "",
    message: "",
  };
  const [send, setSend] = useState(false);
  const [inputValue, setInputValue] = useState(valueInput);

  function submitForm(e) {
    e.preventDefault();
    const { name, email, message } = inputValue;
    if (name !== "" || email !== "" || message !== "") {
      setSend(true);
      setInputValue({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => {
        setSend(false);
      }, 2300);
    }
  }
  function getInputValue(e) {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  }
  return (
    <div className="row my-5">
      <div className="container form-container-height">
        <div className="row  form-container">
          <div className="col-12 col-md-6 form-image d-flex justify-content-center align-items-center">
            <h3 className="form-title-logo">
              Hard<span className="form-title-logo-span">Store</span>
            </h3>
            <h3 className="form-title-thx">
              Gracias
              <span className="form-title-thx-span"> por tu consulta</span>
            </h3>
          </div>
          <form
            className="col-12 col-md-6 form"
            onSubmit={(e) => submitForm(e)}
          >
            {send && (
              <div className="alert alert-success" role="alert">
                Tu mensaje fue enviado correctamente...
              </div>
            )}

            <h1 className="form-h1">Formulario de contacto</h1>
            <div className="row container-input">
              <input
                type="text"
                className="col-12 input-form"
                name="name"
                required
                value={inputValue.name}
                onChange={(e) => getInputValue(e)}
              />
              <label className="label-form">Nombre</label>
            </div>
            <div className="row mt-5 container-input">
              <input
                type="email"
                className="col-12 input-form"
                name="email"
                value={inputValue.email}
                required
                onChange={(e) => getInputValue(e)}
              />
              <label className="label-form">Email</label>
            </div>
            <div className="row form-label-container">
              <textarea
                className="form-text-area mt-3 col-11"
                cols="20"
                rows="5"
                placeholder="Mensaje"
                name="message"
                value={inputValue.message}
                onChange={(e) => getInputValue(e)}
              ></textarea>
            </div>
            <div className="row justify-content-center">
              <button className="form-btn m-3 col-10 col-md-4" type="reset">
                Reset
              </button>
              <button
                className="form-btn m-3 col-10 col-md-4"
                type="submit"
                onSubmit={(e) => submitForm(e)}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
