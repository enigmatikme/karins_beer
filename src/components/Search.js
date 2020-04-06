import React, { useState } from 'react'
import '../styles/Search.css';

const Search = ({handleSubmit, listName}) => {
  const [query, setQuery] = useState('');

  return (
    <form className="search" onSubmit={(e) => handleSubmit(e, query)}>
      <div>Search:</div> 
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}

export default Search;