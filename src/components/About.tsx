
interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "React", level: 70, color: "bg-cyan-500" },
  { name: "Next.js", level: 75, color: "bg-orange-500" },
  { name: "Express JS", level: 80, color: "bg-orange-500" },
  { name: "Flask", level: 60, color: "bg-blue-500" },
  { name: "Fast Api", level: 50, color: "bg-blue-500" },
  { name: "Mongo DB", level: 50, color: "bg-green-500" },
  { name: "Mysql", level: 80, color: "bg-orange-500" },
  { name: "PostgreSQL", level: 80, color: "bg-orange-500" },
  { name: "Tailwind CSS", level: 85, color: "bg-cyan-500" },
  
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Section */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Qui suis‑je ?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Je suis un développeur passionné par la création de solutions web
                performantes, modernes et élégantes. J'aime concevoir des interfaces
                propres et développer des architectures backend fiables.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Je suis également très intéressé par l'intelligence artificielle,
                le cloud computing et la cybersécurité.
              </p>

              {/* Grid Info */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Formation
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Licence en Informatique (en cours)</li>
                    <li>Baccalauréat scientifique (2021)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Intérêts
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Développement Web</li>
                    <li>Intelligence Artificielle</li>
                    <li>Cybersécurité</li>
                    <li>Nouvelles technologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-12">
            {/* Skill Cards */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Mes compétences
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {skills.map((skill) => {
                  const key = skill.name.toLowerCase().replace(/\s+/g, "");
                  let src =
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/database/database-plain.svg";

                  switch (key) {
                    case "react":
                      src =
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
                      break;
                    case "express":
                    case "expressjs":
                      src =
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
                      break;
                    case "flask":
                      src =
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg";
                      break;
                    case "fastapi":
                      src =
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg";
                      break;
                    case "mongodb":
                      src =
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg";
                      break;
                    case "mysql":
                      src =
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
                      break;
                    case "postgresql":
                      src =
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg";
                      break;
                    case "next.js":
                    case "nextjs":
                      src =
                        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
                      break;
                    case "tailwindcss":
                    case "tailwind css":
                      src =
                        "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg";
                      break;
                    default:
                      src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        skill.name
                      )}&background=0D9488&color=fff`;
                  }

                  return (
                    <div
                      key={skill.name}
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center"
                    >
                      <img
                        src={src}
                        alt={`${skill.name} logo`}
                        className="w-12 h-12 mb-3 object-contain"
                      />
                      <span className="font-medium text-gray-800 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        {skill.level}%
                      </span>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                        <div
                          className={`${skill.color} h-2 rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Langues
              </h3>
              <div className="flex gap-4 flex-wrap">
                <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3 rounded-xl shadow">
                  <div className="font-medium text-gray-800 dark:text-white">
                    Français
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">
                    Langue Officielle
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
