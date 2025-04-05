import React from 'react';
import Sidebar from '../common/sidebar.jsx';

const dashboardCards = [
  { title: 'COURSE STATUS', borderColor: 'black', iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { title: 'SEMESTER REGISTRATION', borderColor: 'blue-600', iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { title: 'FEE STATEMENT', borderColor: 'blue-600', iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.686 1M12 8c-1.11 0-2.08.402-2.686 1M12 16c1.11 0 2.08-.402 2.686-1M12 16c-1.11 0-2.08-.402-2.686-1" },
  { title: 'EXAM RESULTS', borderColor: 'blue-600', iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { title: 'ACADEMIC CALENDAR', borderColor: 'blue-600', iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { title: 'HELP DESK', borderColor: 'blue-600', iconPath: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { title: 'NOTIFICATIONS', borderColor: 'blue-600', iconPath: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" },
  { title: 'STUDENT PROFILE', borderColor: 'blue-600', iconPath: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
];

const dashboardItems = [

  {
    title: "APPLY DEFERMENT/LEAVES",
    iconPath: "M6 18L18 6M6 6l12 12",
    category: "OTHERS",
  },
  {
    title: "APPLY READMISSION",
    iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    category: "OTHERS",
  },
  {
    title: "SUPPLEMENTARY/SPECIAL/RETAKES",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    category: "OTHERS",
  },
  {
    title: "APPLY RETAKES",
    iconPath: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    category: "OTHERS",
  }
];
const otherStudentsPortal=[
  {
    title: "E-LEARNING PORTAL",
    iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    category: "PORTALS",
  },
  {
    title: "INDUSTRIAL ATTACHMENT PORTAL (IAP)",
    iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4",
    category: "PORTALS",
  },
  {
    title: "ONLINE CLEARANCE",
    iconPath: "M5 13l4 4L19 7",
    category: "PORTALS",
  },
]


const Card = ({ title, borderColor, iconPath }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-black`}>
    <h2 className="text-orange-500 font-semibold mb-4">{title}</h2>
    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path>
    </svg>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-orange-400 text-white p-4 flex justify-between items-center fixed left-0 right-0">
          <Sidebar/>
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold">DASHBOARD | QUICK LINKS</h1>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">STUDENT DASHBOARD</span>
            <div className="relative">
              <button className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-1 rounded-full">
                <span className="w-6 h-6 bg-gray-300 rounded-full"></span>
                <span>MR. BONKE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Cards Grid */}
        <div className="p-2 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100">
          {dashboardCards.map((card, idx) => (
            <Card key={idx} {...card} />
            
          ))}
        </div>
        <div className="bg-gray-100">
          <div className="bg-">OTHERS</div>
          <div className="p-2 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100">
          {dashboardItems.map((carditem, idx) => (
            <Card key={`card-${idx}`} {...carditem} />
          ))}
        </div>
        </div>
        <div className="bg-gray-100">
          <div className="bg-">OTHER STUDENT PORTALS</div>
          <div className="p-2 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100">
          {otherStudentsPortal.map((carditem, idx) => (
            <Card key={`card-${idx}`} {...carditem} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
