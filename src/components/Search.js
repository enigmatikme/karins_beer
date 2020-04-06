import React, { useState } from 'react'
import '../styles/Search.css';

const Search = ({handleSubmit}) => {
  const [query, setQuery] = useState('');

 
  return (
    <form className="search">
      <div>Search:</div> 
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit" onClick={(e) => handleSubmit(e, query)}> click</button>
    </form>
  )
}

export default Search;