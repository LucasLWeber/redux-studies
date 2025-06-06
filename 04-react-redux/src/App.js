import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/count";
import { open, close } from "./store/modal";

function App() {
  const count = useSelector((state) => state.count);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h2> Estado da aplicação: {count} </h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div>
        <h2> Modal está: {modal ? "aberto" : "fechado"} </h2>
        <button onClick={() => dispatch(modal ? close() : open())}>
          {modal ? "fechar" : "abrir"}
        </button>
      </div>
    </div>
  );
}

export default App;
