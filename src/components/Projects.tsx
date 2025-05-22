import React from 'react';
import { ExternalLink,} from 'lucide-react';

interface ProjectProps {
  title: string;
  tech: string;
  description: string;
  link: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, tech, description, link, imageUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-green-500/10 transition-all duration-300 border border-gray-700 hover:border-green-500/30 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <div className="flex items-center mb-4">
          <span className="text-xs font-medium bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
            {tech}
          </span>
        </div>
        
        <p className="text-gray-400 mb-4">
          {description}
        </p>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-400 hover:text-green-500 transition-colors"
        >
          <ExternalLink size={16} className="mr-1" />
          View Live Project
        </a>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Heritage Website Clone',
      tech: 'HTML, CSS, JavaScript',
      description: 'Recreated the UI of a popular FMCG website. Focused on responsive design, layout structure, and accessibility.',
      link: 'https://heritageproject.netlify.app',
      imageUrl: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Interactive Counter App',
      tech: 'HTML, CSS, JavaScript',
      description: 'Developed a sleek, user-friendly counter to showcase DOM manipulation, UX flow, and real-time interaction.',
      link: 'https://counter-modification.netlify.app',
      imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'RGB Color Picker',
      tech: 'HTML, CSS, JavaScript',
      description: 'Built a dynamic tool to select RGB values with live visual feedback. Clean UI, seamless interaction.',
      link: 'https://color-pick-project.netlify.app',
      imageUrl: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Projects that show not just code, but craft. Built with intent, not just instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              tech={project.tech}
              description={project.description}
              link={project.link}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;