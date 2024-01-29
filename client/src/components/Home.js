import React, { useContext, useEffect, useState } from 'react'
// import getdata from '../utils/getdata';
import Image from './Image';
import Button from './Button'
import ApiContext from '../Contexts/ApiContext';
import axios from 'axios';

function Home() {
  const [data, setData] = useState({
    heading: "",
    subHeading: "",
    description: []
  });
  const baseAPIurl = useContext(ApiContext)

  useEffect(() => {
    (async function () {
      const response = await axios.get(`${baseAPIurl}/home-page`);
      setData(response.data)
    })();

    // getdata('/home-page').then((response) => {
    //   setData(response.data)
    // })
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