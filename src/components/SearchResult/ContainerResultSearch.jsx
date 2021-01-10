import { Link } from "react-router-dom";
const ContainerResultSearch = ({
  productoEncontrado,
  setProductoEncontrado,
}) => {
  return (
    <ul>
      {productoEncontrado.map((e, index) => (
        <li key={index}>
          <Link
            onClick={() => setProductoEncontrado([])}
            to={`/detail/${e.id}`}
          >
            {e.nombre}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ContainerResultSearch;
