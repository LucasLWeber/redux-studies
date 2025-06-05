import { authFn, token } from "./reducers/token.js";
import { userFn, user } from "./reducers/user.js";
import { thunk, localStorage } from "./middlewares.js";

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducer = Redux.combineReducers({ token, user });
const store = Redux.createStore(reducer, enhancer);

const login = async (user) => {
  let state = store.getState();
  if (state.token.data === null) await store.dispatch(authFn(user));
  state = store.getState();
  await store.dispatch(userFn(state.token.data));
};

login({ username: "dog", password: "dog" });
