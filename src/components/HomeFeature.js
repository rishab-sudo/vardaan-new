import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './HomeFeature.css';

const features = [
  { id: 1, title: 'Fast Service', desc: 'Quick and reliable', icon: <FaStar /> },
  { id: 2, title: 'Affordable', desc: 'Value for money', icon: <FaStar /> },
  { id: 3, title: 'Eco Friendly', desc: 'Saves the planet', icon: <FaStar /> },
  { id: 4, title: 'Modern Tech', desc: 'Latest innovation', icon: <FaStar /> },
  { id: 5, title: '24/7 Support', desc: 'Always there', icon: <FaStar /> },
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
