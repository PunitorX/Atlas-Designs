import React from 'react'
import HomeCards from '../components/HomeCards'
import Navbar from '../components/Navbar'
import NavbarTwo from '../components/NavbarTwo'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Navbar />
        <NavbarTwo />
        <Slider />
        {/* <HomeCards /> */}
    </div>
  )
}

export default Home