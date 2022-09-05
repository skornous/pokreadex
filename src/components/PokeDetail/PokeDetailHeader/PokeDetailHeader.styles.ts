import styled from "styled-components";
import { gVar, cVar } from "themthem";

export const PokeDetailHeader = styled.div`
  display: grid;
  grid-template-areas:
    "buttons speaker"
    "buttons diodes";
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr min-content;
  gap: 15px;

  svg {
    grid-area: speaker;
  }
`;
export const PokeDetailHeaderButtonsWrapper = styled.div`
  grid-area: buttons;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;
const HeaderBaseButton = styled.button`
  width: 160px;
  height: 40px;
  font-size: 16px;
  border: 2px solid ${cVar("DetailPanel.border-color")};
  border-radius: 4px;
  box-shadow: inset -8px -8px 12px 2px rgba(0, 0, 0, 0.5),
    inset 8px 8px 12px 2px rgba(255, 255, 255, 0.5);
  transition: all ${gVar("transition.fast")} ease-in-out;

  :hover {
    filter: brightness(70%);
    cursor: pointer;
  }

  :active {
    box-shadow: none;
  }
`;
export const PokeDetailHeaderButton = styled(HeaderBaseButton)<{ color: string }>`
  background: ${({ color }) => color};
`;
export const PokeDetailHeaderDiodesWrapper = styled.div`
  grid-area: diodes;
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  place-self: center;
`;
export const PokeDetailHeaderDiode = styled.div<{ color: string; isActive?: boolean }>`
  width: 20px;
  height: 40px;
  border: 4px solid ${cVar("DetailPanel.border-color")};
  border-radius: 4px;
  background-color: ${({ color }) => color};
  filter: brightness(${({ isActive = false }) => (isActive ? 100 : 50)}%);
`;
