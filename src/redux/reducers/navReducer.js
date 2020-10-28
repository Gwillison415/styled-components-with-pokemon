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
      return {
        ...state,
        selectionState: "all",
      };
    case CONST.ADD_POKE_TO_BAG:
      const { name } = action.payload;
      const newBag = [...state.savedPoke, action.payload];
      let newSavedPokeByNameId = state.savedPokeByNameId;
      newSavedPokeByNameId[name] = action.payload;
      return {
        ...state,
        savedPoke: [...newBag],
        savedPokeByNameId: Object.assign({}, newSavedPokeByNameId),
        selectionState: "detail",
      };
    case CONST.REMOVE_POKE_FROM_BAG:
      const removalName = action.payload.name;
      const filteredBag = state.savedPoke.filter(
        ({ name }) => name !== removalName
      );
      let nueteredSavedPokeByNameId = state.savedPokeByNameId;
      delete nueteredSavedPokeByNameId[removalName];
      return {
        ...state,
        savedPoke: filteredBag,
        savedPokeByNameId: Object.assign({}, nueteredSavedPokeByNameId),
        selectionState: "detail",
      };
    case CONST.SELECT_POKE_DETAIL:
      return {
        ...state,
        selectionState: "detail",
      };
    case CONST.SELECT_SAVED_POKE:
      return {
        ...state,
        selectionState: "saved",
      };
    case CONST.SELECT_CURRENT_POKE:
      return {
        ...state,
        currentPokeDetails: { ...action.payload },
        selectionState: "detail",
      };
    case CONST.READ_LOCAL_STORAGE:
      return {
        ...state,
      };
    case CONST.READ_NEW_DATA:
      const { results } = action.response;
      results.forEach(({ name, url }) => {
        state.pokeByNameId[name] = { name, url, bagged: false };
      });
      return {
        ...state,
        ...action.response,
      };

    default:
      return state;
  }
};
