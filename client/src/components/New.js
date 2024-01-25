import { useEffect, useState } from "react"
import getdata from "../getdata";

function New() {
  const [v, setv] = useState('New')
  useEffect(() => {
    getdata('/api/endpoint').then((d) => {
      setv(d.v)
    })
  }, []);
  return (
    <h4>{v}</h4>
  )
}

export default New