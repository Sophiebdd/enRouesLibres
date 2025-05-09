'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const articles = [
  {
    id: 1,
    title: "Idées d'activités pour enfants de 0 à 3 ans",
    content: "Contenu complet de l'article sur les activités...",
    date: "15 Mars 2024",
    author: "Sophie Bodard",
    category: "Activités",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Les meilleurs livres jeunesse",
    content: "Contenu complet de l'article sur les livres jeunesse...",
    date: "10 Mars 2024",
    author: "Sophie Bodard",
    category: "Lecture",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === parseInt(params.id));
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  if (!article) {
    notFound();
  }

  const handleLike = () => setLikes(likes + 1);
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* En-tête de l'article */}
      <div className="mb-8">
        <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 mb-4 inline-flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour au blog
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600 mb-6">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.author}</span>
          <span>•</span>
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            {article.category}
          </span>
        </div>
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />
      </div>

      {/* Contenu de l'article */}
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-gray-700 leading-relaxed">{article.content}</p>
      </div>

      {/* Section "J'aime" */}
      <div className="border-t border-gray-200 pt-8 mb-8">
        <button 
          onClick={handleLike}
          className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{likes} j'aime</span>
        </button>
      </div>

      {/* Section des commentaires */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Commentaires</h3>
        <div className="space-y-6 mb-8">
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold">
                    {comment.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="font-medium text-gray-900">Utilisateur</span>
              </div>
              <p className="text-gray-700">{comment}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleAddComment} className="space-y-4">
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Ajouter un commentaire
            </label>
            <textarea
              id="comment"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              placeholder="Votre commentaire..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Publier
          </button>
        </form>
      </div>
    </div>
  );
} 