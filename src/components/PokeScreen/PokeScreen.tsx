import { ScreenContainer } from "./PokeScreen.styles";

type PokeScreenProps = {
  className?: string;
};
export const PokeScreen = ({ className = "" }: PokeScreenProps) => (
  <ScreenContainer className={className}></ScreenContainer>
);
