import React from "react";
import CountdownClock from "./CountdownClock";

import IconPD from "../assets/icons/icon-pd-v2.svg";
import Pnd from "../assets/icons/pnd.svg";

const WEDDING_DATE = new Date("2026-10-03T13:30:00+01:00");

export default function CountdownSection() {
  return (
    <section className="countdown-section-outer">
      <div className="countdown-frame">
        <div>
          <img src={IconPD} alt="IconPD" className="countdown-pd-icon" />
        </div>

        {/* Main Content */}
        <div className="countdown-frame-content">
          <div className="countdown-image-paper">
            <img src={Pnd} alt="Patricia&Decio" className="countdown-pnd-icon" />
          </div>
          <div className="countdown-text-paper">
            <p>
              Encontramo-nos daqui a:
            </p>
            <CountdownClock targetDate={WEDDING_DATE} />
          </div>
        </div>
      </div>
    </section>
  );
}
