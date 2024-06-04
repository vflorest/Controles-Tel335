import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import animatedGif from './images/animatedGif.gif';

const GifScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2200); // Duración del GIF en milisegundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="GifScreen flex justify-center items-center h-screen bg-black">
      <img src={animatedGif} alt="GIF de bienvenida" className="max-w-full max-h-full" />
    </div>
  );
};

export default GifScreen;
