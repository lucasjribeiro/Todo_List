import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  let [list, setList] = useState([]);
  let [novoitem, setNovoitem] = useState("");

  useEffect(() => {
    setList(["Tareta 1", "Tarefa 2", "Tareta 3", "Tarefa 4"]);
  }, []);

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div className="inpBut">
        <input
          type="text"
          value={novoitem}
          onChange={(item) => setNovoitem(item.target.value)}
        />
        <button className="adicionar" onClick={() => adicionarNovoItem()}>
          Adicionar
        </button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button className="deletar" onClick={() => deletarItem(index)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  function adicionarNovoItem() {
    setList([...list, novoitem]);
    setNovoitem("");
  }

  function deletarItem(index) {
    let tempArray = [...list];
    tempArray.splice(index, 1);
    setList(tempArray);
  }
}

export default App;
