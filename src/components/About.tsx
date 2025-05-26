
interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'HTML', level: 80, color: 'bg-orange-500' },
  { name: 'CSS', level: 60, color: 'bg-blue-500' },
  { name: 'JavaScript', level: 50, color: 'bg-yellow-500' },
  { name: 'React', level: 75, color: 'bg-cyan-500' },
  { name: 'Node.js', level: 75, color: 'bg-green-500' },
  { name: 'Python', level: 60, color: 'bg-indigo-500' },
  { name: 'Mysql', level: 80, color: 'bg-orange-500' },
  { name: 'java', level: 50, color: 'bg-blue-500' },
  { name: 'php', level: 55, color: 'bg-orange-500' },
  { name: 'c', level: 70, color: 'bg-orange-500' },

];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Qui suis-je ?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Je suis un étudiant en informatique passionné par la création d'applications web innovantes et l'exploration des technologies d'intelligence artificielle.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mon parcours m'a permis d'acquérir des compétences solides en développement front-end et back-end, ainsi qu'une bonne compréhension des principes de conception centrés sur l'utilisateur.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              En constante recherche d'apprentissage, je m'efforce de me tenir au courant des dernières tendances et technologies du secteur pour créer des solutions performantes et élégantes.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Formation</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Licence  en Informatique (en cours)</li>
                  <li>Baccalauréat scientifique (2021)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Intérêts</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Développement Web</li>
                  <li>Intelligence Artificielle</li>
                  <li>Cybersécurité</li>
                  <li>Nouvelles technologies</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Mes compétences</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`${skill.color} h-2.5 rounded-full transition-all duration-1000 ease-out`} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Langues</h3>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                  <div className="font-medium text-gray-800 dark:text-white">Français</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Langue Officielle </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                  <div className="font-medium text-gray-800 dark:text-white">Anglais</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Courant (TOEIC 750)</div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
