import React, { useState, useCallback, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { debounce } from 'lodash';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('YOUR_ALGOLIA_APP_ID', 'YOUR_ALGOLIA_API_KEY');

const CustomSearch = () => {
  useEffect(()=>{
    window.document.getElementById('docsearch-input').placeholder = 'search something'
  },[])
  const [query, setQuery] = useState('');

  const debouncedSetQuery = useCallback(debounce((value) => {
    setQuery(value);
  }, 50), []); // Adjust debounce delay as needed
 
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
