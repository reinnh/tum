import React from "react";
import { motion } from "framer-motion";
//school of applied health and science
const facultyData = [
  {
    name: "Prof. HUXLEY MAE MAKONDE",
    title: "DEAN",
    image: "https://via.placeholder.com/200", // Replace with actual image URL
    description: `Welcome to the School of Applied and Health Sciences of the 
      Technical University of Mombasa (TUM) which evolved from the 
      department of Applied Sciences. The faculty currently consists of 
      Departments of Environment and Health Sciences, Mathematics 
      and Physics, Medical Sciences, and Pure and Applied Sciences.`,
    social: ["facebook", "twitter", "youtube"],
  },
];

const FacultyCard = ({ faculty }) => {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-xl p-4 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={faculty.image} alt={faculty.name} className="w-full rounded-lg" />
      <h2 className="text-green-700 font-semibold mt-4">{faculty.name}</h2>
      <p className="text-gray-600 text-sm">{faculty.title}</p>
      <p className="text-gray-700 mt-2 text-sm">{faculty.description}</p>
      <div className="flex gap-3 mt-4">
        {faculty.social.map((platform, index) => (
          <span key={index} className="text-green-700 text-xl">🔗</span>
        ))}
      </div>
    </motion.div>
  );
};

const Helth = () => {
  return (
    <div className="p-6 flex flex-col items-center">
      {facultyData.map((faculty, index) => (
        <FacultyCard key={index} faculty={faculty} />
      ))}
    </div>
  );
};

export default Helth;