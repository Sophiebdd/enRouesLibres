// src/pages/Article.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Article.css';

const articles = [
  {
    id: 1,
    title: "Idées d'activités pour enfants de 0 à 3 ans",
    content: "Contenu complet de l'article sur les activités...",
  },
  {
    id: 2,
    title: "Les meilleurs livres jeunesse",
    content: "Contenu complet de l'article sur les livres jeunesse...",
  },
  // Ajoutez d'autres articles ici
];

function Article() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  const [likes, setLikes] = useState(0); // État pour les "j'aime"
  const [comments, setComments] = useState([]); // État pour les commentaires
  const [newComment, setNewComment] = useState(""); // État pour le commentaire en cours de rédaction

  if (!article) {
    return <p>Article non trouvé</p>;
  }

  // Fonction pour gérer le clic sur le bouton "j'aime"
  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Fonction pour gérer l'ajout d'un commentaire
  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment(""); // Réinitialise le champ de texte
    }
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>

      {/* Section "J'aime" */}
      <div className="like-section">
        <button onClick={handleLike} className="like-button">❤️<span>{likes}</span></button>
        
      </div>

      {/* Section des commentaires */}
      <div className="comments-section">
        <h3>Commentaires</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Ajouter un commentaire"
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Article;
