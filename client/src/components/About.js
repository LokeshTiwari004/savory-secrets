import React from 'react'

function About() {
  const [data, setData] = useState({
    heading: "",
    subHeading: "",
    description: []
  });
  useEffect(() => {
    getdata('/api/about-page').then((d) => setData(d))
  }, []);
  return (
    <div>
      <h4>{data.subHeading}</h4>
      <h1>{data.heading}</h1>
      <ul>
        {data.description.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default About