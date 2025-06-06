import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/count";

function App() {
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Estado da aplicação: {count} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
