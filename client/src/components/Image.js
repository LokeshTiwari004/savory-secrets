import React, { useEffect, useState } from 'react'
import { get_img } from '../utils/getdata';

function Image({ url }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    get_img(url).then((reader) => {
      reader.onloadend = () => {
        setImage(reader.result)
      }
    })
  }, [url])
  return (
    <div>
      <img src={image} alt='A delicious Illustration' style={{ width: "400px", height: "300px" }} />
    </div>
  )
}

export default Image