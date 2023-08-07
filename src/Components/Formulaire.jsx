/* eslint-disable no-unused-vars */
import { useState } from "react";
import { nanoid } from "nanoid";
import ListItem from "./ListItem";

function Formulaire() {
  const [todo, setTodo] = useState("");
  const [validation, setValidation] = useState(false);
  const [list, setList] = useState([
    {
      id: nanoid(),
      content: "item 1",
    },
    {
      id: nanoid(),
      content: "item 2",
    },
    {
      id: nanoid(),
      content: "item 3",
    },
  ]);

  function deleteToDo(id) {
    setList(list.filter((todo) => todo.id !== id));
    console.log("click on ", { id });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo === "") {
      setValidation(true);
      return
    } 
    setList([...list, { id: nanoid(), content: todo }]);
    setTodo("");
    setValidation(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="formulaire">
        <div className="entryForm">
          <label htmlFor="todo_item">Ajouter dans la liste</label>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
          />
          {validation && <h4 className="h4TodoList">Merci d'ajouter du contenu avant validation</h4>}
          <button>Ajouter</button>
        </div>
      </form>
      {list.length === 0 && (
        <h3 className="listeVide">La liste est vide pour le moment.</h3>
      )}
      {list.length > 0 &&
        list.map((item) => (
          <ListItem key={item.id} itemData={item} deleteToDo={deleteToDo} />
        ))}
    </div>
  );
}

export default Formulaire;
