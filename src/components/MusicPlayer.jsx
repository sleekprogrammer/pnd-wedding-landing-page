import React from 'react';
import { Pause, Play } from 'lucide-react';

import Song from '../assets/music/Alex Warren - Ordinary.mp3';

export default function MusicPlayer({ isPlaying, onClick, audioRef }) {
  return (
    <>
      <button onClick={onClick} className="music-button">
        {isPlaying ? (
          <Pause style={{ width: '20px', height: '20px', color: '#2D1C01' }} />
        ) : (
          <Play style={{ width: '20px', height: '20px', color: '#2D1C01' }} />
        )}
      </button>

      <audio ref={audioRef} loop>
        <source src={Song} type="audio/mp3" />
      </audio>
    </>
  );
}