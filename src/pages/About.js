import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container-fluid about-wrapper">

      {/* Section 1 */}
      <div className="about-section container">
        <div className="about-image">
          <img src={require("../assets/1 - Edited.png")} alt="VARDAAN E-RICKSHAW" />
        </div>
        <div className="about-text">
          <h2>VARDAAN E-RICKSHAW</h2>
          <p>
           Vardaan EV E-Rickshaw Company is committed to revolutionizing urban mobility with eco-friendly and affordable electric rickshaws. Our vehicles are designed to provide a sustainable, cost-effective, and comfortable solution for last-mile transportation. We are proud to contribute to a cleaner environment by offering an alternative to traditional fuel-powered vehicles.
<br/> <br/>
At Vardaan, we focus on high-quality craftsmanship, ensuring durability and safety in every e-rickshaw we manufacture. Our vehicles are equipped with advanced technology for smooth performance, low maintenance, and long-lasting battery life. We believe in making electric transportation accessible to all, empowering drivers and customers alike.
<br/> <br/>
Our vision is to promote green energy solutions and contribute to a greener future for generations to come. With an emphasis on innovation and customer satisfaction, Vardaan EV E-Rickshaw is committed to setting new standards in the e-vehicle industry. Join us in driving towards a cleaner and brighter tomorrow.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="about-section container reverse">
        <div className="about-image">
          <img src={require("../assets/1 - Edited.png")} alt="Section Two" />
        </div>
        <div className="about-text">
          <h2>Quality and Innovation</h2>
          <p>At Vardaan, we believe in the power of quality and innovation. Our electric rickshaws are designed to be robust, durable, and high-performing, ensuring that drivers and passengers enjoy a comfortable and safe journey. We use cutting-edge technology to ensure that every rickshaw is not only energy-efficient but also equipped with advanced safety features. From the chassis to the battery, each part is carefully engineered to offer long-lasting performance with minimal maintenance costs. We take pride in our rigorous testing process, which guarantees that our vehicles meet the highest standards of safety, reliability, and performance. Our e-rickshaws are powered by advanced lithium-ion batteries, ensuring long battery life, fast charging times, and better overall performance. 
            
            These batteries are designed to be both efficient and environmentally friendly, reducing the need for frequent replacements and contributing to the long-term sustainability of our products. The design of our vehicles prioritizes both comfort and practicality, with ample space for passengers, high-quality seating, and smooth suspension to ensure a comfortable ride..</p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="about-section container">
        <div className="about-image">
          <img src={require("../assets/1 - Edited.png")} alt="Section Three" />
        </div>
        <div className="about-text">
          <h2>Empowering Local Entrepreneurs</h2>
          <p>At Vardaan, we are not just in the business of manufacturing e-rickshaws; we are also dedicated to empowering local entrepreneurs and creating job opportunities. By providing affordable, reliable, and eco-friendly transportation solutions, we enable local drivers to enter the electric mobility industry with confidence. Our vehicles are designed to help them increase their earnings while making a positive impact on the environment. We understand that the success of our customers is crucial to our success as a company. That’s why we offer ongoing support, training, and maintenance services to ensure that every driver and operator can maximize the benefits of our e-rickshaws. Whether it’s providing training on vehicle operation, offering guidance on battery maintenance, or offering timely repairs, Vardaan is committed to being a reliable partner in the journey of every entrepreneur.</p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="about-section container reverse">
        <div className="about-image">
          <img src={require("../assets/1 - Edited.png")} alt="Section Four" />
        </div>
        <div className="about-text">
          <h2>A Commitment to Sustainability</h2>
          <p>Our company places sustainability at the heart of all our activities. We are committed to minimizing transportation’s environmental footprint by advocating for electric mobility as the future of urban transit. Our e-rickshaws are engineered for zero emissions, aiding in the reduction of both air and noise pollution in urban areas. We contribute to a cleaner environment and help preserve natural resources for future generations by embracing electric technology.
            <br/>
            Vardaan EV E-Rickshaw Company aims to motivate communities to embrace green mobility practices. In the course of our ongoing growth, we aspire to work together with governments, organizations, and other parties involved to advocate for clean energy and encourage the broad adoption of electric vehicles.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
