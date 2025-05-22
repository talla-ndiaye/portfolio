import React, { useState } from 'react';
import { Mail, Github as GitHub, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after showing success message
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Contactez-moi</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ou souhaitez simplement discuter ? N'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto ${
                  formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formStatus === 'sending' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Envoyer
                  </>
                )}
              </button>
              
              {formStatus === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg mt-4">
                  Votre message a été envoyé avec succès !
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg mt-4">
                  Une erreur est survenue. Veuillez réessayer plus tard.
                </div>
              )}
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Informations de contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">LinkedIn</h4>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    linkedin.com/in/jeandupont
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <GitHub size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">GitHub</h4>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    github.com/jeandupont
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Disponibilité</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Je suis actuellement disponible pour des projets freelance et des opportunités de stage ou d'alternance.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                N'hésitez pas à me contacter pour discuter de votre projet ou pour toute autre information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;