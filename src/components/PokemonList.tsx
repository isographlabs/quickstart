import type { PokemonWithClientFields } from '@/types';
import { iso } from '@iso';
import React from 'react';

export const PokemonList = iso(`
  field Query.PokemonList @component {
    pokemons(first: 10) {
      id
      name
      number
      Pokemon
    }
  }
`)(function PokemonListComponent(
  { data },
  componentProps: {
    onPokemonClick: (pokemon: PokemonWithClientFields) => void;
  },
) {
  return (
    <div className="pokemon-list">
      <h1>Pokemon List</h1>
      <ul>
        {data.pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <button onClick={() => componentProps.onPokemonClick(pokemon)}>
              #{pokemon.number} - {pokemon.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});
