import React, { useEffect, useState } from 'react'
import Search from './Search'
import ToggleButton from './ToggleButton'
import Filter from './Filter'

function Discover() {
  const [query, setQuery] = useState({
    search: {
      value: "search",
      suggetions: []
    }
  })
  // const [query, setQuery] = useState("Search")
  const [Veg, setVeg] = useState({
    primary: "Veg",
    secondary: "Non-Veg",
    isPrimary: true
  });
  const toggleVeg = () => {
    setVeg((preState) => {
      return {
        ...preState,
        isPrimary: !preState.isPrimary
      }
    })
  }
  const [country, setCountry] = useState({
    value: "",
    suggetions: ["Bharat", "Nepal", "Bhutan"],
    expected: false
  })
  const onCountryChange = (event) => {
    const value = event.target.value
    setCountry((preState) => ({
      ...preState,
      value: value,
      expected: preState.suggetions.includes(value)
    }))
  }
  const countryList = () => {
    return country.suggetions.map(suggetion => <option key={suggetion} value={suggetion} />)
  }
  return (
    <div>
      <Search query={query} setQuery={setQuery} />
      <ToggleButton value={Veg} onToggle={toggleVeg} />
      <Filter
        name="Country"
        type='text'
        filter={country}
        onChange={onCountryChange}
        filterList={countryList}
      />
    </div>
  )
}

export default Discover