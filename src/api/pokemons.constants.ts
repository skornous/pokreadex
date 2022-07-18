import { GraphQLPokemonsList, Pokemon, PokemonsList } from "./generated.types";

export const FALLBACK_POKEMONS_LIST: PokemonsList = {
  count: 0,
  next: "",
  previous: "",
  results: [],
};

export const FALLBACK_POKEMON: Pokemon = {
  id: 0,
  name: "",
  order: 0,
  sprites: { front_default: "", front_shiny: "" },
  types: [],
};

export const FALLBACK_SEARCH_RESULT: GraphQLPokemonsList = { data: { pokemon_v2_pokemon: [] } };
