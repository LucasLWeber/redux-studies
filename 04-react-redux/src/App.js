import { useSelector, useDispatch } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Estado da aplicação: {state} </h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  );
}

export default App;
