import { useMemo } from "react";
import type { AppProps } from "next/app";
import {
  createIsographEnvironment,
  createIsographStore,
  IsographEnvironmentProvider,
} from "@isograph/react";

function makeNetworkRequest<T>(queryText: string, variables: any): Promise<T> {
  let promise = fetch("https://swapi-graphql.netlify.app/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: queryText, variables }),
  }).then(async (response) => {
    const json = await response.json();

    if (response.ok) {
      if (json.errors != null) {
        throw new Error("GraphQLError", {
          cause: json.errors,
        });
      }
      return json;
    } else {
      throw new Error("NetworkError", {
        cause: json,
      });
    }
  });
  return promise;
}

export default function App({ Component, pageProps }: AppProps) {
  const environment = useMemo(
    () => createIsographEnvironment(createIsographStore(), makeNetworkRequest),
    []
  );
  return (
    <IsographEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </IsographEnvironmentProvider>
  );
}
