import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

const reducers = combineReducers({
  todo: todoReducer,
});
export const store = configureStore({ reducer: reducers });
