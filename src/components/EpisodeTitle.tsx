import { iso } from '@iso';
import React from 'react';

export const EpisodeTitle = iso(`
  field Film.EpisodeTitle {
    title
    episodeID
  }
`)(function EpisodeTitleComponent({ data }) {
  return (
    <h2>
      Episode {data.episodeID}: {data.title}
    </h2>
  );
});
