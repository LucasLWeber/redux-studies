import { configureStore, createAction } from "@reduxjs/toolkit";

// Usando create action
export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");

const reducer = (state = 0, action) => {
  return action.type === increment.type
    ? state + 1
    : action.type === decrement.type
    ? state - 1
    : state;
};

const store = configureStore({ reducer });

export default store;
