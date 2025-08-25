import React from 'react'
import { Container } from 'react-bootstrap'
import Button from "../components/Button"
import "./Button.css"
import "./BecomeDealerBanner.css"

const BecomeDealerBanner = () => {
  return (
 <Container fluid className='becomeD-banner-section'>
<Container className='becomeD-content-container'>
     <div className="feature-tag-heading-div">
      {/* <p className='page-tag-heading about-tag-heading' style={{color:"#000"}}>Become A Dealer</p> */}
        </div>

        <div className='BecomeD-text-div'>
<h2 className='page-heading mt-2 heading-text-left'>Join Vardaan EV Dealers Network</h2>
<p>Become a dealer or find a nearby one – We are your partner in success by delivering reliable three-wheeled vehicles around the globe.</p>
<div className='becomeD-btn-div'>
  <Button text="Become A Dealer" className="outline-btn" id="outline-btn" link="/dealer" />
  <Button text="Contact Us" className="outline-btn" id="outline-btn" link="/contact" />
</div>
</div>
</Container>
 </Container>
  )
}

export default BecomeDealerBanner
