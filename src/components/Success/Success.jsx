import "./Success.scss";
import { firebase } from "../../firebase/index";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
const Success = ({ id }) => {
  const [user, setUser] = useState("");
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
    <div className="container-success row">
      <div className="col-12">
        <h1>¡Compra Exitosa!</h1>
        <p>Tu numero de seguimiento es: {id}</p>
        <p>
          Gracias {user.user.name} {user.user.lastName}
        </p>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Success;
