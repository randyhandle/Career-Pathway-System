import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [temp, setTemp] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5555/')
        .then((res) => {
            setTemp(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    })
    
  return (
    <></>
  )
}

export default Home