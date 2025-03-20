import React from "react";

import { newsData } from "../../utils/constants";

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
