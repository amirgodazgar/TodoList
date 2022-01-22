import React, { useState } from "react";
import { add, complete, edit, remove } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const [text, setText] = useState("");
  const [changeBtn, setChangeBtn] = useState(false);
  const [id, setId] = useState("");

  const todoList = useSelector((state) => state.todo.todos);
  const doneTodos = useSelector((state) => state.todo.complete);
  const dispatch = useDispatch();

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const addTodoHandler = () => {
    dispatch(add(text));
    setText("");
  };

  const removeTodoHandler = (id) => {
    dispatch(remove(id));
  };

  const completeHandler = (text, id) => {
    dispatch(remove(id));
    dispatch(complete(text));
  };

  const editHandler = (text, id) => {
    setChangeBtn(true);
    setText(text);
    setId(id);
  };

  const changeHandler = () => {
    setChangeBtn(false);
    dispatch(edit({ text: text, id: id }));
    setText("");
  };

  return (
    <div class="flex bg-slate-200">
      <div class="flex-1 bg-slate-300 ">
        <input type="text" value={text} onChange={textHandler} />
        {changeBtn ? (
          <button onClick={changeHandler}>change</button>
        ) : (
          <button onClick={addTodoHandler}>Add</button>
        )}

        {todoList.map((i, index) => (
          <Todo
            key={index}
            text={i.todo}
            remove={removeTodoHandler}
            complete={completeHandler}
            edit={editHandler}
            id={i.id}
          />
        ))}
      </div>

      <div class="flex-1 bg-slate-400">
        <h3>complete</h3>
        {doneTodos.map((item, index) => (
          <div key={index} style={{ color: "#258111", margin: "0 .5rem" }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
