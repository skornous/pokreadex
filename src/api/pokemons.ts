import { GraphQLPokemonsList, Pokemon, PokemonsList } from "./generated.types";
import { BASE_GRAPHQL_URI, BASE_REST_URI, PAGINATED_DATA_LIMIT } from "./utils/constants";
import { fetch, gqlFetch } from "./utils/fetch";

export const fetchPokemons = async (pageNumber: number = 0): Promise<PokemonsList | void> => {
  try {
    return fetch<PokemonsList>(`${BASE_REST_URI}/pokemon`, {
      query: { offset: pageNumber * PAGINATED_DATA_LIMIT },
    });
  } catch (e) {
    console.error("Fetching error");
  }
};

export const fetchPokemon = async (idOrName: number | string): Promise<Pokemon | void> => {
  try {
    return fetch<Pokemon>(`${BASE_REST_URI}/pokemon/${idOrName}`);
  } catch (e) {
    console.error(`Fetching Pokemon with id or name "${idOrName}" failed`);
  }
};

export const searchPokemon = async (nameLike: string): Promise<GraphQLPokemonsList | void> => {
  try {
    return gqlFetch<GraphQLPokemonsList>(`${BASE_GRAPHQL_URI}`, {
      query: { regex: nameLike },
    });
  } catch (e) {
    console.error(`Fetching Pokemons with selector "name like ${nameLike}" failed`);
  }
};
