const [USER_START, USER_SUCESS, USER_ERROR] = [
  "user/FETCH_STARTED",
  "user/FETCH_SUCCESS",
  "user/FETCH_ERROR",
];

const userInfoStart = () => ({ type: USER_START });
const userInfoSuccess = (payload) => ({ type: USER_SUCESS, payload });
const userInfoError = (payload) => ({ type: USER_ERROR, payload });

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const userFn = (token) => async (dispatch) => {
  try {
    dispatch(userInfoStart());
    const response = await fetch("https://dogsapi.origamid.dev/json/api/user", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    dispatch(userInfoSuccess(data));
  } catch (error) {
    dispatch(userInfoError(error));
  }
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_START:
      return { ...state, loading: true };
    case USER_SUCESS:
      return { data: action.payload, loading: false, error: null };
    case USER_ERROR:
      return { data: null, loading: false, error: data.payload };
    default:
      return state;
  }
};
