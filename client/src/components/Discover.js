import React, { useEffect, useState } from 'react'
import Search from './Search'
import ToggleButton from './ToggleButton'
import Filter from './Filter'

function Discover() {
  const [query, setQuery] = useState("Search")
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
      <ToggleButton toggleValue={["Veg", "Non-Veg"]} />
      <Filter
        name="Country"
        filter={country}
        onChange={onCountryChange}
        filterList={countryList}
      />
    </div>
  )
}

export default Discover