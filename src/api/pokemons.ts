import { GraphQLPokemonsList, Pokemon, PokemonsList } from "./generated.types";
import {
  FALLBACK_POKEMON,
  FALLBACK_POKEMONS_LIST,
  FALLBACK_SEARCH_RESULT,
} from "./pokemons.constants";
import { BASE_GRAPHQL_URI, BASE_REST_URI, PAGINATED_DATA_LIMIT } from "./utils/constants";
import { fetch, gqlFetch } from "./utils/fetch";

export const fetchPokemons = async (pageNumber: number = 0): Promise<PokemonsList> => {
  let data: PokemonsList;
  try {
    data = await fetch<PokemonsList>(`${BASE_REST_URI}/pokemon`, {
      query: { offset: pageNumber * PAGINATED_DATA_LIMIT },
    });
  } catch (e) {
    console.error(`Fetching Pokemons page "${pageNumber}" failed`);
    data = FALLBACK_POKEMONS_LIST;
  }
  return data;
};

export const fetchPokemon = async (idOrName: number | string): Promise<Pokemon> => {
  let data: Pokemon;
  try {
    data = await fetch<Pokemon>(`${BASE_REST_URI}/pokemon/${idOrName}`);
  } catch (e) {
    console.error(`Fetching Pokemon with id or name "${idOrName}" failed`);
    data = FALLBACK_POKEMON;
  }
  return data;
};

export const searchPokemon = async (nameLike: string): Promise<GraphQLPokemonsList> => {
  let data: GraphQLPokemonsList;
  try {
    data = await gqlFetch<GraphQLPokemonsList>(`${BASE_GRAPHQL_URI}`, {
      query: { regex: nameLike },
    });
  } catch (e) {
    console.error(`Fetching Pokemons with selector "name like ${nameLike}" failed`);
    data = FALLBACK_SEARCH_RESULT;
  }
  return data;
};
