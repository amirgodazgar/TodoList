import React from "react";

const Todo = ({ text, remove, id, complete, edit }) => {
  const btn = { border: "1px solid #ddd", margin: "0 .5rem" };

  return (
    <div style={{ border: "1px solid #ddd", margin: ".5rem 0" }}>
      <p style={{ margin: ".5rem" }}>{text}</p>
      <button style={btn} onClick={() => complete(text, id)}>
        Done
      </button>
      <button style={btn} onClick={() => edit(text, id)}>
        Edit
      </button>
      <button style={btn} onClick={() => remove(id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
