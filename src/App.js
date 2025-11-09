import React, { useState, useRef } from 'react';
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="wedding-container">
      <MusicPlayer 
        isPlaying={isPlaying} 
        onClick={toggleMusic} 
        audioRef={audioRef} 
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