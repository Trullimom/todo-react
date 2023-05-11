import "./App.css";
import React, { useState } from "react";
import TodoBoard from "./components/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    if (!inputValue) {
      alert("Enter an item");
      return;
    }
    setTodoList([...todoList, inputValue]);
    setInputValue("");
  };
  const deleteItem = (id) => {
    let newList = [...todoList];
    newList.splice(id, 1);
    setTodoList([...newList]);
  };

  return (
    <div className="App">
      <input
        className="inputfield"
        value={inputValue}
        type="text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            addItem();
          }
        }}
      ></input>
      <button className="btn" onClick={addItem}>
        Add
      </button>

      <TodoBoard todoList={todoList} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
