import * as CONST from "../constants";

const initialState = {
  selectionState: "all",
  results: [],
  savedPoke: [],
  pokeByNameId: {},
  savedPokeByNameId: {},
  currentPokeDetails: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST.SELECT_ALL_POKE:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
        selectionState: "all",
      };
    case CONST.SELECT_POKE_DETAIL:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
        selectionState: "detail",
      };
    case CONST.SELECT_SAVED_POKE:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
        selectionState: "saved",
      };
    case CONST.SELECT_CURRENT_POKE:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
        currentPokeDetails: { ...action.payload },
        selectionState: "detail",
      };
    case CONST.READ_LOCAL_STORAGE:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
      };
    case CONST.READ_NEW_DATA:
      const { results } = action.response;
      console.log("results", results);
      results.forEach(({ name, url }) => {
        state.pokeByNameId[name] = { name, url };
      });
      return {
        ...state,
        ...action.response,
      };

    default:
      return state;
  }
};
