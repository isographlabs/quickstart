import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Film__EpisodeTitle__param } from './param_type';
import { EpisodeTitle as resolver } from '../../../EpisodeTitle';

const readerAst: ReaderAst<Film__EpisodeTitle__param> = [
  {
    kind: "Scalar",
    fieldName: "title",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "episodeID",
    alias: null,
    arguments: null,
  },
];

const artifact: ComponentReaderArtifact<
  Film__EpisodeTitle__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Film.EpisodeTitle",
  resolver,
  readerAst,
};

export default artifact;
