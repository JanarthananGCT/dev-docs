import React from "react";
import App from '@site/src/components/App/index';
import useAlgoliaFacetFilter from "../hooks/useAlgoliaFacetFilter";
export default function Root({ children }) {
  useAlgoliaFacetFilter()
  return (
    <>
      <App children={children} />
    </>
  )
}
