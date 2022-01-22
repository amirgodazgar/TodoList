import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    complete: [],
  },
  reducers: {
    add: (state, action) => {
      let id = nanoid();

      return {
        todos: state.todos.concat({
          todo: action.payload,
          id,
        }),
        complete: state.complete,
      };
    },
    remove: (state, action) => {
      return {
        todos: state.todos.filter((item) => item.id !== action.payload),
        complete: state.complete,
      };
    },
    complete: (state, action) => {
      return {
        todos: state.todos,
        complete: state.complete.concat(action.payload),
      };
    },
    edit: (state, action) => {
      return {
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              ...{
                id: item.id,
                todo: action.payload.text,
              },
            };
          } else {
            return item;
          }
        }),
        complete: state.complete,
      };
    },
  },
});

export const { add, remove, edit, complete } = todoSlice.actions;
export default todoSlice.reducer;
