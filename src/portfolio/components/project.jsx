import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio website built with React and TailwindCSS.",
    icon: "/icons/portfolio.svg",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    name: "E-Commerce App",
    description: "Full-stack e-commerce application using React, Node.js, and MongoDB.",
    icon: "/icons/ecommerce.svg",
    github: "https://github.com/yourusername/ecommerce-app",
  },
  {
    name: "Chat Application",
    description: "Real-time chat app using Socket.io and Express.",
    icon: "/icons/chat.svg",
    github: "https://github.com/yourusername/chat-app",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col items-center gap-8 p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
      <div className="w-full max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div className="flex items-center mb-4">
              <img
                src={project.icon}
                alt={project.name}
                className="w-12 h-12 mr-4"
              />
              <h2 className="text-xl font-semibold">{project.name}</h2>
            </div>
            <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-blue-700"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
