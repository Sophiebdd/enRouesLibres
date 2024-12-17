// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Article from './pages/Article';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          {/*<h1>Le Minibus des Petits Aventuriers</h1>*/}
          {/*<h1>Les Petits Nomades</h1>*/}
          <h1>🚎 Les Ateliers en Roues Libres 🚐</h1>
          {/*<h1>Le Bus des Petits Curieux</h1>*/}
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/activities">Activités</Link>
            <Link to="/schedule">Itinéraire</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Le coin des curieux</Link> {/* Lien ajouté pour le blog */}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} /> {/* Route pour la page de blog */}
            <Route path="/blog/:id" element={<Article />} /> {/* Route pour chaque article */}
          </Routes>
        </main>
        <footer>
          <p>© 2024 Les Ateliers en Roues Libres</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
