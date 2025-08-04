import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Specification from '../components/Specification'
import HomeProduct from '../components/HomeProduct'
import Calculator from '../components/Calculator'

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <Specification/>
      <HomeProduct/>
      <Calculator/>
    </div>
  )
}

export default Home
