import * as CONST from "../constants";

export const signUp = ({ isValidForm, ...restOfInput }) => {
  return (dispatch) => {
    dispatch({ type: CONST.SIGN_UP_START });

    if (isValidForm) {
      dispatch({
        type: CONST.SIGN_UP_SUCCESS,
        payload: restOfInput,
      });
    } else {
      dispatch({
        type: CONST.SIGN_UP_FAIL,
        payload: "error",
      });
    }
  };
};
