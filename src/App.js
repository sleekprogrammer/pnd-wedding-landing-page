import React, { useState, useRef, useEffect } from 'react';
import './styles/fonts.css';
import './styles/Wedding.css';
import './styles/HomeSection.css';
import './styles/WelcomeSection.css';
import './styles/CeremonySection.css';
import './styles/CelebrationSection.css';
import './styles/ConfirmationSection.css';
import './styles/GiftSection.css';
import './styles/MemoriesSection.css';
import './styles/FinalSection.css';
import './styles/CountdownSection.css';
import './styles/CountdownClock.css';

import MusicPlayer from './components/MusicPlayer';
import HomeSection from './components/HomeSection';
import WelcomeSection from './components/WelcomeSection';
import CeremonySection from './components/CeremonySection';
import CelebrationSection from './components/CelebrationSection';
import ConfirmationSection from './components/ConfirmationSection';
import GiftSection from './components/GiftSection';
import MemoriesSection from './components/MemoriesSection';
import FinalSection from './components/FinalSection';
import CountdownSection from './components/CountdownSection';

export default function App() {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play().then(() => setIsPlaying(true));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }

    const playAudioOnInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        document.removeEventListener("click", playAudioOnInteraction);
        document.removeEventListener("touchstart", playAudioOnInteraction);
      }
    };
    document.addEventListener("click", playAudioOnInteraction, { once: true });
    document.addEventListener("touchstart", playAudioOnInteraction, { once: true });
    return () => {
      document.removeEventListener("click", playAudioOnInteraction);
      document.removeEventListener("touchstart", playAudioOnInteraction);
    };
  }, []);

  return (
    <div className="wedding-container">
      <MusicPlayer 
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        onClick={togglePlayPause} 
      />
      <HomeSection />
      <WelcomeSection />
      <CeremonySection />
      <CelebrationSection />
      <ConfirmationSection />
      <GiftSection />
      <MemoriesSection />
      <FinalSection />
      <CountdownSection />
    </div>
  );
}