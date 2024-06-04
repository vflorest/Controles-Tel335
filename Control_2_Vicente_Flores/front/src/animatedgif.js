// animatedGif.js
import React, { useEffect } from 'react';
import animatedGif from './images/animatedGif.gif';

const GifScreen = ({ onGifEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onGifEnd();
    }, 2000); // Cambia el tiempo según la duración del GIF en milisegundos

    return () => clearTimeout(timer);
  }, [onGifEnd]);

  return (
    <div className="GifScreen">
      <img src={animatedGif} alt="GIF de bienvenida" />
    </div>
  );
};

export default GifScreen;
