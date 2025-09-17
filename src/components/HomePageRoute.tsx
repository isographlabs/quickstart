import { iso } from '@iso';
import { useLazyReference, useResult } from '@isograph/react';
import React from 'react';

export default function HomePageRoute() {
  const { fragmentReference } = useLazyReference(
    iso(`entrypoint Root.HomePage`),
    {
      /* query variables */
    },
  );
  const Component = useResult(fragmentReference);
  return <Component />;
}
