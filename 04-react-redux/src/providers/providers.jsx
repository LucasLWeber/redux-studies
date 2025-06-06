import { Provider } from "react-redux";
import { createStore } from "redux";

export default function Providers({ children }) {
  const reducer = (state = 0, action) => {
    return action.type === "INCREMENT" ? state + 1 : state;
  };

  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return <Provider store={store}>{children}</Provider>;
}
