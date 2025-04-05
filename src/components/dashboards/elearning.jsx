import React from 'react';

// Dummy data (reused for both sections)
const courses = [
  {
    id: 1,
    title: 'BTE(SEP2022) J&S-FT',
    subject: 'Chemistry I',
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="h-10 mr-4"
          />
          <h1 className="text-xl font-bold">TUM E-Learning: DASHBOARD</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <DotsIcon />
          </button>
          <button className="bg-white text-black rounded-full p-2">
            <UserIcon />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-6">
        {/* Customize Button */}
        <div className="flex justify-end mb-4">
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
            Customise this page
          </button>
        </div>

        {/* Recently Accessed Courses */}
        <Section title="Recently accessed courses">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </Section>

        {/* Course Overview */}
        <section>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Course overview</h2>
              <select className="border border-gray-300 rounded p-1">
                <option>ALL (except removed from view)</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <button className="text-gray-600">
                <ListIcon />
              </button>
              <button className="text-gray-600">
                <GridIcon />
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {courses.map((course) => (
              <CourseCard key={`overview-${course.id}`} {...course} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

// ✅ Reusable Section Component
const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

// ✅ Reusable Course Card
const CourseCard = ({ title, subject }) => (
  <div className="bg-white border border-gray-300 rounded">
    <div className="bg-blue-600 text-white p-4 rounded flex items-center justify-between">
      <div>
        <p className="font-semibold">{title}</p>
        <p>{subject}</p>
      </div>
      <button className="text-white">
        <VerticalDots />
      </button>
    </div>
  </div>
);

// ✅ Icons
const DotsIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12h.01M12 12h.01M9 12h.01M12 15h.01M12 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5.121 17.804A7.978 7.978 0 0112 14a7.978 7.978 0 016.879 3.804M15 10a3 3 0 11-6 0 3 3 0 016 0zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const VerticalDots = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 5v.01M12 12v.01M12 19v.01"
    />
  </svg>
);

const ListIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

const GridIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
  </svg>
);
