import { GraphQLPokemonsList, PokemonsList } from "../generated.types";
import { BASE_REST_URI } from "./constants";

type GqlPokemon = GraphQLPokemonsList["data"]["pokemon_v2_pokemon"][number];
type RestPokemon = PokemonsList["results"][number];
export const gqlPokemonToRestPokemon = ({ name, id }: GqlPokemon): RestPokemon => {
  return {
    name,
    url: `${BASE_REST_URI}/pokemon/${id}/`,
  };
};
