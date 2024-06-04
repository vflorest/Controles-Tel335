// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className=" bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg hover:underline">Búsqueda</Link>
        <Link to="/likes" className="text-white text-lg hover:underline">Likes</Link>
      </div>
    </nav>
  );
};

export default NavBar;
