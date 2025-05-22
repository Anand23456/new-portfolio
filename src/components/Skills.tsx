import React from 'react';

interface SkillItemProps {
  name: string;
  level: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{name}</span>
        <span className="text-green-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'ReactJS', level: 90 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 90 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'REST APIs', level: 90 },
  ];

  const toolsSkills = [
    { name: 'GitHub', level: 90 },
    { name: 'Jenkins', level: 75 },
    { name: 'Kubernetes', level: 65 },
    { name: 'CI/CD', level: 80 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills Snapshot</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            <span className="text-green-400">💡</span> Each skill backed by hands-on projects, not just tutorials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Frontend</h3>
            {frontendSkills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Backend</h3>
            {backendSkills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-500/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Tools</h3>
            {toolsSkills.map((skill, index) => (
              <SkillItem key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;