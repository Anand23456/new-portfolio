import React from 'react';
import { CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    { name: 'AWS Cloud Practitioner', completed: false },
    { name: 'Certified JavaScript Developer', completed: false },
    { name: 'GitHub Campus Expert', completed: false },
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certifications & Achievements</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${cert.completed ? 'bg-green-500' : 'border-2 border-dashed border-gray-500'}`}>
                      {cert.completed && <CheckCircle size={20} className="text-white" />}
                    </div>
                    <span className={`text-lg ${cert.completed ? 'text-white' : 'text-gray-400'}`}>
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Next Goals</h3>
                <p className="text-gray-300 mb-4">
                  Continuously learning and expanding my knowledge in the tech ecosystem. Currently focused on:
                </p>
                <ul className="text-gray-400 space-y-2 list-disc list-inside">
                  <li>Advanced React patterns</li>
                  <li>Cloud architecture</li>
                  <li>DevOps best practices</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-700/50 rounded-lg">
              <p className="text-gray-300 text-center italic">
                "The learning journey never stops in software development."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;