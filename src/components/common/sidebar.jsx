// src/components/Sidebar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Students", path: "/students" },
  { label: "Courses", path: "/courses" },
  { label: "Student Progressions", path: "/student-progressions" },
  { label: "Examination", path: "/examination" },
  { label: "Finance", path: "/finance" },
  { label: "Accomodation", path: "/accomodation" },
  { label: "My Profile", path: "/myprofile" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef();

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Menu (only on small screens) */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          <Menu className="text-white w-8 h-8" />
        </button>
      </div>

      {/* Static Sidebar on md+ */}
      <div className="hidden md:flex flex-col w-64 h-screen bg-green-600 text-white p-6 space-y-6 fixed">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="hover:bg-green-500 px-3 py-2 rounded"
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-auto text-center text-sm">🌿 MyApp Logo</div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-green-600 text-white z-50 flex flex-col p-6"
            ref={overlayRef}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={toggleSidebar}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-10 text-center text-sm">🌿 MyApp Logo</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
