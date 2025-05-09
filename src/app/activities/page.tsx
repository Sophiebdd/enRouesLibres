import React from 'react';
import Link from 'next/link';



export default function Activities() {
  const activities = [
    {
      title: "Lecture de contes",
      description: "Des histoires captivantes pour stimuler l'imaginaire.",
      icon: <span className="text-4xl">📚</span>,
      color: "bg-blue-50"
    },
    {
      title: "Jeux sensoriels",
      description: "Activités pour explorer le toucher, la vue, et plus encore.",
      icon: <span className="text-4xl">🌱</span>,
      color: "bg-green-50"
    },
    {
      title: "Ateliers créatifs",
      description: "Dessin, peinture, et activités manuelles pour les petits.",
      icon: <span className="text-4xl">🎨</span>,
      color: "bg-purple-50"
    },
    {
      title: "Moments d'échange",
      description: "Des espaces pour discuter et partager entre parents.",
      icon: <span className="text-4xl">💬</span>,
      color: "bg-pink-50"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">
        Nos Activités
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className={`${activity.color} rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="flex items-start space-x-4">
              <div>{activity.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600">
                  {activity.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-indigo-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-indigo-600 mb-4">
          Horaires des activités
        </h3>
        <p className="text-gray-600 mb-4">
          Les activités sont proposées du lundi au vendredi, de 9h à 12h et de 14h à 17h.
        </p>
        <p className="text-gray-600">
          Consultez notre <Link href="/schedule" className="text-indigo-600 hover:text-indigo-800 underline">itinéraire</Link> pour connaître nos prochaines dates !
        </p>
      </div>
    </div>
  );
} 