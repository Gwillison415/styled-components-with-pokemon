import * as CONST from "../constants";

const initialState = {
  selectionState: "all",
  results: [],
  savedPoke: [],
  savedPokeById: {},
  currentPokeDetails: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST.CONST.SELECT_ALL_POKE:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
        selectionState: "all",
      };
    case CONST.CONST.SELECT_SAVED_POKE:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
        selectionState: "saved",
      };
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
