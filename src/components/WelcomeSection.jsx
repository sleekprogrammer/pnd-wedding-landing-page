import React from 'react';

import welcomeBg from '../assets/images/welcome-bg.png';
import pattern from '../assets/images/texture-pattern.jpg';
import iconPD from '../assets/icons/icon-pd.svg';

export default function WelcomeSection() {
  const patternImage = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fba7a1631fdbf6c73b5a65/479c18f95_clear-white-plaster-texture-pattern.jpg';

  return (
    <>
      {/* Welcome Image Separator - now fixed and overlays the welcome section */}
      <div className="welcome-separator-fixed">
        <img src={welcomeBg} alt="Welcome Separator" />
      </div>

      {/* Welcome Section */}
      <section className="section welcome-section" id="welcome">
        {/* Pattern backgrounds */}
        <div 
          className="pattern-background pattern-left"
          style={{ backgroundImage: `url('${pattern}')` }}
        />
        <div 
          className="pattern-background pattern-right"
          style={{ backgroundImage: `url('${pattern}')` }}
        />

        {/* Semi-transparent overlay */}
        <div className="welcome-overlay" />

        {/* Content */}
        <div className="welcome-content-wrapper">
          <div className="welcome-content">
            {/* Icon PD */}
            <div className="welcome-icon">
              <span className="welcome-icon-text">PD</span>
            </div>

            {/* Welcome Text */}
            <div className="welcome-text">
              <p>
                Há dias que ficam para sempre na memória — o{' '}
                <span className="welcome-text-bold">3 de outubro de 2026</span>
                {' '}será um deles.
              </p>
              <p>
                E nada nos deixaria mais felizes do que celebrar ao vosso lado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}