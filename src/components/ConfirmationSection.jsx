import React from "react";
import IconPD from "../assets/icons/icon-pd-v2.svg";
import FlowersIcon from "../assets/icons/flowers.svg";
import EnvelopIcon from "../assets/icons/confirm-presence.svg";

export default function ConfirmationSection() {
  return (
    <section className="confirmation-section-outer">
      <div className="confirmation-frame">
        <div className="confirmation-icon-paper">
          <img src={IconPD} alt="IconPD" className="confirmation-pd-icon" />
        </div>

        {/* Main Content */}
        <div className="confirmation-frame-content">
          <h2 className="confirmation-title">Confirmação</h2>
          <div className="confirmation-image-paper">
            <img src={FlowersIcon} alt="Flowers" className="confirmation-flowers-icon" />
          </div>
          <div className="confirmation-text-paper">
            <p>
              Ficaremos muito felizes por contar
              convosco neste dia tão especial! <br />
              <br />
              Confirmem a vossa presença até <br />
              <span className="confirmation-text-bold">
                31 de julho de 2026 
              </span>
              e deixem-nos <br />
              também duas músicas que gostariam
              de ouvir (e dançar)!
            </p>
          </div>

          <div className="confirmation-envelop-section">
            <a href="https://www.typeform.com/" target="_blank" rel="noopener noreferrer">
              <img src={EnvelopIcon} alt="Envelop" className="confirmation-envelop-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
