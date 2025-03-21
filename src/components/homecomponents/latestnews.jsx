import { newsItems } from "../../utils/constants";
import { GreenButton } from "../../utils/helpers";

export default function NewsSection() {

  
    return (
      <div className="container px-2 py-4">
        <h2 className="text-3xl font-bold">
          LATEST <span className="text-green-600">NEWS</span>
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <div key={news.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{news.title}</h3>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span className="font-bold text-green-600">{news.author}</span>
                  <span>{news.date}</span>
                </div>
                <GreenButton text={'read more'} id={news.id} onClick={null}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  