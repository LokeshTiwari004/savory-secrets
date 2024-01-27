import React, { useState } from 'react'

function ToggleButton({ toggleValue }) {
  const [def, secondary] = toggleValue
  const [typical, setTypical] = useState(true)
  return (
    <div>
      <button onClick={() => { setTypical((typical) => !typical) }}>
        {typical ? def : secondary}
      </button>
    </div>
  )
}

export default ToggleButton