import React from 'react'
import styled from "styled-components";
import * as CONST from "../redux/constants";

import { shallowEqual, useDispatch, useSelector } from "react-redux";


const AllPokemonButton = styled.button`
  color: red;
  color: ${(props) =>
    props.selectionState === "all" ?  "white":"red" };
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
  background: ${(props) =>
    props.selectionState === "all" ? "red" : "white"};
`;

const SavedPokemonButton = styled(AllPokemonButton)`
  background: ${(props) =>
    props.selectionState === "saved" ? "red" : "white"};
  color: ${(props) => (props.selectionState === "saved" ? "white" : "red")};
`;

export default function HeaderControls() {
      const nav = useSelector((state) => state.nav, shallowEqual);
        const dispatch = useDispatch();

      const { selectionState } = nav
      console.log('nav', nav)

    return (
      <div>
        <AllPokemonButton
          onClick={() => dispatch({ type: CONST.SELECT_ALL_POKE })}
          selectionState={selectionState}
        >
          All
        </AllPokemonButton>
        <SavedPokemonButton
          onClick={() => dispatch({ type: CONST.SELECT_SAVED_POKE })}
          selectionState={selectionState}
        >
          Saved
        </SavedPokemonButton>
      </div>
    );
}
