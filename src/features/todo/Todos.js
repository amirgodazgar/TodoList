import React, { useState } from "react";
import { add, complete, edit, remove } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { buttonIcon } from "./../../assets/icons/icons";

const Todos = ({ light, dark }) => {
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
    <div class="lg:flex sm:w-full h-full bg-slate-200 dark:bg-slate-700">
      <div
        class="w-full lg:w-1/2 mb-5 pt-10 lg:mb-0 mx-auto bg-slate-200 flex-col justify-center items-center overflow-y-auto 
      dark:bg-slate-700
      "
      >
        <div class="flex justify-end items-center mr-3">
          <span
            onClick={dark}
            class="rounded-full border-2 border-slate-900 p-1 cursor-pointer"
          >
            {buttonIcon.dark}
          </span>
        </div>
        <h2
          class="flex justify-center items-center my-3 text-2xl font-semibold font-['Sedgwick_Ave'] text-gray-800
          dark:text-slate-200
          "
        >
          My TodoList
        </h2>
        <div class="flex justify-center items-center w-full sm:w-3/5 md:w-3/5 lg:w-3/5 mx-auto mb-7">
          <input
            style={{ outline: "none" }}
            class="rounded-md font-['Sedgwick_Ave'] border-slate-600 h-8 w-2/3 px-1 dark:bg-slate-300"
            type="text"
            value={text}
            onChange={textHandler}
          />
          {changeBtn ? (
            <button
              class="
              ml-2 rounded-md bg-slate-200 drop-shadow-sm border-2 border-slate-400 text-slate-400 h-8 w-1/4
              transition-all duration-300  hover:border-orange-600/50 hover:drop-shadow-lg hover:text-orange-600
              dark:bg-slate-800 dark:border-slate-400 dark:text-slate-400 dark:hover:border-orange-600/50 dark:hover:text-orange-600
              "
              onClick={changeHandler}
            >
              CHANGE
            </button>
          ) : (
            <button
              class="ml-2 rounded-md bg-slate-00 drop-shadow-sm border-2 border-slate-300 h-8 w-1/6
              transition-all duration-300  hover:border-lime-600/50 hover:drop-shadow-lg 
              dark:bg-slate-800 dark:border-lime-600/50 dark:hover:border-lime-700
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

      <div
        class="sm:w-full lg:w-1/2 mx-auto pt-10 pb-5 bg-slate-300 flex-col justify-center items-start overflow-y-auto
        dark:bg-slate-800
        "
      >
        <div class="flex justify-start items-center ml-3">
          <span
            onClick={light}
            class="rounded-full border-2 border-slate-400 p-1 cursor-pointer"
          >
            {buttonIcon.light}
          </span>
        </div>
        <h2
          class="flex justify-center items-center my-3 text-2xl font-semibold font-['Sedgwick_Ave'] text-gray-800
          dark:text-slate-200
          "
        >
          COMPLETE
        </h2>
        {doneTodos.map((item, index) => (
          <div
            key={index}
            class="flex justify-center items-center truncate tracking-wider font-medium font-['Sedgwick_Ave'] bg-slate-200 text-lime-600 rounded 
            w-5/6 sm:w-3/5 md:w-3/6 mx-auto my-3 p-1 drop-shadow-sm
            dark:bg-slate-900
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
