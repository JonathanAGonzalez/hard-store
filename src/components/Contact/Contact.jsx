import React from "react";
const Contact = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="row justify-content-stretch">
          <div className="col-5">
            <img
              className="img-fluid"
              src="/assets/images/form.jpg"
              alt="Foto Formulario Left"
            />
          </div>
          <form className="col-5" action="/contacto" method="post">
            <h1>Formulario de contacto</h1>
            <div className="form-label-container">
              <label>Nombre:</label>
              <input type="text" placeholder="Ingresà tu nombre" />
            </div>
            <div className="form-label-container">
              <label>Email:</label>
              <input type="email" placeholder="Ingresà tu correo" />
            </div>
            <div className="form-label-container">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
