import React from 'react';
import { eventsArticles } from "../../utils/constants";
import { GreenButton } from '../../utils/helpers';
import Footer from '../../components/common/footer';
import Navbar from '../../components/common/navbar';
import { ContactSocialLinks } from '../home';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-sm shadow-2xl overflow-hidden w-80 m-4">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4 h-full flex flex-col gap-y-2">
        <h3 className="text-lg font-semibold text-gray-600">{event.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mt-2  my-2 ">
          <span className="mr-2">📅 {event.date}</span>
          <span>📍 {event.location}</span>
        </div>
            <div className=" flex ">
            <GreenButton text='View event' id={`evemtcard-${event.id}`}/>
            </div>
      </div>
    </div>
  );
};

const EventsList = () => {
  return (
    <>
    <Navbar/>
    <div className=" mt-20">
    <ContactSocialLinks/>
    </div>
       <div className="flex flex-wrap justify-center p-4 bg-gray-100 min-h-screen">
      {eventsArticles.map((event, index) => (
        <EventCard key={`eventcard-${index}`} event={event} />
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default EventsList;
