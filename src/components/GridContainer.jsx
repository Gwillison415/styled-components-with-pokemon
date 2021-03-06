import React from "react";
import styled from "styled-components";
import CardContainer, { MemoizedCard } from "./Card";
import  DetailsPage from "./DetailsPage";
import { Row } from "./Row";
import { Column } from "./Column";
import { remCaculator } from "../utils/styledUtils";
import { shallowEqual, useSelector } from "react-redux";

const Container = styled.div`
  padding-right: ${remCaculator(16)};
  padding-left: ${remCaculator(16)};
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  @media (min-width: 576px) {
    max-width: ${remCaculator(540)};
  }

  @media (min-width: 768px) {
    max-width: ${remCaculator(720)};
  }

  @media (min-width: 992px) {
    max-width: ${remCaculator(9600)};
  }

  @media (min-width: 1200px) {
    max-width: ${remCaculator(1140)};
  }
`;

export default function GridContainer() {
  const navState = useSelector((state) => state.nav, shallowEqual);
  const {savedPoke, results: characterList,currentPokeDetails, selectionState } = navState;


  // console.log('allresults', allresults)
  return (
    <Container>
      {selectionState === "detail" && (
        <DetailsPage currentPokeDetails={currentPokeDetails}></DetailsPage>
      )}
      {selectionState === "all" && (
        <Row>
          {characterList.map(({ name, url }, index) => {
            return (
              <Column key={index.toString() + url} xs="12" sm="4" lg="2" xl="1">
                <CardContainer name={name} url={url}></CardContainer>
              </Column>
            );
          })}
        </Row>
      )}
      {selectionState === "saved" && (
        <Row>
          {savedPoke.map((cardProps) => {
            return (
              <Column
                key={ cardProps.id}
                xs="12"
                sm="6"
                lg="4"
                xl="2"
              >
                <MemoizedCard {...cardProps}></MemoizedCard>
              </Column>
            );
          })}
        </Row>
      )}
    </Container>
  );
}
