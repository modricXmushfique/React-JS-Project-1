import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png'; // ✅ File must exist

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Our cutting-edge platform is designed to provide the best learning experience.</p>
        <button className='btn'>
          Get Started <img src={dark_arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;

















































