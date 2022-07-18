import { ReactComponent as Pokeball } from "../../assets/pokeball.svg";
import { PokemonsList } from "../../api/generated.types";
import { Panel } from "../Panel/Panel.styles";
import { ScreenContainer, ScreenItem } from "./PokeScreen.styles";
import { useContext, useEffect, useState } from "react";
import { PokeListCtx } from "../App/App.contexts";
import useDebounce from "../../utils/useDebounce";
import { computePokemonId } from "./PokeScreen.utils";

type PokeScreenProps = {
  className?: string;
  pokemons: PokemonsList["results"];
};
export const PokeScreen = ({ className = "", pokemons }: PokeScreenProps) => {
  const { page, setPage } = useContext(PokeListCtx);
  const [newPage, setNewPage] = useState(page);
  const debouncedNewPage = useDebounce(newPage, 50);

  const scrollListener = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const scrollHeight = e.currentTarget.scrollHeight;
    const clientHeight = e.currentTarget.clientHeight;
    const scrolledPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    if (scrolledPercent > 80) {
      setNewPage(page + 1);
    }
  };

  useEffect(() => {
    setPage(debouncedNewPage);
  }, [debouncedNewPage]);

  return (
    <Panel>
      <ScreenContainer className={className} onScroll={scrollListener}>
        {pokemons.map((pokemon, i) => {
          return (
            <ScreenItem key={i}>
              <span>N.{String(computePokemonId(pokemon.url)).padStart(3, "0")}</span>
              <Pokeball />
              <span>{pokemon.name}</span>
            </ScreenItem>
          );
        })}
      </ScreenContainer>
    </Panel>
  );
};
