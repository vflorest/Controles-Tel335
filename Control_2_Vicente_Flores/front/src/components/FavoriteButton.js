import React from 'react';

const FavoriteButton = ({ onViewFavorites }) => {
  return (
    <button
      onClick={onViewFavorites}
      className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold"
    >
      Ver mis favoritos
    </button>
  );
};

export default FavoriteButton;
