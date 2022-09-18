import React, { useState } from "react";
import "./TodoModal.css";
import { useHistory, Link } from "react-router-dom";

function TodoModal() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { title, status, description };

    setIsPending(true);
    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
    history.push("/");
  };

  return (
    <div className="wrapper">
      <div className="container">
        <form
          className="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h1 className="formTitle">Add Task</h1>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label htmlFor="state">
            Status
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="complete">Complete</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </label>
          <div className="buttonContainer">
            {!isPending && (
              <button className="button button--primary">Add Task</button>
            )}
            {isPending && (
              <button className=" button button--primary">Adding Task</button>
            )}
            <Link to="/" className="button button--secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
