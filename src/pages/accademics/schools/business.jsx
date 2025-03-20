//scool of bussiness
import React from "react";
import { motion } from "framer-motion";

const deanInfo = {
  name: "Dr. SAMEER KAMRUDIN BACHANI",
  title: "DEAN",
  image: "https://via.placeholder.com/150", // Replace with actual image URL
  social: [
    { icon: "📘", link: "#" },
    { icon: "🐦", link: "#" },
    { icon: "▶️", link: "#" },
  ],
};

const welcomeMessage = {
  quote: "On behalf of all our staff and students in the School of Engineering and Technology (SoET), I am pleased to welcome you to our web page.",
  content: `The School of Engineering and Technology currently offers a wide range of academic programmes...` // Truncated for brevity
};

const Announcements = () => (
  <motion.div className="bg-green-700 text-white p-4 text-center font-bold" whileHover={{ scale: 1.05 }}>
    SCHOOL ANNOUNCEMENTS
  </motion.div>
);

const DeanProfile = () => (
  <motion.div className="bg-white shadow-lg p-4 rounded-lg max-w-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <img src={deanInfo.image} alt={deanInfo.name} className="rounded-md w-full" />
    <h2 className="text-green-700 font-bold mt-2">{deanInfo.name} - {deanInfo.title}</h2>
    <div className="flex gap-3 mt-2">
      {deanInfo.social.map((s, index) => (
        <a key={index} href={s.link} className="text-green-500 text-xl">{s.icon}</a>
      ))}
    </div>
  </motion.div>
);

const WelcomeSection = () => (
  <motion.div className="border-l-4 border-green-700 pl-4 text-gray-700" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
    <p className="italic text-green-700">&ldquo;{welcomeMessage.quote}&rdquo;</p>
    <p className="mt-4">{welcomeMessage.content}</p>
  </motion.div>
);

const Business = () => (
  <div className="p-6 grid md:grid-cols-3 gap-6">
    <DeanProfile />
    <WelcomeSection />
    <Announcements />
  </div>
);

export default Business;