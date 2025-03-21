import React from "react";

const CampusLife = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">STUDENTS SERVICES DEPARTMENT</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="/path-to-image.jpg"
            alt="Mr. JOEL OLUOCH AWINO"
            className="w-48 h-auto rounded-lg shadow-md"
          />
          <div>
            <p className="text-lg font-semibold">Mr. JOEL OLUOCH AWINO</p>
            <p className="mt-2 text-gray-700">
              Welcome to the Students Services Department web page.
            </p>
            <p className="mt-2 text-gray-700">
              The Technical University of Mombasa is keen on ensuring that its students excel both academically and socially; thus, this Department is mandated to ensure that as a University, we produce both responsible and responsive graduates.
            </p>
            <p className="mt-2 text-gray-700">
              This department oversees Accommodation, Catering, Guidance and Counseling, Games and Sports, the University Choir, Clubs and Societies as well as the Technical University of Mombasa Students Association (TUMSA).
            </p>
            <p className="mt-2 text-gray-700">
              We believe in the power of education and are keen on ensuring that all students regardless of their financial background complete their programs. Our students are able to access Higher Education Loan Board Loans, HELB TVET Loans, Rattansi Bursary, Constituency Development/Education bursary Funds (CDF), and County Government Scholarships.
            </p>
            <p className="mt-2 text-gray-700">
              The office is also well versed with Educational Trusts/ Charitable institutions across the country and therefore recommends needy students to these institutions for consideration and eventual sponsorship. The University also offers work-study programs to needy students.
            </p>
            <p className="mt-2 text-gray-700">
              From our affordable student hostel, to our vibrant Guidance and Counseling office, to our responsive staff, from our adrenaline-charged soccer, rugby, basketball, badminton, chess, volleyball, swimming, softball, woodball, ceestoball, karate, taekwondo, netball, and table tennis teams to our invigorated clubs and societies…your best bet is the Technical University of Mombasa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusLife;
