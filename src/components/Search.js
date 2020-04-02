import React, { useState } from 'react'
import '../styles/Search.css';

const Search = ({handleSubmit}) => {
  const [query, setQuery] = useState('');

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div>Search:</div> 
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}

export default Search;