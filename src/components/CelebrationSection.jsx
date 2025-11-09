import React from "react";
import IconPD from "../assets/icons/icon-pd-v2.svg";
import PartyIcon from "../assets/icons/party.svg";
import GlassesIcon from "../assets/icons/glasses.svg";
import LocationIcon from "../assets/icons/location.svg";

export default function CelebrationSection() {
  return (
    <section className="celebration-section-outer">
      <div className="celebration-frame">
        <div className="celebration-icon-paper">
          <img src={IconPD} alt="IconPD" className="celebration-pd-icon" />
        </div>

        {/* Main Content */}
        <div className="celebration-frame-content">
          <h2 className="celebration-title">Celebração</h2>
          <div className="celebration-image-paper">
            <img src={PartyIcon} alt="Party" className="celebration-party-icon" />
          </div>
          <div className="celebration-text-paper">
            <p>
              <span className="celebration-text-bold">
                Quinta do Furão | 17h00
              </span>
            </p>

            <img src={GlassesIcon} alt="Glasses" className="celebration-glasses-icon" />

            <p className="celebration-address">
              Estrada da Quinta do Furão 6, <br />
              9230-082 Santana
            </p>
          </div>
          <div className="celebration-location-section">
            <a href="https://maps.app.goo.gl/sbCWbp2NUv9qBLBR9" target="_blank" rel="noopener noreferrer">
              <img src={LocationIcon} alt="Location" className="celebration-location-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
