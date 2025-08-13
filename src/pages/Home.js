import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Specification from '../components/Specification'
import HomeProduct from '../components/HomeProduct'
import Calculator from '../components/Calculator'
import HomeAbout from '../components/HomeAbout'
import HomeFeature from '../components/HomeFeature'
import Stats from '../components/Stats'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeAbout/>
      <Specification/>
      <HomeProduct/>
      <HomeFeature/>
      <Stats/>
      <Calculator/>
    </div>
  )
}

export default Home
