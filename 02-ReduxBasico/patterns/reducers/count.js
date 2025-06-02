const [INCREMENT, DECREMENT] = ["count/INCREMENT", "count/DECREMENT"];

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

const initialState = 0;

const reducer = immer.produce((draft, action) => {
  return action.type === INCREMENT
    ? draft + 1
    : action.type === DECREMENT
    ? draft - 1
    : draft;
}, initialState);

export default reducer;