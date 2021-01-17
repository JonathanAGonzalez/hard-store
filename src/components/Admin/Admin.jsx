import { useState } from "react";
import { firebase } from "../../firebase/index";
import categories from "../../data/categories";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
const Admin = () => {
  const [valueInput, setValueInput] = useState({});
  const db = firebase.firestore();
  const history = useHistory();

  function getValueInput(e) {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value });
  }

  const addProd = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Seguro que quieres agregar este producto?",
      text: "No podras volver atras.!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, agregar producto!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Listo!", "Producto agregado.", "success");
        setTimeout(() => {
          history.push("/");
        }, 2000);
      }
    });
    db.collection("products").add(valueInput);
  };

  return (
    <div className="row justify-content-center">
      <form className="col-12 col-md-6 form">
        <h1 className="form-h1">Formulario Carga de productos</h1>
        <div className="row container-input">
          <input
            type="text"
            name="nombre"
            className="col-12 input-form"
            required
            onChange={(e) => getValueInput(e)}
          />
          <label className="label-form">Nombre del producto</label>
        </div>
        <div className="row mt-5 container-input">
          <select
            className="col-12 input-form"
            name="category"
            id=""
            onChange={(e) => getValueInput(e)}
          >
            <option>Elegir categoria...</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.nombre}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="text"
            name="marca"
            className="col-12 input-form"
            required
            onChange={(e) => getValueInput(e)}
          />
          <label className="label-form">Marca</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="text"
            name="model"
            className="col-12 input-form"
            required
            onChange={(e) => getValueInput(e)}
          />
          <label className="label-form">Modelo</label>
        </div>
        <div className="row mt-5 container-input">
          <input
            type="number"
            name="precio"
            className="col-12 input-form"
            required
            onChange={(e) => getValueInput(e)}
          />
          <label className="label-form">Precio</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="number"
            name="stock"
            className="col-12 input-form"
            required
            onChange={(e) => getValueInput(e)}
          />
          <label className="label-form">Stock</label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="file"
            name="imagen"
            className="col-12 input-form"
            required
            onChange={(e) => getValueInput(e)}
          />
          <label className="label-form" style={{ top: "-18px" }}>
            Imagen del producto
          </label>
        </div>

        <div className="row mt-5 container-input">
          <input
            type="date"
            name="date"
            className="col-12 input-form"
            required
            onChange={(e) => getValueInput(e)}
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
            onChange={(e) => getValueInput(e)}
          ></textarea>
        </div>

        <div className="row justify-content-center">
          <button className="form-btn m-3 col-10 col-md-4" type="reset">
            Reset
          </button>
          <button
            className="form-btn m-3 col-10 col-md-4"
            type="submit"
            onClick={addProd}
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
