import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function TodoDetails() {
  const { id } = useParams();
  const {
    data: todo,
    error,
    isPending,
  } = useFetch("http://localhost:8000/todos/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/todos/" + todo.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      {isPending && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {todo && (
        <article className="todo-details">
          <h2>{todo.title}</h2>
          <p>{todo.status}</p>
          <div>{todo.description}</div>
          <button className="todo-button" onClick={handleClick}>
            delete
          </button>
        </article>
      )}
    </div>
  );
}

export default TodoDetails;
