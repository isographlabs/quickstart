import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Pokemon__Pokemon__param } from './param_type';
import { Pokemon as resolver } from '../../../Pokemon';

const readerAst: ReaderAst<Pokemon__Pokemon__param> = [
  {
    kind: "Scalar",
    fieldName: "name",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "image",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "number",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "classification",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "types",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "maxHP",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Scalar",
    fieldName: "maxCP",
    alias: null,
    arguments: null,
    isUpdatable: false,
  },
  {
    kind: "Linked",
    fieldName: "attacks",
    alias: null,
    arguments: null,
    condition: null,
    selections: [
      {
        kind: "Linked",
        fieldName: "fast",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "name",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
          {
            kind: "Scalar",
            fieldName: "type",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
          {
            kind: "Scalar",
            fieldName: "damage",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
        ],
      },
      {
        kind: "Linked",
        fieldName: "special",
        alias: null,
        arguments: null,
        condition: null,
        selections: [
          {
            kind: "Scalar",
            fieldName: "name",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
          {
            kind: "Scalar",
            fieldName: "type",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
          {
            kind: "Scalar",
            fieldName: "damage",
            alias: null,
            arguments: null,
            isUpdatable: false,
          },
        ],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Pokemon__Pokemon__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Pokemon.Pokemon",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
