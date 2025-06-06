import { createSlice } from "@reduxjs/toolkit";

// Usando create action
/* export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");

export const reducer = (state = 0, action) => {
  return action.type === increment.type
    ? state + 1
    : action.type === decrement.type
    ? state - 1
    : state;
};*/

const slice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment : (state) => state + 1,
    decrement: (state) => state - 1
  },
});

export const { increment, decrement } = slice.actions;
export default slice.reducer;
