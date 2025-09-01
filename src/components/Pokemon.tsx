import { iso } from '@iso';
import Image from 'next/image';

export const Pokemon = iso(`
  field Pokemon.Pokemon @component {
    name
    image
    number
    classification
    types
    maxHP
    maxCP
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
  }
`)(function PokemonComponent({ data }) {
  return (
    <div className="pokemon-component">
      <h1>{data.name}</h1>
      <Image src={data.image} alt={data.name} width={200} height={200} />
      <p>Number: #{data.number}</p>
      <p>Classification: {data.classification}</p>
      <p>Types: {data.types.join(', ')}</p>
      <p>Max HP: {data.maxHP}</p>
      <p>Max CP: {data.maxCP}</p>

      <h3>Fast Attacks:</h3>
      <ul>
        {data.attacks.fast.map((attack, index) => (
          <li key={index}>
            {attack.name} ({attack.type}) - {attack.damage} damage
          </li>
        ))}
      </ul>

      <h3>Special Attacks:</h3>
      <ul>
        {data.attacks.special.map((attack, index) => (
          <li key={index}>
            {attack.name} ({attack.type}) - {attack.damage} damage
          </li>
        ))}
      </ul>
    </div>
  );
});
