import { useContext } from "react";
import { PokeListCtx } from "../App/App.contexts";
import { DetailContainer, DetailFooter, DetailHeader, DetailScreen } from "./PokeDetail.styles";
import { ReactComponent as Speaker } from "../../assets/speaker.svg";
import { ReactComponent as Microphone } from "../../assets/microphone.svg";
import {
  PokeDetailHeaderButton,
  PokeDetailHeaderButtonsWrapper,
  PokeDetailHeaderDiode,
  PokeDetailHeaderDiodesWrapper,
} from "./PokeDetailHeader/PokeDetailHeader.styles";

type PokeDetailProps = {
  className?: string;
};
export const PokeDetail = ({ className = "" }: PokeDetailProps) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokeListCtx);
  const resetPokemon = () => {
    setSelectedPokemon(undefined);
  };

  return (
    <DetailContainer className={className}>
      <DetailHeader>
        <PokeDetailHeaderButtonsWrapper>
          <PokeDetailHeaderButton color="#D5D13E" />
          <PokeDetailHeaderButton color="#3CB34C" />
          <PokeDetailHeaderButton color="#4898D8" />
          <PokeDetailHeaderButton color="#F85858" onClick={resetPokemon}>
            {selectedPokemon && "Turn off"}
          </PokeDetailHeaderButton>
        </PokeDetailHeaderButtonsWrapper>
        <Speaker />
        <PokeDetailHeaderDiodesWrapper>
          <PokeDetailHeaderDiode color="#0F0" />
          <PokeDetailHeaderDiode color="#F00" />
        </PokeDetailHeaderDiodesWrapper>
      </DetailHeader>
      <DetailScreen />
      <DetailFooter>
        <Microphone />
      </DetailFooter>
    </DetailContainer>
  );
};
