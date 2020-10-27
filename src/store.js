import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

const actionLogger = (store) => (next) => (action) => {
  if (action && action.type && action.type.endsWith("FAIL")) {
    console.error("Something went wrong with this action:", action);
  }

  return next(action);
};

// Set up middleware
const enhancers = [];
const middleware = [actionLogger, thunk];

const devToolsExtension =
  process.env.NODE_ENV === "production"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: [
          "LOGIN_START",
          "LOGIN_SUCCESS",
          "LOGIN_FAIL",
          "VERIFY_SESSION_START",
          "VERIFY_SESSION_SUCCESS",
          "VERIFY_SESSION_FAIL",
        ],
        stateSanitizer: (state) =>
          state.login.token ? { ...state, login: "Restricted" } : state,
      })
    : // Enable trace in development mode (if extension is present)
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true });

if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
// const connectedReducer = connectRouter(history)(rootReducer);

// const persistConfig = { key: 'root', storage }; // NOTE: Uncomment for redux-persist
// const persistedReducer = persistReducer(persistConfig, connectedReducer); // NOTE: Uncomment for redux-persist
// export const store = createStore(persistedReducer, composedEnhancers); // NOTE: Uncomment for redux-persist
// export const persistor = persistStore(store); // NOTE: Uncomment for redux-persist

export const store = createStore(rootReducer, composedEnhancers); // NOTE: Comment out for redux-persist
