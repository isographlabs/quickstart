import { iso } from '@iso';
import React, { useMemo } from 'react';

function nonNullable<T>(value: T): value is NonNullable<T> {
  return value != null;
}

function toSorted<T>(
  arr: readonly T[],
  comparator: (a: T, b: T) => number,
): T[] {
  const sorted = [...arr];
  sorted.sort(comparator);
  return sorted;
}

export const HomePage = iso(`
  field Root.HomePage @component {
    allFilms {
      films {
        id
        episodeID
        EpisodeTitle
      }
    }
  }
`)(function HomePageComponent(props) {
  const films = useMemo(
    () =>
      toSorted(props.data.allFilms?.films ?? [], (film1, film2) => {
        if (film1?.episodeID == null || film2?.episodeID == null) {
          throw new Error(
            'This API should not return null films or null episode IDs.',
          );
        }

        return film1.episodeID > film2.episodeID ? 1 : -1;
      }).filter(nonNullable),
    [props.data.allFilms?.films],
  );

  return (
    <>
      <h1>Star Wars Film Archive</h1>
      {films.map((film) => (
        <film.EpisodeTitle key={film.id} />
      ))}
    </>
  );
});
