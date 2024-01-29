import React from 'react'

function Search({ query, onChange }) {
  return (
    <div>
      <label htmlFor="search" >Search: </label>
      <input
        name="search"
        id="search"
        type="text"
        value={query.value}
        onChange={onChange}
        onFocus={(e) => {
          e.target.select()
        }} />
      <datalist>
        {
          query.suggestions.map((suggestion) => <option key={suggestion.id} value={suggestion.value} />)
        }
      </datalist>
    </div>
  )
}

export default Search