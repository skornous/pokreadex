import styled from "styled-components";
import { cVar, gVar } from "themthem";
import { DETAIL_PANEL_SCREEN_CSS_VARS } from "./PokeDetailScreen.constants";

export const ScreenWrapper = styled.div`
  ${DETAIL_PANEL_SCREEN_CSS_VARS};
  border: 16px solid ${gVar("border-colors.black", "black")};
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
  border: 8px solid ${cVar("DetailPanelScreen.border-color")};
  background: ${gVar("colors.white", "white")};
  transition: filter ${gVar("transition.fast", "none")} ease-in-out;
  filter: brightness(${({ isOff = true }) => (isOff ? 20 : 100)}%);
`;
