import { NUMBER_OF_POKEMONS } from "../../api/pokemons.constants";
import { getNumberOfModuloIterations } from "../../api/utils/offset";

export const computeIdFromListIndex = (index: number): any => {
  const baseIndex = index + 1;
  const indexModulo = baseIndex % NUMBER_OF_POKEMONS;
  const moduloRounds = getNumberOfModuloIterations(baseIndex, NUMBER_OF_POKEMONS);
  return indexModulo + 1 * moduloRounds;
};
