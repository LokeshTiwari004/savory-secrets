import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import getdata from '../utils/getdata';
import Point from './Point';
import Image from './Image';
import ApiContext from '../Contexts/ApiContext';
import axios from 'axios';

function About() {
  const [points, setPoints] = useState([]);

  const baseAPIurl = useContext(ApiContext)
  useEffect(() => {
    (async function () {
      const res = await axios.get(`${baseAPIurl}/about-page`);
      setPoints(res.data.points)
    })();

    // getdata('/about-page').then((res) => {
    //   setPoints(res.data.points)
    // })
  }, []);

  return (
    <div>
      <Image url="/api/food-image" />
      {
        points.map(item => <Point key={item.id} value={item.value} />)
      }
    </div>
  )
}

export default About;