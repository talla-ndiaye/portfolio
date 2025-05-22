import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="block">Bonjour, je suis</span>
            <span className="text-blue-600 dark:text-blue-400">Jean Dupont</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Étudiant en informatique passionné par le développement web et l'IA
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="/cv.pdf" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              download
            >
              <Download size={20} className="mr-2" />
              Télécharger CV
            </a>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-300"
            >
              Voir mes projets
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 dark:text-white px-6 py-2 rounded-full shadow-lg">
              <span className="font-semibold">👨‍💻 Développeur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;