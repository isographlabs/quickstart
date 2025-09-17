import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Film__EpisodeTitle__param } from './param_type';
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

const artifact: ComponentReaderArtifact<
  Film__EpisodeTitle__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Film.EpisodeTitle",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
