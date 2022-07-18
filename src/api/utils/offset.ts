import { DISTANCE_TO_DATA_LIMIT, NUMBER_OF_POKEMONS } from "../pokemons.constants";

export const getNumberOfModuloIterations = (on: number, modulator: number) => {
  return Math.floor(on / modulator);
};

export const computeOffset = (baseOffset: number) => {
  const wrongOffsetAfterOneModulo = baseOffset % NUMBER_OF_POKEMONS;
  const numberOfModulos = getNumberOfModuloIterations(baseOffset, NUMBER_OF_POKEMONS);
  return wrongOffsetAfterOneModulo - numberOfModulos * DISTANCE_TO_DATA_LIMIT;
};
