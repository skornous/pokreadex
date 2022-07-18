import { ReactComponent as Pokeball } from "../../assets/pokeball.svg";
import { PokemonsList } from "../../api/generated.types";
import { Panel } from "../Panel/Panel.styles";
import { ScreenContainer, ScreenItem } from "./PokeScreen.styles";

type PokeScreenProps = {
  className?: string;
  pokemons: PokemonsList["results"];
};
export const PokeScreen = ({ className = "", pokemons }: PokeScreenProps) => (
  <Panel>
    <ScreenContainer className={className}>
      {pokemons.map((pokemon, i) => (
        <ScreenItem key={i}>
          <span>N.{String(i + 1).padStart(3, "0")}</span>
          <Pokeball />
          <span>{pokemon.name}</span>
        </ScreenItem>
      ))}
    </ScreenContainer>
  </Panel>
);
