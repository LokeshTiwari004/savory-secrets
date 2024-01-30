import React from 'react'

function ToggleButton({ value, onToggle }) {
  return (
    <div>
      <button onClick={onToggle}>
        {value.isPrimary ? value.primary : value.secondary}
      </button>
    </div>
  )
}

export default ToggleButton