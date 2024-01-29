import React, { useEffect, useState } from 'react'
import { get_json } from '../utils/getdata';
import Image from './Image';
import Button from './Button'

function Home() {
  const [data, setData] = useState({
    heading: "",
    subHeading: "",
    description: []
  });

  useEffect(() => {
    get_json('/home-page').then((json) => {
      setData(json)
    })
  }, []);
  return (
    <>
      <div>
        <h4>{data.subHeading}</h4>
        <h1>{data.heading}</h1>
        <ul>
          {data.description.map((item) => <li key={item.id}>{item.value}</li>)}
        </ul>
        <Button value="Discover" />
        <Button value="Learn More" />
      </div>
      <Image url="/food-image" />
    </>
  )
}

export default Home