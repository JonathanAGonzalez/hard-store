import { useEffect, useState } from "react";
import { firebase } from "../../firebase/index";
//COMPONENTE
import { Spinner } from "react-bootstrap";
import ItemSuccess from "./ItemSuccess";
//ESTILOS
import "./Success.scss";

const Success = ({ id }) => {
  //ESTADO DEL USUARIO QUE GUARDO PARA MOSTRARLO LUEGO
  const [user, setUser] = useState("");
  //LLAMADO A FIREBASE
  useEffect(() => {
    const db = firebase.firestore();
    db.collection("sales")
      .get()
      .then((data) => {
        const user = data.docs.find((e) => e.id === id);
        setUser(user.data());
      });
  }, [id]);
  return user !== "" ? (
    <div className="success-container  row">
      <div className="success col-12 text-center">
        <h1 className="success-h1">¡Compra Exitosa!</h1>
        <p className="mt-4">
          <p className="success-p">
            Tu código de seguimiento es:
            <strong className="success-strong">{id}</strong>
          </p>
        </p>
        <p className="mt-4">
          <strong className="success-strong">
            ¡Gracias por tu compra {user.user.name} {user.user.lastName}!
          </strong>{" "}
        </p>
      </div>
      <div className="row">
        <div className="success-detail col-12 text-center">
          <h3>Detalle de tu compra:</h3>
          {user.product.map((e, index) => (
            <ItemSuccess key={index} item={e} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Success;
