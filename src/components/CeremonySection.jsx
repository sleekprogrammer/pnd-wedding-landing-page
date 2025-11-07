import React from "react";
import IconPD from "../assets/icons/icon-pd-v2.svg";
import ChurchIcon from "../assets/icons/church.svg";
import FlowerIcon from "../assets/icons/flower-icon-1.svg";
import LocationIcon from "../assets/icons/location.svg";

export default function CeremonySection() {
  return (
    <section className="ceremony-section-outer">
      <div className="ceremony-frame">
        <div className="ceremony-icon-paper">
          <img src={IconPD} alt="IconPD" className="ceremony-pd-icon" />
        </div>

        {/* Main Content */}
        <div className="ceremony-frame-content">
          <h2 className="ceremony-title">Cerimónia</h2>
          <div className="ceremony-image-paper">
            <img src={ChurchIcon} alt="Church" className="ceremony-church-icon" />
          </div>
          <div className="ceremony-text-paper">
            <p>
              Igreja da Paróquia da <br />
              <span className="ceremony-text-bold">
                Nossa Senhora da Encarnação | 13h30
              </span>
            </p>

            <img src={FlowerIcon} alt="Flower" className="ceremony-flower-icon" />

            <p className="ceremony-address">
              R. Padre Manuel Carlos da Silva 29, <br />
              Estreito de Câmara de Lobos
            </p>
          </div>

          <div className="ceremony-location-section">
            <a href="https://maps.app.goo.gl/q3imUmQyKUDqhmFX9" target="_blank" rel="noopener noreferrer">
              <img src={LocationIcon} alt="Location" className="ceremony-location-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
