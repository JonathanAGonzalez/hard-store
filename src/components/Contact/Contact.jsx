//ESTILOS
import "./Contact.scss";
//LIBRERIA PARTICULAS
import Particles from "react-particles-js";

const Contact = () => {
  return (
    <div className="row my-5">
      <div className="container form-container-height">
        <div className="row  form-container">
          <Particles
            className="particulas"
            params={{
              particles: {
                number: {
                  value: 20,
                },
                size: {
                  value: 5,
                },
              },
            }}
          ></Particles>
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
            action="/contacto"
            method="post"
          >
            <h1 className="form-h1">Formulario de contacto</h1>
            <div className="row container-input">
              <input type="text" className="col-12 input-form" required />
              <label className="label-form">Nombre</label>
            </div>
            <div className="row mt-5 container-input">
              <input type="text" className="col-12 input-form" required />
              <label className="label-form">Email</label>
            </div>
            <div className="row form-label-container">
              <textarea
                className="form-text-area mt-3 col-11"
                cols="20"
                rows="5"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <div className="row justify-content-center">
              <button className="form-btn m-3 col-10 col-md-4" type="reset">
                Reset
              </button>
              <button className="form-btn m-3 col-10 col-md-4">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
