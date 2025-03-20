import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { easeIn, motion } from "framer-motion";
import { events,notices } from "../../utils/constants";
import { useRef } from "react";
import tuma from '../../assets/TUMA.jpg'


export default function EventSection() {
    const scrollRef=useRef(null);
    return (
        <div   className=" mx-auto p-2 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100">
            {/* Events Section */}
            <div  ref={scrollRef} className=" overflow-y-auto h-100" style={{scrollbarWidth:'none', }}>
                <h2 className="text-xl font-bold border-b mb-4 pb-2 border-gray-200">EVENTS</h2>
                <div className="space-y-4">
                    {events.map((event, index) => (
                        <motion.div animate={{y:['0',"-120%",'-120%','-120%','0%','0']}} transition={{duration:10, ease:easeIn, repeat:Infinity}} key={`event-${index}`}  whileHover={{ scale: 1.02 }} className="flex gap-4 items-center p-4 border rounded-lg border-gray-100 shadow">
                            <div className="border-2 border-green-500 p-4 text-center rounded-md">
                                <p className="text-xl font-bold">{event.date.split(" ")[0]}</p>
                                <p>{event.date.split(" ")[1]}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">{event.title}</h3>
                                <p className="flex items-center gap-2 text-gray-500 text-sm"><Clock size={16} /> {event.time}</p>
                                <p className="flex items-center gap-2 text-gray-500 text-sm"><MapPin size={16} /> {event.location}</p>
                                <a href="#" className="text-green-600 flex items-center mt-2">View Event <ArrowRight size={16} /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Notice Board Section */}
            <div>
                <h2 className="text-xl font-bold border-b mb-4 pb-2 border-gray-200">NOTICE BOARD</h2>
                <div className="space-y-2">
                    {notices.map((notice, index) => (
                        <div className="">
                            <motion.p key={index} whileHover={{ x: 5 }} className=" cursor-pointer">{notice} <ArrowRight size={16} /></motion.p>
                            <a className="text-green-800 font-bold" href={null}>Read More</a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Section */}
            <div>
                <h2 className="text-xl font-bold border-b pb-2 mb-4 border-gray-200">FEATURED</h2>
                <motion.div whileHover={{ scale: 1.02 }} className="border border-gray-100 cursor-pointer rounded-lg shadow overflow-hidden">
                    <img src={tuma} alt="Featured" className="w-full h-50 mb-4 object-cover" />
                    <div className="p-4">
                        <h3 className="">TUM Soars Above Expectations in ISO 9001:2015 Second Surveillance Audit!</h3>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}