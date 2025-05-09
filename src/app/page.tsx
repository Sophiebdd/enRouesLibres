import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">
          Bienvenue aux Ateliers en Roues Libres !
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Un espace chaleureux pour les enfants de 0 à 3 ans et leurs parents. Notre minibus se déplace de village en village pour proposer des jeux, des livres et des activités adaptés aux tout-petits.
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Rejoignez-nous pour partager des moments ludiques et éducatifs, même dans les zones rurales !
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Activités Créatives</h3>
          <p className="text-gray-600">Des ateliers artistiques et manuels adaptés aux tout-petits</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Bibliothèque Mobile</h3>
          <p className="text-gray-600">Une sélection de livres jeunesse pour éveiller la curiosité</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Échanges Parents</h3>
          <p className="text-gray-600">Un espace de partage et de rencontres entre familles</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-indigo-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold text-indigo-600 mb-4">Prêt à nous rejoindre ?</h3>
        <div className="space-x-4">
          <Link 
            href="/schedule" 
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Voir l'itinéraire
          </Link>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
} 