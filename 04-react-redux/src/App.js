import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/configureStore";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Estado da aplicação: {state} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
