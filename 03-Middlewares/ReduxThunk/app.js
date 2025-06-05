// Reducer deve ser sempre uma função pura

// Exemplo para quando utilizar fetch

const initialState = {
  loading: false,
  data: null,
  error: null,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_STARTED":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { data: action.payload, loading: false, error: null };
    case "FETCH_FAILED":
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

// Sem o uso de thunk
// DOIS PROBLEMAS:
// 1. Padrão de dispatch não é conservado -> a nova função deve dispachar a ação
// 2. Deve-se sempre passar o dispatch como parâmetro da função
async function fetchUrlPure(dispatch, url) {
  try {
    dispatch({ type: "FETCH_STARTED" });
    const data = await fetch(url).then((response) => response.json());
    dispatch({ type: "FETCH_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_FAILED", payload: error });
  }
}

// Com uso do thunk
// Funciona como uma action creator
function fetchUrlThunk(url) {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_STARTED" });
      const data = await fetch(url).then((response) => response.json());
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_FAILED", payload: error });
    }
  };
}

// Middleware THUNK
// Este funcionamento é o core do que a lib ReduxThunk implementa
const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

const { applyMiddleware, compose } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = Redux.createStore(reducer, enhancer);


store.dispatch(fetchUrlThunk("https://dogsapi.origamid.dev/json/api/photo"));
