export const TYPES_KEYS = [
  "normal",
  "fight",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
] as const;
export type TypeKeysType = typeof TYPES_KEYS[number];
export const TYPE_COLOR_MAP: Record<TypeKeysType, string> = {
  normal: "#A9A879",
  fight: "#C42E25",
  flying: "#98A3DF",
  poison: "#BB5A9F",
  ground: "#E7D4A9",
  rock: "#BEA563",
  bug: "#A9BC42",
  ghost: "#6863B2",
  steel: "#AFADC3",
  fire: "#FE4833",
  water: "#1F93F6",
  grass: "#74D76A",
  electric: "#FEC446",
  psychic: "#FD6FA1",
  ice: "#47CEE4",
  dragon: "#8567ED",
  dark: "#765A4E",
  fairy: "#FDB6F2",
};