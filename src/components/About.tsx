import React from 'react';
import { Code, Layout, Server, PenTool as Tool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                Hi, I'm Anand. Let's build something great.
              </span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I specialize in full-stack web development – crafting elegant frontends and powerful backends. With experience in both freelance and enterprise environments, I deliver code that's clean, scalable, and user-focused.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
                <div className="flex items-center mb-4">
                  <Code className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
                </div>
                <p className="text-gray-400">
                  ReactJS, Node.js, HTML5, CSS3, JavaScript, Bootstrap
                </p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
                <div className="flex items-center mb-4">
                  <Server className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Backend</h3>
                </div>
                <p className="text-gray-400">
                  PING Identity, ForgeRock (IAM), Express
                </p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
                <div className="flex items-center mb-4">
                  <Tool className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Tools</h3>
                </div>
                <p className="text-gray-400">
                  GitHub, Jenkins, Kubernetes (basic), CI/CD pipelines
                </p>
              </div>

              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
                <div className="flex items-center mb-4">
                  <Layout className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Design</h3>
                </div>
                <p className="text-gray-400">
                  Responsive Design, UI/UX, Accessibility, CSS Frameworks
                </p>
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-green-500/30">
              <blockquote className="text-gray-300 italic">
                "Anand is a rock-solid developer who always delivers clean code and fast results."
                <footer className="text-gray-400 mt-2">– Client Feedback</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;