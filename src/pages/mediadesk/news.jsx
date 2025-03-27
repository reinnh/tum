import React from "react";

import { newsData, newsArticles } from "../../utils/constants";
import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer";
import { GreenButton } from "../../utils/helpers";
import { ContactSocialLinks } from "../home";
const News = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsData.map((news) => (
          <div key={news.id} className="border rounded-lg shadow-md">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Read more
              </button>
              <p className="text-gray-500 mt-2">{news.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;


export const NewsGrid = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-20">
    <ContactSocialLinks/>
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {newsArticles.map((news, index) => (
          <div key={`news-grid-${index}`} className="bg-white shadow-lg rounded-sm overflow-hidden">
            <img src={news.src} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col gap-y-4">
              <h3 className="text-lg  text-gray-800">{news.title}</h3>
             <div className="flex  items-center">
             <GreenButton text='Read more'/>
             <p className="text-gray-600 text-sm mt-2 text-nowrap">{news.date}</p>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
    </>
  );
};
