import React from "react";

import "./TodoHeader.css";

import { Link } from "react-router-dom";

function TodoHeader() {
  return (
    <div className="appHeader">
      <Link className="button button--primary" to="/add">
        Add Task
      </Link>
      <Link to="/" className="button button--primary">
        Tasks
      </Link>
    </div>
  );
}

export default TodoHeader;
