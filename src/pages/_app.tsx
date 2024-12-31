// import { useMemo } from 'react';
// import type { AppProps } from 'next/app';
// import {
//   createIsographEnvironment,
//   createIsographStore,
//   IsographEnvironmentProvider,
// } from '@isograph/react';

// function makeNetworkRequest<T>(queryText: string, variables: any): Promise<T> {
//   let promise = fetch(
//     'https://swapi-graphql.netlify.app/.netlify/functions/index',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query: queryText, variables }),
//     },
//   ).then((response) => response.json());

//   return promise;
// }

// export default function App({ Component, pageProps }: AppProps) {
//   const environment = useMemo(
//     () => createIsographEnvironment(createIsographStore(), makeNetworkRequest),
//     [],
//   );
//   return (
//     <IsographEnvironmentProvider environment={environment}>
//       <Component {...pageProps} />
//     </IsographEnvironmentProvider>
//   );
// }

import { useMemo, Suspense } from 'react';
import type { AppProps } from 'next/app';
import {
  createIsographEnvironment,
  createIsographStore,
  IsographEnvironmentProvider,
} from '@isograph/react';

function makeNetworkRequest<T>(
  queryText: string,
  variables: unknown,
): Promise<T> {
  const promise = fetch(
    'https://swapi-graphql.netlify.app/.netlify/functions/index',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: queryText, variables }),
    },
  ).then(async (response) => {
    const json = await response.json();
    console.log(json)

    if (response.ok) {
      return json;
    } else {
      throw new Error('NetworkError', {
        cause: json,
      });
    }
  });
  return promise;
}

export default function App({ Component, pageProps }: AppProps) {
  const environment = useMemo(
    () =>
      createIsographEnvironment(
        createIsographStore(),
        makeNetworkRequest,
        // Optional missing field handler
        null,
        // Optional logger
        console.log(),
      ),
    [],
  );
  return (
    <IsographEnvironmentProvider environment={environment}>
      <Suspense fallback="loading">
        <Component {...pageProps} />
      </Suspense>
    </IsographEnvironmentProvider>
  );
}