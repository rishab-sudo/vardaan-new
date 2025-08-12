import React from 'react'
import { Container } from 'react-bootstrap'
import "./Specification.css"

const Specification = () => {
  return (
<Container fluid className='spec-fluid'>
  <Container className="spec-content-container">
    <div className='spec-left-wrapper'>
  <div className='spec-img-div'>
      <img className='spec-img' src={require("../assets/auto11.png")} alt=""/>
    </div>
    <div className='spec-left-boxs-div'>
<div  className='spec-left-boxs'>
  <p>130km</p>
  <p>Range</p>
</div>

<div  className='spec-left-boxs'>
  <p>130km</p>
  <p>Range</p>
</div>

<div  className='spec-left-boxs'>
  <p>130km</p>
  <p>Range</p>
</div>
    </div>
    </div>

    <div className='spec-right-wrapper'>
<p>Autoev R200</p>
<h2>Redefining <br/>Motorcycle<br/> performance</h2>
    </div>
  
</Container>
</Container>
  )
}

export default Specification

