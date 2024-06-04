import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import FactList from './components/FactList';
import { searchFacts } from './Api'
import FavoriteButton from './components/FavoriteButton';
import { CSSTransition } from 'react-transition-group';
import './styles/Home.css';

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setShowSearch(true);
    }, 3000); // Duración del mensaje de bienvenida

    return () => clearTimeout(welcomeTimer);
  }, []);

  const handleSearch = async (query) => {
    try {
      const facts = await searchFacts(query);
      setResults(facts.result);
      console.log('Search results:', facts);
      console.log('Si estoy recibiendo los resultados, pero no sé por qué ya no se muestran:(');
    } catch (error) {
      alert('Error fetching data');
    }
  };

  const handleAddFavorite = (fact) => {
    const updatedFavorites = [...favorites, fact];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleViewFavorites = () => {
    setResults(favorites);
  };

  const handleRemoveFavorite = (factId) => {
    const updatedFavorites = favorites.filter(fact => fact.id !== factId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="Home">
      <CSSTransition
        in={showWelcome}
        timeout={1000}
        classNames="fade"
        unmountOnExit
        onExited={() => setShowSearch(true)}
      >
        <div className="App-header text-center text-5xl font-semibold">
          Bienvenido a facts de Chuck Norris
        </div>
      </CSSTransition>

      {showSearch && (
        <div className="mt-8 flex flex-col items-center justify-center min-h-screen">
            <SearchForm onSearch={handleSearch} onViewFavorites={handleViewFavorites} />
      </div>
      )}

    <FactList facts={results} 
        onAddFavorite={handleAddFavorite} 
        onRemoveFavorite={handleRemoveFavorite}  />
    </div>
  );
};

export default Home;




