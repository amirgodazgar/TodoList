import React from "react";
import { buttonIcon } from "./../../assets/icons/icons";

const Todo = ({ text, remove, id, complete, edit }) => {
  return (
    <div class="flex justify-between items-center py-2 px-2 bg-slate-300 drop-shadow-lg w-2/3 rounded my-3 m-auto">
      <p class="flex-1 text-slate-600 font-medium truncate">{text}</p>
      <div class="flex-2">
        <button
          class=" rounded-md px-2 pb-1 mx-1 w-10 h-8
          transition-all duration-200 
          "
          onClick={() => complete(text, id)}
        >
          {buttonIcon.done}
        </button>
        <button
          class=" rounded-lg px-2 pb-1 mx-1 shadow-slate-300 w-10 h-8 justify-center items-center
          transition-all duration-200 
          "
          onClick={() => edit(text, id)}
        >
          {buttonIcon.edit}
        </button>
        <button
          class=" rounded-md px-2 pb-1 mx-1 w-10 h-8
          transition-all duration-200
          "
          onClick={() => remove(id)}
        >
          {buttonIcon.remove}
        </button>
      </div>
    </div>
  );
};

export default Todo;
