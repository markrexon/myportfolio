import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "SSLC",
    school: "St. Joseph Hr Secondary School",
    percentage: "100%",
    year: "2015",
  },
  {
    degree: "HSC",
    school: "St. Joseph Hr Secondary School",
    percentage: "95%",
    year: "2017",
  },
];

const Education = () => {
  return (
    <div id="education" className="py-12 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center">Education</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Icon */}
            <div className="mt-1 text-green-600">
              <FaGraduationCap size={24} />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{edu.degree}</h2>
              <p className="text-gray-600">{edu.school}</p>
              <div className="flex gap-4 mt-1 text-gray-500 text-sm">
                <span>Year: {edu.year}</span>
                <span className="text-green-600 font-medium">Percentage: {edu.percentage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
