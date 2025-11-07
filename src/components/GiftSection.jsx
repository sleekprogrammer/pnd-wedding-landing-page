import React from "react";
import IconPD from "../assets/icons/icon-pd-v2.svg";
import FlowerIcon from "../assets/icons/flower-icon-2.svg";
import EnvelopIcon from "../assets/icons/gift-envelop.svg";

export default function GiftSection() {
  return (
    <section className="gift-section-outer">
      <div className="gift-frame">
        <div className="gift-icon-paper">
          <img src={IconPD} alt="IconPD" className="gift-pd-icon" />
        </div>

        {/* Main Content */}
        <div className="gift-frame-content">
          <h2 className="gift-title">Presente</h2>
          <div className="gift-image-paper">
            <img src={FlowerIcon} alt="Flower" className="gift-flower-icon" />
          </div>
          <div className="gift-text-paper">
            <p>
              <span className="gift-text-bold">
                A vossa presença é o nosso melhor presente, <br/>
              </span>
              mas se desejarem contribuir, poderão <br />
              fazê-lo monetariamente no nosso dia < br/>
              ou através do nosso iban:
            </p>

            <p> {/* TODO: Update p or div to copy text */}
              <div className="gift-iban-wrapper">
                <span className="gift-text-iban">
                  PT50 0000 0000 0000 0000 0000 00<br />
                </span>
                <span className="gift-text-aux">
                  (toque para copiar)
                </span>
              </div>
            </p>
          </div>

          <div className="gift-envelop-section">
            <img src={EnvelopIcon} alt="Envelop" className="gift-envelop-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
