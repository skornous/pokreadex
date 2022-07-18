import { useEffect, useState } from "react";
import { PokemonsList } from "../../api/generated.types";
import { usePokemons, useSearchPokemon } from "../../api/pokemons.hooks";
import { AppContainer } from "./App.styles";

export const App = () => {
  const [pokemonList, setPokemonList] = useState<PokemonsList["results"]>([]);
  const { status: pokemonsStatus, pokemons } = usePokemons(0);
  const [search, setSearch] = useState("");
  const { status: searchStatus, result } = useSearchPokemon(search);

  useEffect(() => {
    if (searchStatus === "ok" && result.data.pokemon_v2_pokemon.length > 0) {
      setPokemonList(result.data.pokemon_v2_pokemon);
    } else {
      setPokemonList(pokemons.results);
    }
  }, [pokemons, result]);

  return (
    <AppContainer>
      <input type="text" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
      {pokemonList.map((pokemon, i) => (
        <div key={i}>{pokemon.name}</div>
      ))}
    </AppContainer>
  );
};
