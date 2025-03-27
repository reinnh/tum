 //junk navBar ...crud data not rrsponsive   at all
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (index) =>
    setDropdownOpen(dropdownOpen === index ? null : index);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-green-700">
          LOGO
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About Us", "Research", "Portals", "Campus Life", "Media Desk"].map((item) => (
            <a key={item} href="#" className="text-gray-700 hover:text-green-700">
              {item}
            </a>
          ))}

          {/* Academics Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-green-700 flex items-center">
              Academics <span className="ml-1">▼</span>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              <a href="#" className="block px-4 py-2 hover:bg-green-100">Schools</a>
              <a href="#" className="block px-4 py-2 hover:bg-green-100">Institutes</a>
              <a href="#" className="block px-4 py-2 hover:bg-green-100">Programmes</a>

              {/* Nested Dropdown */}
              <div className="relative group">
                <a href="#" className="block px-4 py-2 hover:bg-green-100">More ▼</a>
                <div className="absolute left-full top-0 mt-0 w-56 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <a href="#" className="block px-4 py-2 hover:bg-green-100">School of Business</a>
                  <a href="#" className="block px-4 py-2 hover:bg-green-100">School of Engineering</a>
                  <a href="#" className="block px-4 py-2 hover:bg-green-100">School of Humanities</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-400 ${
          isOpen ? "max-h-screen p-4" : "max-h-0"
        }`}
      >
        {["Home", "About Us", "Research", "Portals", "Campus Life", "Media Desk"].map((item) => (
          <a key={item} href="#" className="block text-gray-700 py-2 px-4">
            {item}
          </a>
        ))}

        {/* Academics Dropdown (Mobile) */}
        <div className="border-t mt-2">
          <button
            onClick={() => toggleDropdown(0)}
            className="w-full text-left text-gray-700 py-2 px-4 flex justify-between"
          >
            Academics <span>{dropdownOpen === 0 ? "▲" : "▼"}</span>
          </button>
          {dropdownOpen === 0 && (
            <div className="pl-6">
              <a href="#" className="block py-2 text-gray-700">Schools</a>
              <a href="#" className="block py-2 text-gray-700">Institutes</a>
              <a href="#" className="block py-2 text-gray-700">Programmes</a>

              <button
                onClick={() => toggleDropdown(1)}
                className="w-full text-left text-gray-700 py-2 flex justify-between"
              >
                More <span>{dropdownOpen === 1 ? "▲" : "▼"}</span>
              </button>
              {dropdownOpen === 1 && (
                <div className="pl-6">
                  <a href="#" className="block py-2 text-gray-700">School of Business</a>
                  <a href="#" className="block py-2 text-gray-700">School of Engineering</a>
                  <a href="#" className="block py-2 text-gray-700">School of Humanities</a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

