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

export const NUMBER_OF_POKEMONS = 913;
// i have no idea if this has a name in mathematics but
// it's basically what get's added after each "round of the modulo"
// e.g. : 920 % 913 -> 7 // 1840 % 913 -> 14...
// feel free to change the name to the right one if you ever remember what it's supposed to be called
export const DISTANCE_TO_DATA_LIMIT = 7;
