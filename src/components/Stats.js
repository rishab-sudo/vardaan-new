import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Stats.css';

const statsData = [
  { id: 1, value: 25, label: 'Years Experience' },
  { id: 2, value: 100, label: 'Projects Done' },
  { id: 3, value: 50, label: 'Happy Clients' },
  { id: 4, value: 10, label: 'Awards Won' },
];

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 1));
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounts();
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    statsData.forEach((stat, index) => {
      let start = 1;
      const end = stat.value;
      const duration = 1000; // 1 second
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, 10);
    });
  };

  return (
    <Container  className="stats-section" ref={statsRef}>
      <div className="black-overlay" />
      <Container className="stats-content-container">
        {statsData.map((stat, idx) => (
          <div key={stat.id} className="stat-box">
            <p className="stat-count">{counts[idx]}+</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </Container>
    </Container>
  );
};

export default Stats;
