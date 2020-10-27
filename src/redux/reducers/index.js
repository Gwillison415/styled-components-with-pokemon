import { combineReducers } from "redux";
import navReducer from "./navReducer";

import * as CONST from "../constants";

const appReducer = combineReducers({
  nav: navReducer,
});
const rootReducer = (state, action) => {
  if (action.type === CONST.USER_LOGOUT) {
    /*
     * IDEA: SETTING STATE TO UNDEFINED BEFORE PASSING IT TO appReducer EMPOWERS
     * EACH REDUCER TO SET ITS OWN INITAL VALUE FOR STATE WHEN THIS OCCURS, VIA LINES LIKE:
     * `export default (state = initialLoginState, action) => { ...`
     * state = undefined;
     */
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
