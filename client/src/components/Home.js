import React, { useEffect, useState } from 'react'
import { get_json } from '../utils/getdata';
import Image from './Image';
import { Heading, Flex, Button, Box } from '@radix-ui/themes';

function Home() {
  const [data, setData] = useState({
    heading: "",
    subHeading: "",
    description: []
  });

  useEffect(() => {
    get_json('/home-page').then((json) => {
      setData(json)
    })
  }, []);
  return (
    <>
      <Box>
        <Heading as="h4" size="3">{data.subHeading}</Heading>
        <Heading as="h1" size="8">{data.heading}</Heading>
        <ul>
          {data.description.map((item) => <li key={item.id}>{item.value}</li>)}
        </ul>
        <Flex gap="3" direction={"row"} wrap={"nowrap"}>
          <Button variant="solid">Discover</Button>
          <Button variant="soft">Learn More</Button>
        </Flex>
      </Box>
      <Image url="/food-image" />
    </>
  )
}

export default Home