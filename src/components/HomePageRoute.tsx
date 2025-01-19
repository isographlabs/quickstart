import React from "react";
import { useLazyReference, useResult } from "@isograph/react";
import { iso } from "@iso";

export default function HomePageRoute() {
  const { fragmentReference } = useLazyReference(
    iso(`entrypoint Root.HomePage`),
    {
      /* query variables */
    }
  );
  const Component = useResult(fragmentReference);
  return <Component />;
}
