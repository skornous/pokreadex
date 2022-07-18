import { createContext } from "react";
import { PokemonsList } from "../../api/generated.types";

export type PokemonsListCtxType = {
  page: number;
  setPage: (newPage: number) => void;
  search: string;
  setSearch: (newSearch: string) => void;
  selectedPokemon?: PokemonsList["results"][number];
  setSelectedPokemon: (newPokemon?: PokemonsList["results"][number] | undefined) => void;
};
export const PokeListCtx = createContext<PokemonsListCtxType>({
  page: 0,
  setPage: (_: number) => {},
  search: "",
  setSearch: (_) => {},
  setSelectedPokemon: (_) => {},
});
