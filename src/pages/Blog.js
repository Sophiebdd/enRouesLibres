// src/pages/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const articles = [
  {
    id: 1,
    title: "Idées d'activités pour enfants de 0 à 3 ans",
    summary: "Découvrez des idées d'activités pour stimuler les sens et développer la créativité des tout-petits.",
  },
  {
    id: 2,
    title: "Les meilleurs livres jeunesse",
    summary: "Une sélection des meilleurs livres pour enfants de 0 à 3 ans, pour éveiller leur imagination.",
  },
  // Ajoutez d'autres articles ici
];

function Blog() {
  return (
    <div className="blog">
      <h2>Le Coin des Curieux 🐞</h2>
      <div className="blog-cards">
        {articles.map((article) => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <Link to={`/blog/${article.id}`} className="button">Lire la suite</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
