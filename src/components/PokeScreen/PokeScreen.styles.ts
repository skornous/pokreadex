import styled from "styled-components";
import { cssVariable } from "themthem";
import { Panel } from "../Panel/Panel.styles";

export const ScreenContainer = styled(Panel)`
  border-width: 7px 5px;
  border-radius: 4px;
  background: ${cssVariable("global", "colors", "white")};
  height: 100%;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  overflow-y: scroll;
`;

export const ScreenItem = styled.div`
  min-height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #cacaca;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 4px;
  border: 1px solid ${cssVariable("global", "border-colors", "black")};
  color: ${cssVariable("global", "border-colors", "black")};
  :hover {
    background: #dadada;
    cursor: pointer;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;
