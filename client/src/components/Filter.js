import React from 'react'
import { useState } from 'react'

function Filter({ name, type = 'text', filter, onChange, filterList }) {
  return (
    <div>
      <label htmlFor={name}>Filter By {name} </label>
      <input
        name={name}
        id={name}
        type={type}
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