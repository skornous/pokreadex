import styled from "styled-components";
import { PanelsBinder } from "../Panel/PanelsBinder.styles";
import { PokeDetail } from "../PokeDetail/PokeDetail";
import { PokeScreen } from "../PokeScreen/PokeScreen";

export const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  gap: 5px; /* gap of 10 between panels but divided by 2 because the binder creates a new columns that will double gaps */
  display: grid;
  grid-template-areas: "detail separator list";
  grid-template-columns: minmax(480px, 1fr) 0 1fr; /* avoid going bellow 480px */
`;

export const AppDetail = styled(PokeDetail)`
  grid-area: detail;
`;
export const AppBinderContainer = styled.div`
  grid-area: separator;
  position: relative;
`;
export const AppBinder = styled(PanelsBinder)`
  position: absolute;
  top: 15%;
  left: -15px;
`;
export const AppScreen = styled(PokeScreen)`
  grid-area: list;
`;
