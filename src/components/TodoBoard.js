import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
  return (
    <div className="todo-board">
      <h1>To do List</h1>
      <ul>
        {props.todoList.map((item, index) => {
          return (
            <li>
              <TodoItem
                key={index}
                item={item}
                index={index}
                deleteItem={props.deleteItem}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoBoard;
