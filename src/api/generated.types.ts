// Generated by https://quicktype.io

export type PokemonsList = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
};

export type GraphQLPokemonsList = {
  data: {
    pokemon_v2_pokemon: {
      name: string;
      id: number;
    }[];
  };
};

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  sprites: Sprites;
  types: Type[];
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  front_default: string;
  front_shiny: string;
  animated?: Sprites;
}

export interface Type {
  slot: number;
  type: Species;
}
