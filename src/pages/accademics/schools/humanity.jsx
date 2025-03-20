//scholl of humanity and social science
import React from "react";
import DepartmentsProgrammes from "../departments/department";

export const Humanity = () => {
  return (
  <>
    <div className="flex flex-col md:flex-row md:gap-5 bg-gray-100 p-6 md:justify-center">
      {/* Left Section */}
      <div className="w-full md:w-1/4 bg-white shadow-md p-6 text-center">
        <div className="w-32 h-32 mx-auto bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-5xl text-white">👤</span>
        </div>
        <h2 className="text-green-600 font-bold mt-4">GODFFREY NYONGESA NATO -</h2>
        <p className="text-gray-700">DEAN</p>
        <div className="flex justify-center gap-3 mt-4">
          <button className="bg-green-500 text-white p-2 rounded-full">🔵</button>
          <button className="bg-green-500 text-white p-2 rounded-full">🐦</button>
          <button className="bg-green-500 text-white p-2 rounded-full">▶️</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 bg-white shadow-md p-6 border-l-2 border-green-500">
        <p className="font-serif pl-2 mb-4">
          Greetings from the School of Humanities and Social Sciences!
        </p>
        <p className="text-gray-800 leading-relaxed">
          The School of Humanities and Social Sciences is committed to fostering a rich and stimulating learning
          environment that nurtures creativity, curiosity, and intellectual growth in the fields of social sciences,
          communication, and hospitality and tourism. Knowledge entrenched in humanities and social sciences empowers
          you to critically analyze and solve challenges facing humanity.
        </p>
        <p className="text-gray-800 leading-relaxed mt-4">
          Through a blend of rigorous academic curriculum and hands-on practical exposure, our distinguished faculty
          members are dedicated to providing you with a transformative learning experience that will mold you into a
          competent and ethical professional for the local, regional, and global market.
        </p>
        <p className="text-gray-800 leading-relaxed mt-4">
          Beyond the classroom, we encourage you to participate in various extracurricular activities, student
          organizations, and research opportunities that will build your life skills, enhance your personal growth, and
          enrich your academic experience.
        </p>
      </div>

      {/* School Announcements */}
      <div className="w-full md:w-1/4 bg-green-700 text-white text-center p-4 mt-4 md:mt-0 h-fit ">
        <p className="text-sm">SCHOOL ANNOUNCEMENTS</p>
      </div>
    </div>
    <DepartmentsProgrammes/>
  </>
  );
};
