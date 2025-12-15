import React, { useEffect, useState } from "react";
import { FaTruckMoving } from "react-icons/fa"; // e-rickshaw like icon
import "./Preloader.css";

const Preloader = ({ onFinish }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 25); // 100 steps in 5 seconds

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="preloader">
      <div className="loader-box">

        {/* Rickshaw */}
        <FaTruckMoving
          className="rickshaw"
          style={{ left: `${100 - count}%` }}
        />

        {/* Line */}
        <div className="loader-line"></div>

        {/* Text */}
        <p className="loader-text">
          Charging and start {count}%
        </p>

      </div>
    </div>
  );
};

export default Preloader;
