import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Portfolio</h2>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Talla Ndiaye. Tous droits réservés.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Retour en haut"
            >
              <ArrowUp size={16} className="mr-2" />
              Retour en haut
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
