import React from 'react'
import Navbar from '../components/Navbar'
import NavbarTwo from '../components/NavbarTwo'
import TopSlider from '../components/TopSlider'
import Slider from '../components/Slider'
import HomeCards from '../components/HomeCards'

const Home = () => {
  return (
    <div>
        <Navbar />
        <NavbarTwo />
        <TopSlider />
        {/* <Slider /> */}
        {/* <HomeCards /> */}
    </div>
  )
}

export default Home