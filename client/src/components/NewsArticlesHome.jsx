import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import eventData from "../data/EventData.json";
import newsData from "../data/newsData.json";

const NewsArticlesHome = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    // Fetch event data from EventData.json
    setEvents(eventData);
    // Fetch news data from newsData.json
    setNewsArticles(newsData);
  }, []);

  const handleEventClick = (link) => {
    navigate(link);
  };

  return (
    <div className="w-full lg:h-[82vh] h-[120rem] flex lg:flex-row flex-col justify-between px-2 lg:px-4 gap-2 py-4">
      {/* Events Section */}
      <div className="lg:h-full lg:w-[70%] h-auto w-full rounded-md shadow-2xl hover:mb-5 transition-all duration-500 ease-in-out md:px-3 md:py-2 flex lg:flex-row flex-col gap-3">
        <div className="lg:w-1/2 w-full lg:h-full h-auto flex flex-col justify-between">
          <h1 className="w-full h-auto py-1 px-3 rounded-md text-white bg-[#19194D] font-semibold text-3xl text-start mb-1">Events</h1>
          <div className="w-full flex-grow">
            <img src={eventData[0].eventImages[0]} alt="1st Event's image" className="mb-2 rounded-tr-lg rounded-tl-lg px1" />
            <h3 className="text-xl font-bold text-[#19194D] mb-2 px-1">{eventData[0].heading}</h3>
            <p className="text-gray-600 px-1">{eventData[0].description}</p>
          </div>
          <button onClick={() => handleEventClick("/events")} className="bg-[#19194D] text-white px-4 py-2 hover:bg-black transition-all duration-800 ease-in-out rounded-lg flex justify-center items-center mt-2 self-end">View All Events</button>
        </div>
        <div className="lg:w-1/2 w-full lg:h-full h-auto flex flex-col justify-between">
          {eventData.slice(1, 4).map((event, index) => (
            <div
              key={index}
              className="w-full lg:h-[30%] h-auto my-2 border border-gray-300 rounded-lg shadow-lg overflow-hidden flex lg:flex-row-reverse flex-col items-center bg-white transform transition-transform duration-300 hover:cursor-pointer"
              onClick={() => handleEventClick(event.link)}
            >
              <img
                src={event.eventImages[0]}
                alt={event.heading}
                className="lg:w-1/2 w-full lg:h-full h-auto object-cover"
              />
              <div className="lg:w-1/2 w-full lg:h-full h-auto flex flex-col justify-center px-1 py-2 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
                <h4 className="text-lg font-bold text-[#19194D]">
                  {event.heading}
                </h4>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Articles Section */}
      <div className="lg:h-full lg:w-[30%] h-1/3 w-full rounded-md shadow-2xl hover:mb-5 transition-all duration-500 ease-in-out px-4 py-2 flex flex-col justify-between group">
        <div className="w-full h-[3rem] flex border-b pb-1">
          <h3 className="text-2xl font-bold text-center flex justify-center items-center text-[#19194D]">
            News Articles
          </h3>
          <a
            href="/news"
            className="ml-auto bg-[#19194D] text-white px-4 hover:bg-black transition-all duration-800 ease-in-out rounded-lg flex justify-center items-center my-1"
          >
            See All
          </a>
        </div>

        <div className="w-full h-full overflow-hidden relative">
          <div className="animate-marquee flex flex-col absolute w-full">
            {newsArticles.concat(newsArticles).map((article, index) => (
              <div
                key={index}
                className="w-full h-[10rem] my-2 border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col items-center bg-white transform transition-transform duration-300 hover:cursor-pointer group"
              >
                <div className="w-full h-full flex flex-col justify-center px-4 py-2 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  <h4 className="text-lg font-bold text-[#19194D]">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                  <div dangerouslySetInnerHTML={{ __html: article.content.slice(0, Math.min(article.content.length, 120)) + '...' }} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline CSS for the marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-marquee {
            animation: marquee 45s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .group:hover .group-hover\\:text-blue-500 {
            color: #1E90FF;
          }
        `}
      </style>
    </div>
  );
};

export default NewsArticlesHome;
