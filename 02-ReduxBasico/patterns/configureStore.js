import count from "./reducers/count.js";

const reducer = Redux.combineReducers({ count });
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
