import { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function getVersionObjectFromLocalStorage() {
  if (typeof localStorage !== 'undefined') {
    const storedVersionObject = localStorage.getItem('selectedVersion');
    if (storedVersionObject) {
      try {
        return JSON.parse(storedVersionObject);
      } catch (error) {
        console.error('Error parsing stored version object:', error);
      }
    }
  }
  return {
    version: "v3",
  };
}

export default function useAlgoliaFacetFilter() {
  const version = getVersionObjectFromLocalStorage().version
  const { siteConfig } = useDocusaurusContext();
  const { themeConfig: {
    algolia: {
      searchParameters
    }
  } } = siteConfig;
  useEffect(() => {
    const search = window.docsearch;
    if (search) {
      search.setFacetFilters([`version:${version}`]);
    }
    searchParameters.facetFilters = [`version:${version}`]
    console.log(siteConfig.themeConfig.algolia.searchParameters.facetFilters)
  }, []);
}
