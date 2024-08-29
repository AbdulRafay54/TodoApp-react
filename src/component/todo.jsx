import { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    if (text.trim()) {
      setTodo([...todo, text]);
    }
  }

  function deleteTodo(index) {
    const newTodo = [...todo];
    newTodo.splice(index, 1); 
    setTodo(newTodo);
  }

  function editTodo(index) {
    setText(todo[index]); 
    deleteTodo(index); 
  }

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className="todo-list">
        {todo.map((item, index) => (
          <div key={index}>
            <li className="list">
              {item}
              <div className="buttons-div">
                <button
                  className="delete-btn buttons"
                  onClick={() => deleteTodo(index)}
                >
                  {" "}
                  Delete
                </button>
                <button
                  className="edit-btn buttons"
                  onClick={() => editTodo(index)}
                >
                  Edit
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Todo;
