import React, { useState, useEffect } from 'react';
import FactList from './components/FactList';

const Likes = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (factId) => {
    const updatedFavorites = favorites.filter(fact => fact.id !== factId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="Likes min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-center text-5xl font-semibold my-8">Mis Likes</h1>
      <FactList 
        facts={favorites} 
        onAddFavorite={() => {}} 
        onRemoveFavorite={handleRemoveFavorite} 
        showLikeButton={false}
      />
    </div>
  );
};

export default Likes;
