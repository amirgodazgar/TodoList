import React from "react";
import { buttonIcon } from "./../../assets/icons/icons";

const Todo = ({ text, remove, id, complete, edit }) => {
  return (
    <div class="flex justify-between items-center py-2 px-2 bg-slate-300 drop-shadow-lg w-1/2 rounded my-4 m-auto">
      <p class="flex-1 text-slate-600 font-medium truncate ml-2">{text}</p>
      <div class="flex-2">
        <button
          class="rounded-full border-2 border-slate-300 w-9 h-9 mx-1
          transition-all duration-300 hover:border-lime-600/[.40]
          "
          onClick={() => complete(text, id)}
        >
          {buttonIcon.done}
        </button>
        <button
          class="rounded-full border-2 border-slate-300 w-9 h-9 mx-1
          transition-all duration-300 hover:border-orange-600/[.40]
          "
          onClick={() => edit(text, id)}
        >
          {buttonIcon.edit}
        </button>
        <button
          class="rounded-full border-2 border-slate-300 w-9 h-9 mx-1
          transition-all duration-300 hover:border-red-600/[.40]
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
