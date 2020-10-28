import React from "react";
import { MemoizedCard } from "./Card";
import { Row } from "./Row";
import { Column } from "./Column";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as CONST from "../redux/constants";
import { axiosInstance } from "../utils/axiosInstance";
const Button = styled.button`
  color: red;
  color: ${(props) => (props.selectionState === "all" ? "white" : "red")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
  background: ${(props) => (props.selectionState === "all" ? "red" : "white")};
`;
export default function DetailsPage({ currentPokeDetails }) {
  const dispatch = useDispatch();
  const pokeDictionary = useSelector(
    (state) => state.nav.savedPokeByNameId,
    shallowEqual
  );
  let AppropriateButton = () => (
    <Button
      onClick={() =>
        dispatch({ type: CONST.ADD_POKE_TO_BAG, payload: currentPokeDetails })
      }
    >
      {" "}
      Add to Bag
    </Button>
  );
  if (pokeDictionary.hasOwnProperty(currentPokeDetails.name)) {
    AppropriateButton = () => (
      <Button
        onClick={() =>
          dispatch({
            type: CONST.REMOVE_POKE_FROM_BAG,
            payload: currentPokeDetails,
          })
        }
      >
        {" "}
        Remove from Bag
      </Button>
    );
  }
  return (
    <Row>
      <Column xs="12" sm="3" md="4" lg="5">
        <MemoizedCard {...currentPokeDetails}></MemoizedCard>
        <div> Height: {currentPokeDetails.height} </div>
        <div> Weight: {currentPokeDetails.weight} </div>
        <AppropriateButton></AppropriateButton>
      </Column>
      <Column xs="12" sm="9" md="8" lg="7"></Column>
    </Row>
  );
}
