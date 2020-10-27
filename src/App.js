import React from "react";
import "./App.css";
import GridContainer from "./components/GridContainer";
import HeaderControls from "./components/HeaderControls";
const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

function App() {
  var interval = {
    limit: 1050,
    offset: 0,
  };
  P.getPokemonsList(interval).then(function (response) {
    console.log(response);
  });

  return (
    <div className="App">
      <HeaderControls></HeaderControls>
      <GridContainer></GridContainer>
    </div>
  );
}

export default App;
