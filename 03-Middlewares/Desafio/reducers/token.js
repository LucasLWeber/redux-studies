import { AUTH_TOKEN, SET_TOKEN, getLocalStorageItem } from "../utils.js";

const [TOKEN_START, TOKEN_SUCESS, TOKEN_ERROR] = [
  "token/FETCH_STARTED",
  "token/FETCH_SUCCESS",
  "token/FETCH_ERROR",
];

const authStart = () => ({ type: TOKEN_START });
const authSuccess = (payload) => ({
  type: TOKEN_SUCESS,
  payload,
  meta: SET_TOKEN,
});
const authError = (payload) => ({ type: TOKEN_ERROR, payload });

const initialState = {
  data: getLocalStorageItem(AUTH_TOKEN),
  loading: false,
  error: null,
};

export const authFn = (body) => async (dispatch) => {
  try {
    dispatch(authStart());
    const response = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const { token } = await response.json();
    dispatch(authSuccess(token));
  } catch (error) {
    dispatch(authError(error));
  }
};

export const token = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_START:
      return { ...state, loading: true };
    case TOKEN_SUCESS:
      return { data: action.payload, loading: false, error: null };
    case TOKEN_ERROR:
      return { data: null, loading: false, error: data.payload };
    default:
      return state;
  }
};
