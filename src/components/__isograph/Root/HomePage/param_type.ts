import { type Film__EpisodeTitle__output_type } from '../../Film/EpisodeTitle/output_type';

export type Root__HomePage__param = {
  readonly data: {
    readonly allFilms: ({
      /**
A list of all of the objects returned in the connection. This is a convenience
field provided for quickly exploring the API; rather than querying for
"{ edges { node } }" when no edge data is needed, this field can be be used
instead. Note that when clients like Relay need to fetch the "cursor" field on
the edge to enable efficient pagination, this shortcut cannot be used, and the
full "{ edges { node } }" version should be used instead.
      */
      readonly films: (ReadonlyArray<({
        /**
The ID of an object
        */
        readonly id: string,
        /**
The episode number of this film.
        */
        readonly episodeID: (number | null),
        readonly EpisodeTitle: Film__EpisodeTitle__output_type,
      } | null)> | null),
    } | null),
  },
  readonly parameters: Record<PropertyKey, never>,
};
