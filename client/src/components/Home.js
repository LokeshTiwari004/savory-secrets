import React, { useEffect, useState } from 'react'
import getdata from '../utils/getdata';
import Image from './Image';
import Button from './Button'

function Home() {
  const [data, setData] = useState({
    heading: "",
    subHeading: "",
    description: []
  });
  useEffect(() => {
    // (async function () {
    //   const data = await getdata("/api/home-page");
    //   setData(data)
    // })();

    getdata('/api/home-page').then((d) => {
      setData(d)
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
      <Image url="/api/food-image" />
    </>
  )
}

export default Home