import React, { useEffect, useState, useContext } from 'react'
// import getimage from '../utils/getimage';
import ApiContext from '../Contexts/ApiContext';
import axios from 'axios';

function Image({ url }) {
  const [image, setImage] = useState("");
  const baseAPIurl = useContext(ApiContext)
  useEffect(() => {
    (async function () {
      const response = await axios.get(`${baseAPIurl}${url}`);
      setImage(response.data.image)
      // file_reader.onloadend = () => {
      //   setImage(file_reader.result)
      // }
    })();
    // (async function () {
    //   const file_reader = await getimage(url);
    //   file_reader.onloadend = () => {
    //     setImage(file_reader.result)
    //   }
    // })();

    // getimage(url).then(fr => {
    //   fr.onloadend = () => {
    //     setImage(fr.result)
    //   }
    // })
  }, [url, baseAPIurl])
  return (
    <div>
      <img src={image} alt='A delicious Illustration' style={{ width: "100px", height: "100px" }} />
    </div>
  )
}

export default Image