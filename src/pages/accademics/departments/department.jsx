

//department programmes
import { motion } from "framer-motion";

const sections = [
  {
    title: "Departments",
    items: [
      "Architecture and Built Environment",
      "Building and Civil Engineering",
      "Electrical and Electronic Engineering",
      "Mechanical and Automotive Engineering",
      "Medical Engineering",
    ],
  },
  {
    title: "Programmes",
    items: ["POSTGRADUATE", "UNDERGRADUATE", "DIPLOMA", "CERTIFICATE", "SHORT COURSES"],
  },
  {
    title: "Important Links",
    items: ["HELB", "KUCCPS", "E-LEARNING", "KENET WEBCONFERENCING", "STUDENT EMAIL"],
  },
];

export default function DepartmentsProgrammes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 rounded-xl shadow-lg">
      {sections.map((section, index) => (
        <div className="">
            <h2 className="text-green-700 font-semibold text-lg border-b-2 w-fit border-dotted pb-2 mb-4">
            {section.title}
          </h2>
        <motion.div
          key={index}
          className="bg-white rounded-sm shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          
          <ul className="space-y-2 text-sm">
            {section.items.map((item, i) => (
              <li key={i} className="text-gray-700 hover:text-green-600 pl-3 py-1 cursor-pointer border-b-1 border-gray-200">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        </div>
      ))}
    </div>
  );
}


