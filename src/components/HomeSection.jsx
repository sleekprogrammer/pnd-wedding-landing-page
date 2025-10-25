import React from 'react';

import homeBg from '../assets/images/home-bg.jpg';
import pnd from '../assets/icons/pnd.svg';

export default function HomeSection() {
  return (
    <section className="section home-section" id="home">
      <div className="relative flex items-center justify-center w-full h-screen px-4">
        {/* Background Image - local path */}
        <div 
          className="home-background"
          style={{
            backgroundImage: `url(${homeBg})`
          }}
        >
          <div className="home-overlay" />
        </div>

        <div className="home-content">
          <div className="home-date">
            3 de outubro de 2026
          </div>
          <div className="home-icon-wrapper">
            <img src={pnd} alt="Patricia&Decio" className="home-icon" />
          </div>
          <div className="home-names" />
          <div className="home-spacer" />
        </div>
      </div>
    </section>
  );
}
