import React from 'react';
import finalBg from '../assets/images/final-bg.png';
import { ReactComponent as IconPD } from '../assets/icons/icon-pd.svg';

export default function FinalSection() {
  return (
    <section className="final-section-outer">
      {/* Frame Container */}
      <div className="final-frame">
        {/* Overlapping full-width torn image at the top */}
        <div className="final-image-torn-top">
          <img src={finalBg} alt="Final" className="final-image-torn-edge" />
        </div>
        {/* Content inside frame */}
        <div className="final-frame-content">
          <div className="final-icon-paper">
            <IconPD className="final-icon-img" />
          </div>
          <div className="final-text-paper">
            <p>
              O nosso coração transborda de felicidade ao pensar que em breve viveremos este dia inesquecível rodeados das pessoas que mais amamos.
            </p>
            <p>
              Esperamos ansiosamente por partilhar convosco este momento único e cheio de amor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}