import React from "react";
import { Link } from "react-router-dom";
// import { MdDelete, MdEdit } from "react-icons/md";
import "./TodoItem.css";

function TodoList({ todos }) {
  return (
    <div className="todo-preview">
      {todos.map((todo) => (
        <div className="todo-preview" key={todo.id}>
          <Link className="todoText" to={`todo/${todo.id}`}>
            <h2 className="texts">{todo.title}</h2>

            <h2 className="time">{todo.status}</h2>
          </Link>
          {/* <div className="todoActions">
                <div className="icon">
                  <MdDelete />
                </div>
                <div className="icon">
                  <MdEdit />
                </div>
              </div> */}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
