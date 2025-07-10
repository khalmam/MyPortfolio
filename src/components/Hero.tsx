import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600">Ibrahim Imam</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate web developer crafting modern and responsive web applications with clean code and beautiful designs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/khalmam/" 
               className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
               target="_blank"          // 
               rel="noopener noreferrer"
              >
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ibrahim-imam-64b512a8/" 
               className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
               target="_blank" 
               rel="noopener noreferrer"
              >
              <Linkedin size={24} />
            </a>
            <a href="mailto:imamkhaleel2@gmail.com"   
               className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
               target="_blank"          
               rel="noopener noreferrer"
              >
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
