import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import GifScreen from './animatedgif';



function App () {
  const [showGif, setShowGif] = useState(true);

  const handleGifEnd = () => {
    setShowGif(false);
  };
  
  
  return (
    <div className="App">
      {showGif ? (
        <GifScreen onGifEnd={handleGifEnd} /> 
      ) : (
        <div className="App-header text-center text-5xl font-semibold">
          <span className="block lg:inline">Bienvenido a</span>
          <span className="block lg:inline">Facts de Chuck Norris</span>
          <span className="block lg:inline">Search Engine</span>
        </div>
        
      )}

      <div className="mt-8 flex flex-col gap-y-4">
          <button id="sign_in" 
            className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-al
              py-3 rounded-xl bg-violet-500 text-white text-lg fonto-bold">Sign in</button>
      </div>
    </div>
  );
}

export default App;
