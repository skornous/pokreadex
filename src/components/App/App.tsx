import { useEffect, useState } from "react";
import { PokemonsList } from "../../api/generated.types";
import { usePokemons, useSearchPokemon } from "../../api/pokemons.hooks";
import { PokeListCtx } from "./App.contexts";
import { AppContainer, AppDetail, AppBinderContainer, AppBinder, AppScreen } from "./App.styles";

export const App = () => {
  const [pokemons, setPokemons] = useState<PokemonsList["results"]>([]);
  const [displayedPokemons, setDisplayedPokemons] = useState<PokemonsList["results"]>(pokemons);
  const [pokemonsListPage, setPokemonsListPage] = useState(0);
  const { pokemons: pokemonsData, status: pokemonsListStatus } = usePokemons(pokemonsListPage);
  const [searchTerm, setSearchTerm] = useState("");
  const { results: searchResults, status: searchStatus } = useSearchPokemon(searchTerm);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonsList["results"][number] | undefined
  >();

  useEffect(() => {
    if (searchStatus === "ok" && searchResults.length > 0) {
      setDisplayedPokemons(searchResults);
    } else {
      setDisplayedPokemons(pokemons);
    }
  }, [searchResults, searchStatus, pokemons]);

  useEffect(() => {
    if (pokemonsListStatus === "ok") {
      setPokemons([...pokemons, ...pokemonsData.results]);
    }
  }, [pokemonsData.results, pokemonsListStatus]);

  return (
    <AppContainer>
      <PokeListCtx.Provider
        value={{
          page: pokemonsListPage,
          setPage: (newPage: number) => {
            setPokemonsListPage(newPage);
          },
          search: searchTerm,
          setSearch: (newSearch) => {
            setSearchTerm(newSearch);
          },
          selectedPokemon,
          setSelectedPokemon: (newPokemon) => {
            setSelectedPokemon(newPokemon);
          },
        }}
      >
        <AppDetail />
        <AppBinderContainer>
          <AppBinder />
        </AppBinderContainer>
        <AppScreen pokemons={displayedPokemons} />
      </PokeListCtx.Provider>
    </AppContainer>
  );
};
