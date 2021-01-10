const ContainerResultSearch = ({ productoEncontrado }) => {
  return (
    <ul>
      {productoEncontrado.map((e, index) => (
        <li key={index}>{e.nombre}</li>
      ))}
    </ul>
  );
};

export default ContainerResultSearch;
