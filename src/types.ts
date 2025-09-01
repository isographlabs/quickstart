import React from 'react';

// Type for pokemon objects with Isograph client fields
export type PokemonWithClientFields = {
  readonly id: string;
  readonly name: string;
  readonly number: string;
  readonly Pokemon: React.ComponentType; // Isograph client field component
};
