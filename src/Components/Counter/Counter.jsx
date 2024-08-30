import React, { useState, useEffect, useRef } from "react";
import "./Counter.css";

function CountNumber({ target }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 1.0, // Trigger when 100% of the element is visible
      }
    );

    const currentRef = counterRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1000; // 1 second
      const steps = 100; // Number of steps for smoother animation
      const delay = duration / steps; // Delay between each step
      const increment = target / steps; // Increment per step

      let currentStep = 0;

      const updateCount = () => {
        currentStep++;
        setCount((prevCount) => {
          const nextCount = prevCount + increment;
          return currentStep < steps ? nextCount : target;
        });

        if (currentStep < steps) {
          setTimeout(updateCount, delay);
        }
      };

      updateCount();
    }
  }, [isVisible, target]);

  return (
    <div className="count" ref={counterRef}>
      {Math.floor(count)}+
    </div>
  );
}

const Counter = () => {
  return (
    <div className="counter-container">
      <div className="counter">
        <h4 className="count">
          <CountNumber target={80} />
        </h4>
        <p>Hospital Beds</p>
      </div>
      <div className="counter">
        <h4 className="count">
          <CountNumber target={700} />
        </h4>
        <p>Free Treatments</p>
      </div>
      <div className="counter">
        <h4 className="count">
          <CountNumber target={500000} />
        </h4>
        <p>Happy Patients</p>
      </div>
    </div>
  );
};

export default Counter;



