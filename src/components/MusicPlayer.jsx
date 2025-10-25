import React from 'react';
import { Pause, Play } from 'lucide-react';

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
        {/* Add your music source here */}
        {/* <source src="/path-to-music.mp3" type="audio/mpeg" /> */}
      </audio>
    </>
  );
}