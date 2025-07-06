import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: 'Problem Solving',
      description: 'Creative solutions to complex technical challenges'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Collaboration',
      description: 'Working effectively with teams and stakeholders'
    },
    {
      icon: <Coffee className="w-8 h-8 text-blue-600" />,
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated web developer with hands-on experience in both frontend and backend development. 
            I love creating user-friendly applications that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-blue-100 mb-4">
                Started as a curious student exploring the world of programming, I've grown into a passionate 
                developer who loves building things that make a difference.
              </p>
              <p className="text-blue-100">
                Currently focused on full-stack development with Django, React, and modern web technologies.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Backend Development with Django & REST APIs</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Frontend Development with React & JavaScript</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Database Design & Management</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;