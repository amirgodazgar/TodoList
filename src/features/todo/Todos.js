import React, { useState } from "react";
import { add, complete, edit, remove } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { buttonIcon } from "./../../assets/icons/icons";

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
    <div class="flex h-full bg-slate-200 ">
      <div class="w-1/2 mx-auto bg-slate-200 flex-col justify-center items-center overflow-y-auto">
        <h2 class="flex justify-center items-center my-3 text-lg text-gray-800">
          TODO
        </h2>
        <div class="flex justify-center items-center">
          <input
            style={{ outline: "none" }}
            class="rounded-md border-slate-600 h-8 px-1"
            type="text"
            value={text}
            onChange={textHandler}
          />
          {changeBtn ? (
            <button
              class="
              ml-2 px-4 rounded-md bg-slate-00 drop-shadow-sm border-2 border-slate-300 text-slate-400 h-8
              transition-all duration-300  hover:border-orange-600/50 hover:drop-shadow-lg hover:text-orange-600
              "
              onClick={changeHandler}
            >
              CHANGE
            </button>
          ) : (
            <button
              class="ml-2 px-4 rounded-md bg-slate-00 drop-shadow-sm border-2 border-slate-300 h-8
              transition-all duration-300  hover:border-lime-600/50 hover:drop-shadow-lg 
              "
              onClick={addTodoHandler}
            >
              {buttonIcon.add}
            </button>
          )}
        </div>

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

      <div class="w-1/2 mx-auto bg-slate-400 flex justify-center items-start overflow-y-auto">
        <h2 class="flex justify-center items-center my-3 text-lg text-gray-800">
          COMPLETE
        </h2>
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
