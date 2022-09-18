import React from "react";
import TodoList from "./TodoList";
import useFetch from "./useFetch";
import "./TodoItem.css";

function TodoItem(url) {
  const {
    data: todos,
    isPending,
    error,
  } = useFetch("http://localhost:8000/todos");

  return (
    <div>
      <div>
        {error && <div>{error}</div>}
        {isPending && <div>Loading ...</div>}
        {todos && <TodoList todos={todos} />}
      </div>
    </div>
  );
}

export default TodoItem;
