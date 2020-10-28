import * as CONST from "../constants";

const initialState = {
  selectionState: "all",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST.READ_LOCAL_STORAGE:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
      };
    case CONST.READ_NEW_DATA:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
        ...action.response,
      };

    default:
      return state;
  }
};
