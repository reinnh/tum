import { useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { title: "Our Philosophy" },
  { title: "Historical Background" },
  { title: "Governance Structure" },
  { title: "Council Members" },
  { title: "UMB Members" },
  { title: "Senate Members" },
  { title: "Division of ARE" },
  { title: "Division of AFP" },
  { title: "Quality Policy Statement" },
  { title: "Citizens' Service Delivery Charter" },
  { title: "Strategic Plan" },
];

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col w-64 min-h-screen bg-gray-100 p-4">
      {menuItems.map((item, index) => (
        <motion.div
          key={index}
          className={`p-3 my-1 rounded-lg cursor-pointer flex justify-between items-center transition-all ${
            activeIndex === index ? "bg-green-500 text-white" : "bg-white"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveIndex(index)}
        >
          <span>{item.title}</span>
          <motion.span
            animate={{ rotate: activeIndex === index ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▶
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}
