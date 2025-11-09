import React from "react";
import IconPD from "../assets/icons/icon-pd-v2.svg";
import CandlesIcon from "../assets/icons/candles.svg";
import PhotoIcon from "../assets/icons/photo-polaroid.svg";

export default function MemoriesSection() {
  return (
    <section className="memories-section-outer">
      <div className="memories-frame">
        <div>
          <img src={IconPD} alt="IconPD" className="memories-pd-icon" />
        </div>

        {/* Main Content */}
        <div className="memories-frame-content">
          <h2 className="memories-title">Momentos para <br /> recordar</h2>
          <div className="memories-image-paper">
            <img src={CandlesIcon} alt="Candles" className="memories-candles-icon" />
          </div>
          <div className="memories-text-paper">
            <p>
              Carrega aqui as tuas fotos do nosso <br />
              dia especial para partilhares connosco! <br />
              Cada imagem é um pedacinho da nossa história.
            </p>
          </div>

          <div className="memories-upload-section"> {/* TODO: Update to upload photos somewhere */}
            <img src={PhotoIcon} alt="Upload" className="memories-upload-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
