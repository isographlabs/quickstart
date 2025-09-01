import type {IsographEntrypoint, NormalizationAst, RefetchQueryNormalizationArtifactWrapper} from '@isograph/react';
import {Query__PokemonList__param} from './param_type';
import {Query__PokemonList__output_type} from './output_type';
import readerResolver from './resolver_reader';
const nestedRefetchQueries: RefetchQueryNormalizationArtifactWrapper[] = [];

const queryText = 'query PokemonList  {\
  pokemons____first___l_10: pokemons(first: 10) {\
    id,\
    attacks {\
      fast {\
        damage,\
        name,\
        type,\
      },\
      special {\
        damage,\
        name,\
        type,\
      },\
    },\
    classification,\
    image,\
    maxCP,\
    maxHP,\
    name,\
    number,\
    types,\
  },\
}';

const normalizationAst: NormalizationAst = {
  kind: "NormalizationAst",
  selections: [
    {
      kind: "Linked",
      fieldName: "pokemons",
      arguments: [
        [
          "first",
          { kind: "Literal", value: 10 },
        ],
      ],
      concreteType: "Pokemon",
      selections: [
        {
          kind: "Scalar",
          fieldName: "id",
          arguments: null,
        },
        {
          kind: "Linked",
          fieldName: "attacks",
          arguments: null,
          concreteType: "PokemonAttack",
          selections: [
            {
              kind: "Linked",
              fieldName: "fast",
              arguments: null,
              concreteType: "Attack",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "damage",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "name",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "type",
                  arguments: null,
                },
              ],
            },
            {
              kind: "Linked",
              fieldName: "special",
              arguments: null,
              concreteType: "Attack",
              selections: [
                {
                  kind: "Scalar",
                  fieldName: "damage",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "name",
                  arguments: null,
                },
                {
                  kind: "Scalar",
                  fieldName: "type",
                  arguments: null,
                },
              ],
            },
          ],
        },
        {
          kind: "Scalar",
          fieldName: "classification",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "image",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "maxCP",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "maxHP",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "name",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "number",
          arguments: null,
        },
        {
          kind: "Scalar",
          fieldName: "types",
          arguments: null,
        },
      ],
    },
  ],
};
const artifact: IsographEntrypoint<
  Query__PokemonList__param,
  Query__PokemonList__output_type,
  NormalizationAst
> = {
  kind: "Entrypoint",
  networkRequestInfo: {
    kind: "NetworkRequestInfo",
    queryText,
    normalizationAst,
  },
  concreteType: "Query",
  readerWithRefetchQueries: {
    kind: "ReaderWithRefetchQueries",
    nestedRefetchQueries,
    readerArtifact: readerResolver,
  },
};

export default artifact;
