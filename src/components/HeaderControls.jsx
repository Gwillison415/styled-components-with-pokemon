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
const DetailPokemonButton = styled(AllPokemonButton)`
  background: ${(props) =>
    props.selectionState === "detail" ? "red" : "white"};
  color: ${(props) => (props.selectionState === "detail" ? "white" : "red")};
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 2px solid blue;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;


export default function HeaderControls() {
      const nav = useSelector((state) => state.nav, shallowEqual);
        const dispatch = useDispatch();

      const { selectionState, currentPokeDetails } = nav;
    const handleInput = (e) => {
        const {target:{value}} = e
        console.log('value',value);
    };
    return (
      <>
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
          {currentPokeDetails.hasOwnProperty("name") && (
            <DetailPokemonButton
              onClick={() => dispatch({ type: CONST.SELECT_POKE_DETAIL })}
              selectionState={selectionState}
            >
              {currentPokeDetails.name + "'s details"}
            </DetailPokemonButton>
          )}
        </div>
        <div>
          <Input onChange={handleInput} placeholder="Search Pokemon" size="1.5em" />
        </div>
      </>
    );
}
