import styled from "styled-components";
import { cssVariable } from "themthem";
import { DETAIL_PANEL_SCREEN_CSS_VARS } from "./PokeDetailScreen.constants";

export const ScreenWrapper = styled.div`
  ${DETAIL_PANEL_SCREEN_CSS_VARS};
  border: 16px solid ${cssVariable("global", "border-colors", "black")};
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Screen = styled.div<{ isOff: boolean }>`
  height: 100%;
  width: 100%;
  border: 8px solid ${cssVariable("component", "DetailPanelScreen", "border-color")};
  background: ${cssVariable("global", "colors", "white")};
  transition: filter ${cssVariable("global", "transition", "fast")} ease-in-out;
  filter: brightness(${({ isOff = true }) => (isOff ? 20 : 100)}%);
`;
