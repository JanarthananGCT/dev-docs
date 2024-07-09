import React, { useState, useCallback } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { debounce } from 'lodash';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('YOUR_ALGOLIA_APP_ID', 'YOUR_ALGOLIA_API_KEY');

const CustomSearch = () => {
  const [query, setQuery] = useState('');

  const debouncedSetQuery = useCallback(debounce((value) => {
    setQuery(value);
  }, 300), []); // Adjust debounce delay as needed

  const handleSearchChange = (e) => {
    debouncedSetQuery(e.target.value);
  };

  return (
    <InstantSearch searchClient={searchClient} indexName="YOUR_ALGOLIA_INDEX_NAME">
      <SearchBox
        translations={{
          placeholder: 'Search...',
        }}
        onChange={handleSearchChange}
      />
      <Hits />
    </InstantSearch>
  );
};

export default CustomSearch;
