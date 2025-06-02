const [TIME_INCREMENT, TIME_DECREMENT, EMAIL_MODIFY] = [
  "aluno/INCREMENTAR_TEMPO",
  "aluno/DECREMENTAR_TEMPO",
  "aluno/MODIFICAR_EMAIL(email)",
];

export const timeIncrement = () => ({ type: TIME_INCREMENT });
export const timeDecrement = () => ({ type: TIME_DECREMENT });
export const emailModify = (payload) => ({ type: EMAIL_MODIFY, payload });

const initialState = {
  name: "Lucas Weber",
  email: "lucasweber321@gmail.com",
  remainingDays: 120,
};

const studentReducer = immer.produce((draft, action) => {
  switch (action.type) {
    case TIME_INCREMENT:
      draft.remainingDays += 1;
      break;
    case TIME_DECREMENT:
      draft.remainingDays -= 1;
      break;
    case EMAIL_MODIFY:
      draft.email = action.payload;
      break;
    default:
      draft;
  }
}, initialState);

export default studentReducer;
