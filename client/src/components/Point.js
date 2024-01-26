import React from 'react';

function Point({ value }) {
  const { main, subPoints } = value;
  return (
    <div>
      <h3>
        {main}
      </h3>
      <ul>
        {
          subPoints.map(item =>
            <li key={item.id}>{item.value}</li>
          )
        }
      </ul>
    </div>
  )
}

export default Point