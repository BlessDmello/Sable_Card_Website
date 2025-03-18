// FlippingCard.jsx
import React, { useState, useEffect } from 'react';
import './FlippingCard.css';

const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prevState => !prevState);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flipping-card-container">
      <div className={`flipping-card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-face card-front">
          <img
            className="w-full mt-16"
            alt="Sable Debit Card"
            src="/61b78771b6d53e031df204a5-sable-card-debit-render-p-500-png.png"
          />
        </div>
        <div className="card-face card-back">
          <img
            className="w-full mt-16"
            alt="Sable Credit Card"
            src="/626a7b28ec05560030a525bd-v2-front-01-20-1--201-png.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;