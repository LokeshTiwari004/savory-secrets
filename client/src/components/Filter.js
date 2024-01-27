import React from 'react'
import { useState } from 'react'

function Filter({ name, filter, onChange, filterList }) {
  return (
    <div>
      <label htmlFor={name}>Filter By {name} </label>
      <input
        name={name}
        id={name}
        type="text"
        value={filter.value}
        list={`${name}-list`}
        onChange={onChange}
        onFocus={(e) => { e.target.select() }}
      />
      <datalist id={`${name}-list`}>
        {filterList()}
      </datalist>
    </div>
  )
}

export default Filter