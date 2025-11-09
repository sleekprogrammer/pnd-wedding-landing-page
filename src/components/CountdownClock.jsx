import React, { useEffect, useState } from "react";

function getTimeRemaining(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  const total = Math.max(diff, 0);

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function CountdownClock({ targetDate }) {
  const [remaining, setRemaining] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-clock">
      <div className="countdown-value">
        <span className="countdown-number">{remaining.days}</span>
        <span className="countdown-label">Dias</span>
      </div>
      <div className="countdown-divider" />
      <div className="countdown-value">
        <span className="countdown-number">{remaining.hours}</span>
        <span className="countdown-label">Horas</span>
      </div>
      <div className="countdown-divider" />
      <div className="countdown-value">
        <span className="countdown-number">{remaining.minutes}</span>
        <span className="countdown-label">Min.</span>
      </div>
      <div className="countdown-divider" />
      <div className="countdown-value">
        <span className="countdown-number">{remaining.seconds}</span>
        <span className="countdown-label">Seg.</span>
      </div>
    </div>
  );
}
