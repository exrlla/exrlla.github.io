import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CursorTrail from './components/CursorTrail';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Art from './pages/Art';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CursorTrail />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/art" element={<Art />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
