import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import LittleLemonImage from "../assets/images/littlelemon.png"; // Adjust the path as necessary
import OmnifoodImage from "../assets/images/omnifood.png"; // Adjust the path as necessary
import MyportfolioImage from "../assets/images/myportfolio.png"; // Adjust the path as necessary

const Projects = () => {
  const projects = [
    {
      title: "Little Lemon - Restaurant Website",
      description:
        "Designed and built RESTful APIs for a restaurant platform using Django and MySQL, enabling menu management and table reservations with secure user authentication.",
      // image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: LittleLemonImage,
      technologies: ["Django", "JavaScript", "MySQL", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Omnifood - Food Delivery App",
      description:
        "Created a fully responsive frontend website for a food delivery service, focusing on user experience and clean design with HTML, CSS, and JavaScript.",
      // image:
      //   "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      image: OmnifoodImage,
      technologies: ["Django REST", "React", "WebSocket", "Redis"],
      github: "#",
      live: "https://omnifoodimam.netlify.app",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing modern design principles and smooth animations.",
      // image:
      //   "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      image: MyportfolioImage,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
    },
  ];
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and showcases different aspects of my development skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                      <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
