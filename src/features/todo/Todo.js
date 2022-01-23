import React from "react";

const Todo = ({ text, remove, id, complete, edit }) => {
  const btn = { border: "1px solid #ddd", margin: "0 .5rem" };

  return (
    <div class="flex justify-between items-center py-2 px-2 bg-gray-600  drop-shadow-lg w-2/3 border border-slate-400 rounded my-3 m-auto">
      <p class="flex-1 text-slate-200 font-medium truncate">{text}</p>
      <div class="flex-2">
        <button
          class="border-solid rounded-md border-2 border-lime-400 bg-gray-600 text-lime-400 px-2 pb-1 mx-1
          transition-all duration-200 hover:bg-lime-400 hover:text-gray-600 hover:border-lime-400
          "
          onClick={() => complete(text, id)}
        >
          Done
        </button>
        <button
          class="border-solid rounded-md border-2 border-orange-500 bg-gray-600 text-orange-500 px-2 pb-1 mx-1
          transition-all duration-200 hover:bg-orange-500 hover:text-gray-600 hover:border-orange-500
          "
          onClick={() => edit(text, id)}
        >
          Edit
        </button>
        <button
          class="border-solid rounded-md border-2 border-red-500 bg-gray-600 text-red-500 px-2 pb-1 mx-1
          transition-all duration-200 hover:bg-red-500 hover:text-gray-600 hover:border-red-500
          "
          onClick={() => remove(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
