import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Specification from '../components/Specification'
import HomeProduct from '../components/HomeProduct'
import Calculator from '../components/Calculator'
import HomeAbout from '../components/HomeAbout'

import Stats from '../components/Stats'
import AdvancedFeatures from '../components/AdvancedFeatures'
import BecomeDealerBanner from '../components/BecomeDealerBanner'
import Demo from '../components/ProductPageSpec'
import ProductPageSpec from '../components/ProductPageSpec'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
<ProductPageSpec/>
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
