import React from 'react'
import { useState, useEffect } from 'react';
import getdata from '../getdata';
import Point from './Point';
import Image from './Image';

function About() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    // (async function () {
    //   const data = await getdata("/api/about-page");
    //   setPoints(data.points)
    // })();

    getdata('/api/about-page').then((d) => {
      setPoints(d.points)
    })
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