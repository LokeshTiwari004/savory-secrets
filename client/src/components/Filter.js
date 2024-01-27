import React from 'react'
import { useState } from 'react'

function Filter({ filterBy }) {
  const [query, setQuery] = useState(filterBy)
  return (
    <div>
      <label htmlFor={`${filterBy}-filter`}>Filter By: </label>
      <input
        name={`${filterBy}-filter`}
        id={filterBy}
        type="text"
        value={query}
        list={`${filterBy}-list`}
        onChange={(e) => { setQuery(e.target.value) }}
        onFocus={(e) => { e.target.select() }}
      />
      <datalist id={`${filterBy}-list`}>
        <option value="India" />
        <option value="Nepal" />
        <option value="Bhutan" />
      </datalist>
    </div>
  )
}

export default Filter