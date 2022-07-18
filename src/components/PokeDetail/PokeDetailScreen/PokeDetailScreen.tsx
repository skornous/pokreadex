import { useContext, useEffect, useState } from "react";
import { usePokemon } from "../../../api/pokemons.hooks";
import { ReactComponent as Loader } from "../../../assets/loader.svg";
import { PokeListCtx } from "../../App/App.contexts";
import { PokemonInfos } from "./PokemonInfos/PokemonInfos";
import { Screen, ScreenWrapper } from "./PokeDetailScreen.styles";

type PokeDetailScreenProps = {
  className?: string;
};
export const PokeDetailScreen = ({ className }: PokeDetailScreenProps) => {
  const { selectedPokemon } = useContext(PokeListCtx);
  const { pokemon, status } = usePokemon(selectedPokemon?.name);
  const [isScreenOn, setIsScreeOn] = useState(false);

  useEffect(() => {
    setIsScreeOn((status === "ok" && !!pokemon) || status === "loading");
  }, [status, pokemon]);

  return (
    <ScreenWrapper className={className}>
      {status === "loading" ? (
        <Loader style={{ filter: "brightness(20%)", width: "325px" }} />
      ) : (
        <Screen isOff={!isScreenOn}>
          {isScreenOn && pokemon && <PokemonInfos {...pokemon} />}
        </Screen>
      )}
    </ScreenWrapper>
  );
};
