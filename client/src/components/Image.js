import React, { useEffect, useState } from 'react'
import getimage from '../getimage';

function Image({ url }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    (async function () {
      const file_reader = await getimage(url);
      file_reader.onloadend = () => {
        setImage(file_reader.result)
      }
    })();

    // getimage(url).then(fr => {
    //   fr.onloadend = () => {
    //     setImage(fr.result)
    //   }
    // })
  }, [url])
  return (
    <div>
      <img src={image} alt='A delicious Illustration' style={{ width: "100px", height: "100px" }} />
    </div>
  )
}

export default Image