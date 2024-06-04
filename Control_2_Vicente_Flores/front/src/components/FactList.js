import React from 'react';

const FactList = ({ facts, onAddFavorite, onRemoveFavorite, showLikeButton = true }) => {
  return (
    <div className="results mt-8 w-full max-w-md mx-auto">
      {facts.length === 0 ? (
        <p>No se encontraron resultados</p>
      ) : (
        facts.map((fact) => (
          <div key={fact.id} className="fact bg-white p-4 rounded shadow mb-4">
            <p>{fact.value}</p>
            <p><strong>Fecha de creación:</strong> {fact.created_at}</p>
            {fact.categories.length > 0 && (
              <p><strong>Categorías:</strong> {fact.categories.join(', ')}</p>
            )}
            {showLikeButton && (
              <button
                onClick={() => onAddFavorite(fact)}
                className="mt-2 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded mr-2"
              >
                Me gusta
              </button>
            )}
            <button
              onClick={() => onRemoveFavorite(fact.id)}
              className="mt-2 py-2 px-4 bg-red-500 hover:bg-red-700 text-white rounded"
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FactList;
