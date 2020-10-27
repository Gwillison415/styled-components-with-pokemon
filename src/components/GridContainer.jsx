import React from "react";
import localForage from "localforage";
import styled from "styled-components";
import { MemoizedCard } from "./Card";
const remCaculator = (px) => `${px / 16}rem`;
// Function for calculating value for width
const getWidth = (value) => {
  if (!value) return;
  let width = (value / 12) * 100;
  return `width: ${width}%;`;
};

// Function for calculating value for flex
const getFlex = (value) => {
  if (!value) return;
  let flex = (value / 12) * 100;
  return `flex: 0 0 ${flex}%;`;
};

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

export const Row = styled.div`
  display: flex;
  border: 1px solid blue;
  box-sizing: border-box;
  margin-right: ${remCaculator(-16)};
  margin-left: ${remCaculator(-16)};
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  padding-right: ${remCaculator(16)};
  padding-left: ${remCaculator(16)};

  ${({ xs }) => (xs ? getFlex(xs) : "flex: 0 0 100%")};
  ${({ xs }) => (xs ? getWidth(xs) : "width: 100%")};

  @media (min-width: 576px) {
    ${({ sm }) => sm && getFlex(sm)};
    ${({ sm }) => sm && getWidth(sm)};
  }

  @media (min-width: 768px) {
    ${({ md }) => md && getFlex(md)};
    ${({ md }) => md && getWidth(md)};
  }

  @media (min-width: 992px) {
    ${({ lg }) => lg && getFlex(lg)};
    ${({ lg }) => lg && getWidth(lg)};
  }

  @media (min-width: 1200px) {
    ${({ xl }) => xl && getFlex(xl)};
    ${({ xl }) => xl && getWidth(xl)};
  }
`;
export default function GridContainer() {
  let allresults = localForage
    .getItem("pokeapi-js-wrapper-/api/v2/pokemon/?limit=1050&offset=0")
    .then((res) => console.log("res", res));
  return (
    <Container>
      <Row>
        <Col xs="12" sm="6" lg="4" xl="2">
          <MemoizedCard
            name="hypno"
            url={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
            }
          ></MemoizedCard>
        </Col>
        <Col xs="12" sm="6" lg="4" xl="2">
          2
        </Col>
        <Col xs="12" sm="6" lg="4" xl="2">
          3
        </Col>
        <Col xs="12" sm="6" lg="4" xl="2">
          4
        </Col>
        <Col xs="12" sm="6" lg="4" xl="2">
          5
        </Col>
        <Col xs="12" sm="6" lg="4" xl="2">
          6
        </Col>
      </Row>
      {/* <Row>
          <Col xs='12' sm="6" lg="4" xl="2" >
            2
          </Col>
          <Col xs='12' sm="6" lg="4" xl="2" >
            1
          </Col>
        </Row> */}
    </Container>
  );
}