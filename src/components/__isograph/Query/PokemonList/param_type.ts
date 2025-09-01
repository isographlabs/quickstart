import { type Pokemon__Pokemon__output_type } from '../../Pokemon/Pokemon/output_type';

export type Query__PokemonList__param = {
  readonly data: {
    /**
Query to get multiple Pokemon.
    */
    readonly pokemons: ReadonlyArray<{
      /**
The ID of the Pokemon.
      */
      readonly id: string,
      /**
The name of the Pokemon.
      */
      readonly name: string,
      /**
The Pokemon's Pokedex number.
      */
      readonly number: string,
      readonly Pokemon: Pokemon__Pokemon__output_type,
    }>,
  },
  readonly parameters: Record<PropertyKey, never>,
};
