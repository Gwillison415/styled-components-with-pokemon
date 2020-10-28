import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import * as CONST from "./redux/constants";
import GridContainer from "./components/GridContainer";
import HeaderControls from "./components/HeaderControls";
import localForage from "localforage";

const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

function App() {
  const dispatch = useDispatch();

  var interval = {
    limit: 150,
    offset: 0,
  };
  P.getPokemonsList(interval).then(
    (response) => {
      dispatch({ type: CONST.READ_NEW_DATA, response });
    },
    (error) => {
      localForage
        .getItem(
          `pokeapi-js-wrapper-/api/v2/pokemon/?limit=${interval.limit}&offset=${interval.offset}`
        )
        .then((response) =>
          dispatch({ type: CONST.READ_LOCAL_STORAGE_ERROR, error, response })
        );
    }
  );

  return (
    <div className="App">
      <HeaderControls></HeaderControls>
      <GridContainer></GridContainer>
    </div>
  );
}

export default App;
