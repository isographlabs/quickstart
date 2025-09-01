import type { PokemonWithClientFields } from '@/types';
import { Suspense } from 'react';

type PokemonDetailRouteProps = {
  pokemon: PokemonWithClientFields;
  onBack: () => void;
};

export default function PokemonDetailRoute({
  pokemon,
  onBack,
}: PokemonDetailRouteProps) {
  return (
    <div className="pokemon-detail-route">
      <Suspense
        fallback={
          <div className="pokemon-loading">
            <h1>{pokemon.name}</h1>
            <div>Loading pokemon details...</div>
          </div>
        }
      >
        <pokemon.Pokemon />
      </Suspense>
      <button onClick={onBack} className="back-button">
        ← Back to List
      </button>
    </div>
  );
}
