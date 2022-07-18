import { useEffect, useState } from "react";
import { PokemonsList } from "../../api/generated.types";
import { fetchPokemons, searchPokemon } from "../../api/pokemons";
import { AppContainer } from "./App.styles";

export const App = () => {
  const [pokemons, setPokemons] = useState<PokemonsList["results"]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (pokemons.length === 0) {
      fetchPokemons(0).then((pokemons) => {
        if (pokemons) setPokemons(pokemons.results);
      });
    }
  }, []);

  useEffect(() => {
    if (search.length >= 3) {
      searchPokemon(search).then((pokemons) => {
        if (pokemons) {
          setPokemons(pokemons.data.pokemon_v2_pokemon);
        }
      });
    }
  }, [search]);

  return (
    <AppContainer>
      <input type="text" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
      {pokemons.map((pokemon, i) => (
        <div key={i}>{pokemon.name}</div>
      ))}
    </AppContainer>
  );
};
