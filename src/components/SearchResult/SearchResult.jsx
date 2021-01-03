import { useState, useEffect } from "react";
import data from "../../data/productsNew";
const SearchResult = ({ nombre }) => {
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const inputValues = (nombre) => {
    if (!nombre.trim()) {
      return setResult([]);
    }
    setInputValue(nombre);
    resultValue();
  };

  useEffect(() => {
    setInputValue(nombre);
    resultValue();
  }, [inputValue]);

  const resultValue = () => {
    const encontrado = data.map(
      (e) => e.nombre.toLocaleLowerCase().indexOf(inputValue) !== -1 && e.nombre
    );
    setResult(encontrado);
  };

  return (
    <div>
      1s
      <ul>
        {result.map((e) => (
          <p>{e}</p>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
