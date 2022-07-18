import { useEffect, useState } from "react";
import { fetchPokemon, fetchPokemons, searchPokemon } from "./pokemons";
import {
  FALLBACK_POKEMON,
  FALLBACK_POKEMONS_LIST,
  FALLBACK_SEARCH_RESULT,
} from "./pokemons.constants";
import { gqlPokemonToRestPokemon } from "./utils/gqlPokemonToRestPokemon";

export type QueryStatus = "loading" | "ok" | "error";

const useQuery = <Data extends any, Args extends any[]>(
  fetcher: (...args: Args) => Promise<Data>,
  args: Args,
  defaultValue: Data,
): { status: QueryStatus; data: Data } => {
  const [data, setData] = useState<Data>(defaultValue);
  const [queryStatus, setQueryStatus] = useState<QueryStatus>("loading");

  useEffect(() => {
    setQueryStatus("loading");
    fetcher(...args)
      .then((data) => {
        setData(data);
        setQueryStatus("ok");
      })
      .catch((_) => {
        setData(defaultValue);
        setQueryStatus("error");
      });
  }, [...args]);

  return { status: queryStatus, data };
};

export const usePokemons = (pageNum: number = 0) => {
  const { data, status } = useQuery(fetchPokemons, [pageNum], FALLBACK_POKEMONS_LIST);
  return { status, pokemons: data };
};
export const usePokemon = (idOrName?: string) => {
  const { data, status } = useQuery(fetchPokemon, [idOrName], FALLBACK_POKEMON);
  return { status, pokemon: data };
};
export const useSearchPokemon = (nameLike: string) => {
  const { data, status } = useQuery(searchPokemon, [nameLike], FALLBACK_SEARCH_RESULT);
  return { status, results: data.data.pokemon_v2_pokemon.map(gqlPokemonToRestPokemon) };
};
