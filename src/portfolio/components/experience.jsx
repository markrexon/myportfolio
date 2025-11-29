import React from 'react';

const experiences = [
  {
    role: "Frontend Developer",
    company: "TechCorp Inc.",
    duration: "Jan 2022 - Present",
    description: "Worked on building responsive web apps using React, TailwindCSS, and Redux.",
  },
  {
    role: "UI/UX Designer",
    company: "DesignHub",
    duration: "Jun 2020 - Dec 2021",
    description: "Designed intuitive interfaces and prototypes for mobile and web applications.",
  },
  {
    role: "Intern",
    company: "Startup Labs",
    duration: "Jan 2020 - May 2020",
    description: "Assisted in frontend development and gained hands-on experience in React projects.",
  },
];

const Experience = () => {
  return (
    <div  id="experience" className="w-full flex flex-col items-center gap-6 p-8 bg-gray-50">
      <h1 className="max-w-7xl text-3xl font-bold mb-6 text-center">Experience</h1>
      <div className="max-w-7xl w-full  grid md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-1">{exp.role}</h2>
            <h3 className="text-gray-600 mb-2">{exp.company}</h3>
            <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
