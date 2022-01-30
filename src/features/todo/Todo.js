import React from "react";
import { buttonIcon } from "./../../assets/icons/icons";

const Todo = ({ text, remove, id, complete, edit }) => {
  return (
    <div
      class="flex justify-between items-center py-2 px-2 bg-slate-300 drop-shadow-lg rounded my-4 m-auto w-5/6 sm:w-3/6 md:w-3/6 lg:w-1/2
    dark:bg-slate-800
    "
    >
      <p
        class="flex-1 text-slate-600 truncate tracking-wider font-medium font-['Sedgwick_Ave'] ml-2 
       dark:text-slate-200
      "
      >
        {text}
      </p>
      <div class="flex-2">
        <button
          class="rounded-full border-2 border-slate-300 w-9 h-9 mx-1
          transition-all duration-300 hover:border-lime-600/[.40]
          dark:border-slate-800 dark:hover:border-lime-600/[.40]
          "
          onClick={() => complete(text, id)}
        >
          {buttonIcon.done}
        </button>
        <button
          class="rounded-full border-2 border-slate-300 w-9 h-9 mx-1
          transition-all duration-300 hover:border-orange-600/[.40]
          dark:border-slate-800 dark:hover:border-orange-600/[.40]
          "
          onClick={() => edit(text, id)}
        >
          {buttonIcon.edit}
        </button>
        <button
          class="rounded-full border-2 border-slate-300 w-9 h-9 mx-1
          transition-all duration-300 hover:border-red-600/[.40]
          dark:border-slate-800 dark:hover:border-red-600/[.40]
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
