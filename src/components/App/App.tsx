import { useEffect, useState } from "react";
import { PokemonsList } from "../../api/generated.types";
import { usePokemons } from "../../api/pokemons.hooks";
import { PokeListCtx } from "./App.contexts";
import { AppContainer, AppDetail, AppBinderContainer, AppBinder, AppScreen } from "./App.styles";

export const App = () => {
  const [pokemons, setPokemons] = useState<PokemonsList["results"]>([]);
  const [pokemonsListPage, setPokemonsListPage] = useState(0);
  const { pokemons: pokemonsData, status: pokemonsListStatus } = usePokemons(pokemonsListPage);

  useEffect(() => {
    if (pokemonsListStatus === "ok") {
      setPokemons([...pokemons, ...pokemonsData.results]);
    }
  }, [pokemonsData, pokemonsListStatus]);

  return (
    <AppContainer>
      <AppDetail />
      <AppBinderContainer>
        <AppBinder />
      </AppBinderContainer>
      <PokeListCtx.Provider
        value={{
          page: pokemonsListPage,
          setPage: (newPage: number) => {
            setPokemonsListPage(newPage);
          },
        }}
      >
        <AppScreen pokemons={pokemons} />
      </PokeListCtx.Provider>
    </AppContainer>
  );
};
