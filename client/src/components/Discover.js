import React, { useState } from 'react'
import Search from './Search'
import ToggleButton from './ToggleButton'
import Filter from './Filter'

function Discover() {
  // ##############################################
  // this stores irl search entry 
  const [query, setQuery] = useState({
    value: "Search",
    suggestions: [],
  })
  const onQueryChange = (e) => {
    setQuery(preQuery => ({
      ...preQuery,
      value: e.target.value,
    }))
  }
  // ----------------------------------------------

  // ##############################################
  // this stores veg or non-veg category 
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
  // ----------------------------------------------

  // ##############################################
  // this store the country filter for the 
  const [country, setCountry] = useState({
    value: "",
    suggetions: [],
  })
  const onCountryChange = (event) => {
    const value = event.target.value
    setCountry((preState) => ({
      ...preState,
      value: value,
    }))
  }
  const countryList = () => {
    return country.suggetions.map(suggetion => <option key={suggetion.id} value={suggetion.value} />)
  }
  // ----------------------------------------------

  return (
    <div>
      <Search query={query} onChange={onQueryChange} />
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