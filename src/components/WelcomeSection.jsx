import React from 'react';
import welcomeBg from '../assets/images/welcome-bg.png';
import { ReactComponent as IconPD } from '../assets/icons/icon-pd.svg';

export default function WelcomeSection() {
  return (
    <section className="welcome-section-outer">
      {/* Frame Container */}
      <div className="welcome-frame">
        {/* Overlapping full-width torn image at the top */}
        <div className="welcome-image-torn-top">
          <img src={welcomeBg} alt="Welcome" className="welcome-image-torn-edge" />
        </div>
        {/* Content inside frame */}
        <div className="welcome-frame-content">
          <div className="welcome-icon-paper">
            <IconPD className="welcome-icon-img" />
          </div>
          <div className="welcome-text-paper">
            <p>
              Há dias que ficam para sempre na memória — o <span className="welcome-text-bold">3 de outubro de 2026</span> será um deles.
            </p>
            <p>
              E nada nos deixaria mais felizes do que celebrar ao vosso lado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}