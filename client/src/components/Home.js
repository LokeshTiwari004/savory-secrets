import React, { useEffect, useState } from 'react'
import getdata from '../getdata';

function Home() {
  const [data, setData] = useState({
    heading: "",
    subHeading: "",
    description: []
  });
  useEffect(() => {
    getdata('/api/home-page').then((d) => setData(d))
  }, []);
  return (
    <div>
      <h4>{data.subHeading}</h4>
      <h1>{data.heading}</h1>
      <ul>
        {data.description.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Home