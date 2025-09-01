import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { Query__PokemonList__param } from './param_type';
import { PokemonList as resolver } from '../../../PokemonList';
import Pokemon__Pokemon__resolver_reader from '../../Pokemon/Pokemon/resolver_reader';

const readerAst: ReaderAst<Query__PokemonList__param> = [
  {
    kind: "Linked",
    fieldName: "pokemons",
    alias: null,
    arguments: [
      [
        "first",
        { kind: "Literal", value: 10 },
      ],
    ],
    condition: null,
    selections: [
      {
        kind: "Scalar",
        fieldName: "id",
        alias: null,
        arguments: null,
        isUpdatable: false,
      },
      {
        kind: "Scalar",
        fieldName: "name",
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
        kind: "Resolver",
        alias: "Pokemon",
        arguments: null,
        readerArtifact: Pokemon__Pokemon__resolver_reader,
        usedRefetchQueries: [],
      },
    ],
  },
];

const artifact: ComponentReaderArtifact<
  Query__PokemonList__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  fieldName: "Query.PokemonList",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
