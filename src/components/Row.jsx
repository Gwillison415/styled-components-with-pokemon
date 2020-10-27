import React from "react";
import styled from "styled-components";
import { remCaculator } from "../utils/styledUtils";

export const Row = styled.div`
  display: flex;
  border: 1px solid blue;
  box-sizing: border-box;
  margin-right: ${remCaculator(-16)};
  margin-left: ${remCaculator(-16)};
  display: flex;
  flex-wrap: wrap;
`;