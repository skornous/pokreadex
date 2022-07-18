import { GraphQLPokemonsList, Pokemon, PokemonsList } from "./generated.types";
import { BASE_GRAPHQL_URI, BASE_REST_URI, PAGINATED_DATA_LIMIT } from "./utils/constants";
import { fetch, gqlFetch } from "./utils/fetch";
import { computeOffset } from "./utils/offset";

export const fetchPokemons = async (pageNumber: number = 0): Promise<PokemonsList> => {
  let data: PokemonsList;
  try {
    data = await fetch<PokemonsList>(`${BASE_REST_URI}/pokemon`, {
      query: { offset: computeOffset(pageNumber * PAGINATED_DATA_LIMIT) },
    });
  } catch (e) {
    throw new Error(`Fetching Pokemons page "${pageNumber}" failed`);
  }
  return data;
};

export const fetchPokemon = async (idOrName: number | string): Promise<Pokemon> => {
  let data: Pokemon;
  try {
    data = await fetch<Pokemon>(`${BASE_REST_URI}/pokemon/${idOrName}`);
  } catch (e) {
    throw new Error(`Fetching Pokemon with id or name "${idOrName}" failed`);
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
    throw new Error(`Fetching Pokemons with selector "name like ${nameLike}" failed`);
  }
  return data;
};
