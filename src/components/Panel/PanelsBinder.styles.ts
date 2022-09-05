import styled from "styled-components";
import { gVar } from "themthem";

export const PanelsBinder = styled.div`
  height: 80%;
  width: 30px;
  border: 4px solid var(--global-border-colors-black);
  border-radius: 4px;
  background: ${gVar("colors.red", "red")};
  box-shadow: inset 5px 0px 7px 0px var(--global-border-colors-black);
`;
