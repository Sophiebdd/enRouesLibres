import React from 'react';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: "Idées d'activités pour enfants de 0 à 3 ans",
    summary: "Découvrez des idées d'activités pour stimuler les sens et développer la créativité des tout-petits.",
    date: "15 Mars 2024",
    category: "Activités",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Les meilleurs livres jeunesse",
    summary: "Une sélection des meilleurs livres pour enfants de 0 à 3 ans, pour éveiller leur imagination.",
    date: "10 Mars 2024",
    category: "Lecture",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "L'importance du jeu dans le développement",
    summary: "Comment le jeu contribue au développement cognitif et social des jeunes enfants.",
    date: "5 Mars 2024",
    category: "Développement",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">
          Le Coin des Curieux 🐞
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez nos articles et conseils pour accompagner le développement de vos enfants
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article 
            key={article.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                  {article.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                {article.date}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {article.summary}
              </p>
              <Link 
                href={`/blog/${article.id}`}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
              >
                Lire la suite
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
          Voir tous les articles
        </button>
      </div>
    </div>
  );
} 