import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Root__HomePage__param } from './param_type';
import { HomePage as resolver } from '../../../HomePage';
import Film__EpisodeTitle__resolver_reader from '../../Film/EpisodeTitle/resolver_reader';

const readerAst: ReaderAst<Root__HomePage__param> = [
  {
    kind: "Linked",
    fieldName: "allFilms",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "films",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "id",
            alias: null,
            arguments: null,
          },
          {
            kind: "Scalar",
            fieldName: "episodeID",
            alias: null,
            arguments: null,
          },
          {
            kind: "Resolver",
            alias: "EpisodeTitle",
            arguments: null,
            readerArtifact: Film__EpisodeTitle__resolver_reader,
            usedRefetchQueries: [],
          },
        ],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Root__HomePage__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "Root.HomePage",
  resolver,
  readerAst,
};

export default artifact;
