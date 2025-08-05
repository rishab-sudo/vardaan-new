import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './HomeFeature.css';

const features = [
  { id: 1, title: 'Energy Efficient', desc: 'Runs on a battery and consumes 1 unit of power for every 10 Kms', icon: <FaStar /> },
  { id: 2, title: 'Best Performance', desc: 'Vardaan EV E-Rickshaw delivers unmatched performance, efficiency, and reliability.', icon: <FaStar /> },
  { id: 3, title: 'Eco Friendly', desc: 'E-rickshaws do not add to the growing air pollution because they don’t release smoke.', icon: <FaStar /> },
  { id: 4, title: 'Advance Technology', desc: 'High-quality materials and advanced technology are employed to guarantee long-lasting operation.', icon: <FaStar /> },
  { id: 5, title: 'Comfertable Ride', desc: 'Drivers and passengers can travel in comfort and without tiredness because to the impact-resistance, noise-free, and vibration-free ride.', icon: <FaStar /> },
  { id: 6, title: 'User Friendly', desc: 'Easy to use', icon: <FaStar /> },
];

const HomeFeature = () => {
  return (
    <Container fluid className="home-feature-section">
      <Container className='home-feature-content-container'>
        <Row>
          {features.map((feature) => (
            <Col
              key={feature.id}
              xs={12}
              sm={12}
              md={6}
              lg={4}
              className="mb-4 d-flex justify-content-center"
            >
              <div className="feature-card">
                <div className="overlay" />
                <div className="feature-content">
                  <div className="icon">{feature.icon}</div>
                  <h5>{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default HomeFeature;
