const localStorage = (store) => (next) => (action) => {
  if (action.type === "SET_TOKEN") {
		console.log(action);
    window.localStorage.setItem("token", JSON.stringify(action.payload));
  }
  return next(action);
};

const jwtExample =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch {
    return initial;
  }
}

const initialState = {
  token: getLocalStorage("token", null),
};

function reducer(state = initialState, action) {
  return action.type === "SET_TOKEN" ? { token: action.payload } : state;
}

const { applyMiddleware, compose, createStore } = Redux;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancer(applyMiddleware(localStorage));
const store = createStore(reducer, enhancer);

store.dispatch({ type: "SET_TOKEN", payload: jwtExample });
