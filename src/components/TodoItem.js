import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      {props.item}
      <button
        className="btn"
        id={props.index}
        onClick={(event) => {
          event.preventDefault();
          props.deleteItem(event.target.id); // 클릭했을떄 아무거나 지워지지 않게 하려면 event.target.id 지정해준다
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
