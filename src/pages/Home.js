import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Specification from '../components/Specification'
import HomeProduct from '../components/HomeProduct'
import Calculator from '../components/Calculator'
import HomeAbout from '../components/HomeAbout'

import Stats from '../components/Stats'
import AdvancedFeatures from '../components/AdvancedFeatures'
import BecomeDealerBanner from '../components/BecomeDealerBanner'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <HomeAbout/>
      <Specification/>
      <HomeProduct/>
      <AdvancedFeatures/>
    <Calculator/>
      <Stats/>
      <BecomeDealerBanner/>
    </div>
  )
}

export default Home
