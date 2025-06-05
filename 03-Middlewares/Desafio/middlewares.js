import { SET_TOKEN, AUTH_TOKEN } from "./utils.js";

export const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    return next(action);
  };

export const localStorage = (store) => (next) => (action) => {
  const res = next(action);
  if (action.meta === SET_TOKEN) {
    window.localStorage.setItem(AUTH_TOKEN, JSON.stringify(action.payload));
  }
  return res;
};
