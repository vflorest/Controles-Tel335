// src/App.js
import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import GifScreen from './GifScreen';
import Likes from './Likes';
import Home from './Home';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/gif" />} />
        <Route path="/gif" element={<GifScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
    </Router>
  );
}

export default App;
