import React from 'react';
import Sidebar from '../common/sidebar.jsx';
import { useState, useEffect } from 'react';
import { dashboardCards, dashboardItems, otherStudentsPortal } from '../../utils/constants.js';


const Card = ({ title, borderColor, iconPath }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-black`}>
    <h2 className="text-orange-500 font-semibold mb-4">{title}</h2>
    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path>
    </svg>
  </div>
);

const Dashboard= () => {
  const [open, setOpen] = useState(false)
  const Profile = () => {
    return (
      <div className={`top-0 -left-5 p-2 bg-gray-100  py-3 text-nowrap rounded-lg text-gray-900 border border-gray-300 absolute ${open ? 'opacity-100 translate-y-10 z-1 ' : `opacity-0 -translate-y-30 -z-10`} `}>
        <p>Name:Reinhard</p>
        <p>Reg no:BSEE/603J/2022</p>
        <p>Year:3</p>
        <p>Course:BSEE</p>
      </div>
    )
  }
  
  const profileView = () => {
    setOpen(!open)
  }

  
  
  return (
    <div className="flex pt-35 md:pt-30 bg-gray-100">
      {/* Sidebar */}
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#D89837] text-white l md:z-10000 h-25 flex justify-between items-center fixed left-0 top-0 right-0 flex-col">
          <div className="flex px-3 py-2 w-full justify-between">
            <div className="md:hidden"><Sidebar /></div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-semibold">DASHBOARD | QUICK LINKS</h1>
            </div>
          </div>
          <div className="flex items-center space-x-2 justify-between w-full bg-gray-200 text-gray-800 px-2 py-3">
            <span className="text-sm">STUDENT DASHBOARD</span>
            <div className="relative">
              <button onClick={profileView} className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-1 cursor-pointer rounded-full">
                <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
                <span>MR. BONKE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="transition-transform duration-3000">
              <Profile />
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col pl-2 md:pl-70">
          {/* Cards Grid */}
          <div className="hidden md:fixed md:top-20 md:bottom-0 md:left-0 md:block">
            <Sidebar />
          </div>
          <div className="p-2 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100">

            {dashboardCards.map((card, idx) => (
              <Card key={idx} {...card} />

            ))}
          </div>
          <div className="bg-gray-100">
            <div className="md:pl-4 text-lg font-bold text-gray-600">OTHERS</div>
            <div className="p-2 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100">
              {dashboardItems.map((carditem, idx) => (
                <Card key={`card-${idx}`} {...carditem} />
              ))}
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="pl-2 text-lg font-bold text-gray-600">OTHER STUDENT PORTALS</div>
            <div className="p-2 grid grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100">
              {otherStudentsPortal.map((carditem, idx) => (
                <Card key={`card-${idx}`} {...carditem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
