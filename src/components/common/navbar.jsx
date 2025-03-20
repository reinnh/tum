import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";

import { menuItems } from "../../utils/constants";

const DropLeft=()=>{
  
}

const Dropdown = ({ items, mobile }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative cursor-pointer  "
      onMouseEnter={!mobile ? () => setOpen(true) : undefined}
      onMouseLeave={!mobile ? () => setOpen(false) : undefined}
      onClick={mobile ? () => setOpen(!open) : undefined}
    >
      <button className={`flex items-center py-2 md:py-3 w-full  gap-2 px-4 sm:rounded justify-between font-semibold transition duration-300 cursor-pointer ${open ? 'md:bg-green-800 text-white' : 'md:hover:bg-green-800 hover:text-white '} ${mobile? ' text-white w-full border-gray-600 border-b flex justify-between':''}`}>
        {items.name} {items.children.length > 0 && <div className="border-l pl-2  border-gray-600 md:border-none"><ChevronDown className="" size={25} /></div> }
      </button>
      {items.children.length > 0 && open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className={`absolute left-0 mt-1  bg-gray-100 shadow-lg rounded-lg py-2 border border-gray-300 backdrop-blur-lg bg-opacity-90 ${mobile ? 'relative mt-0 bg-gray-200  ' : ''}`}
        >
          {items.children.map((child, index) => (
            <div key={`children-${index}`} className="relative">
              <a
                href={child.link}
                className="block px-4 w-50 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer "> {child.children? child.name:child.name }
              </a>
              {child.children && <div className=""></div> }
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-gray-200 shadow-lg py-3 px-6 flex justify-between items-center z-50 pb-6 ${''}`}>
      <h1 className="text-xl font-bold">Logo</h1>
      <div className="hidden md:flex gap-6">
        {menuItems.map((item, index) => (
          <Dropdown key={index} items={item} mobile={false} />
        ))}
      </div>
      <button className="md:hidden text-gray-700 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 right-0 w-64 bg-gray-950 shadow-2xl flex flex-col py-3  md:hidden gap-2 h-screen"
      >
        <button className="self-end mb-4 text-gray-700" onClick={() => setMenuOpen(false)}>
          <FaTimes size={24} />
        </button>
        {menuItems.map((item, index) => (
          <Dropdown key={index} items={item} mobile={true} />
        ))}
      </motion.div>
    </nav>
  );
}