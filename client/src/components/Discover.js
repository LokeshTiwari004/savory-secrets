import React, { useEffect, useState } from 'react'
import Search from './Search'
import ToggleButton from './ToggleButton'
import Filter from './Filter'

function Discover() {
  // const [foodList, setFoodList] =useState([])
  // useEffect()
  return (
    <div>
      <Search />
      <ToggleButton toggleValue={["Veg", "Non-Veg"]} />
      <Filter filterBy="country" />
    </div>
  )
}

export default Discover