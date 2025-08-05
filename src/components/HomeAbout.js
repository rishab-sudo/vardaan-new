import React from 'react'
import "./HomeAbout.css"
import { Container } from 'react-bootstrap'

const HomeAbout = () => {
  return (
<Container fluid className="home-about-fluid">
<Container className="home-about-content-container">
    <div className='about-left-wrapper'>
<img className='home-about-img'  src={require("../assets/about1.jpg")} alt="about"/>
</div>

    <div className='about-right-wraper'>
        <div className='about-text-wrapper'>
<p>About Evlon</p>
<h2>Zero Emissions, Infinite Possibility</h2>
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in metus et purus gravida sagittis.
     Donec arcu id ultricies lacinia.<br/>
     Praesent bibendum urna sit amet ex scelerisque, vitae pellentesque tellus dignissim. Sed viverra lacus ipsum, ut imperdiet neque.
     </p>
  
 <p>Our Vision</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

 <p>Our Mission</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
   </div>
</Container>
</Container>
  )
}

export default HomeAbout
