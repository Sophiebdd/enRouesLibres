import React from 'react';

export default function Schedule() {
  const schedule = [
    { day: "Lundi", location: "Village A", time: "9h - 17h" },
    { day: "Mardi", location: "Village B", time: "9h - 17h" },
    { day: "Mercredi", location: "Village C", time: "9h - 17h" },
    { day: "Jeudi", location: "Village D", time: "9h - 17h" },
    { day: "Vendredi", location: "Village E", time: "9h - 17h" }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-600 mb-4 text-center">
        Notre Itinéraire
      </h2>
      
      <p className="text-gray-600 text-center mb-8">
        Consultez notre itinéraire pour savoir quand le minibus sera près de chez vous !
      </p>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 divide-y divide-gray-200">
          {schedule.map((item, index) => (
            <div 
              key={index}
              className="p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-semibold">
                      {item.day.slice(0, 3)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.location}
                    </h3>
                    <p className="text-gray-500">
                      {item.time}
                    </p>
                  </div>
                </div>
                <div className="text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <div className="text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-700">
            Les horaires peuvent varier en fonction des conditions météorologiques ou des événements locaux. 
            Suivez-nous sur les réseaux sociaux pour rester informé des derniers changements.
          </p>
        </div>
      </div>
    </div>
  );
} 