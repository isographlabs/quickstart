import type { EagerReaderArtifact, ReaderAst } from '@isograph/react';
import { Film__EpisodeTitle__param } from './param_type';
import { Film__EpisodeTitle__output_type } from './output_type';
import { EpisodeTitle as resolver } from '../../../EpisodeTitle';

const readerAst: ReaderAst<Film__EpisodeTitle__param> = [
  {
    kind: "Scalar",
    fieldName: "title",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "episodeID",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
];

const artifact: EagerReaderArtifact<
  Film__EpisodeTitle__param,
  Film__EpisodeTitle__output_type
> = {
  kind: "EagerReaderArtifact",
  fieldName: "Film.EpisodeTitle",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
