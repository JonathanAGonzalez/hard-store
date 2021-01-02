import "./Contact.scss";
const Contact = () => {
  return (
    <div className="row">
      <div className="container">
        <div className="row justify-content-stretch form-container">
          <div className="col-5 ">
            <img
              className="form-image"
              src="/assets/images/form.jpeg"
              alt="Foto Formulario Left"
            />
          </div>
          <form className="col-5 form" action="/contacto" method="post">
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
                name=""
                cols="30"
                rows="2"
                placeholder="Mensaje"
              ></textarea>
            </div>
            <button className="form-btn mt-3">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
