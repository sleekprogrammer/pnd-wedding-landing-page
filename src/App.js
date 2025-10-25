import React, { useState, useRef } from 'react';
import './styles/fonts.css';
import './styles/Wedding.css';

import MusicPlayer from './components/MusicPlayer';
import HomeSection from './components/HomeSection';
import WelcomeSection from './components/WelcomeSection';
import CeremonySection from './components/CeremonySection';

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
    </div>
  );
}
