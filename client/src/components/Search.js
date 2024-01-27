import React, { useState } from 'react'

function Search() {
  const [query, setQuery] = useState("Search")
  return (
    <div>
      <label htmlFor="search" >Search: </label>
      <input name="search" id="search" type="text" value={query} onChange={(e) => {
        setQuery(e.target.value)
      }} onFocus={(e) => { e.target.select() }} />
    </div>
  )
}

export default Search