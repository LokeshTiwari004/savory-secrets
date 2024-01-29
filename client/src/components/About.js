import { useState, useEffect } from 'react';
import { get_json } from '../utils/getdata';
import Point from './Point';
import Image from './Image';

function About() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    get_json('/about-page').then((json) => {
      setPoints(json.points)
    })
  }, []);

  return (
    <div>
      <Image url="/food-image" />
      {
        points.map(item => <Point key={item.id} value={item.value} />)
      }
    </div>
  )
}

export default About;