import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eventImages from "../GalleryAssets/EventImages.json";

const events = [
  {
    title: "Innovative Tech Symposium 2024",
    description: "Join us for an insightful symposium exploring the latest innovations in technology. Network with industry leaders and gain knowledge on emerging trends shaping the future.",
    image: eventImages["Innovative Tech Symposium 2024"][0],
    link: "/events/innovative-tech-symposium-2024",
  },
  {
    title: "Annual Developer Summit",
    description: "Meet fellow developers and industry experts at the Annual Developer Summit, featuring hands-on coding sessions, tech talks, and opportunities for skill enhancement.",
    image: eventImages["Annual Developer Summit"][0],
    link: "/events/annual-developer-summit",
  },
  {
    title: "AI & Machine Learning Workshop",
    description: "An in-depth workshop focusing on practical applications of AI and Machine Learning. Learn from experts and collaborate on real-world projects in this dynamic session.",
    image: eventImages["AI & Machine Learning Workshop"][0],
    link: "/events/ai-machine-learning-workshop",
  },
  {
    title: "Digital Transformation Expo",
    description: "Discover the latest advancements in digital transformation at this expo. From automation to cybersecurity, explore the tools driving change in today's business landscape.",
    image: eventImages["Digital Transformation Expo"][0],
    link: "/events/digital-transformation-expo",
  },
];

const newsArticles = [
  {
    title: "IIIT Kota partners with leading tech companies",
    description: "For advanced research projects.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Student achievements",
    description: "Our students secured top positions in national coding competitions.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "New courses on Data Science and Blockchain",
    description: "IIIT Kota announces new courses.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Alumni Spotlight",
    description: "Catch up with our alumni excelling in the tech industry.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "IIIT Kota ranked among top tech institutes",
    description: "Ranked among the top emerging tech institutes in India.",
    image: "https://via.placeholder.com/150",
  },
];

const NewsArticlesHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if Twitter widgets script is already loaded; otherwise, load it
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.twttr.widgets.load();
    }
  }, []);

  const handleEventClick = (link) => {
    navigate(link);
  };

  return (
    <div className="w-full lg:h-[82vh] h-[100rem] flex lg:flex-row flex-col justify-between px-2 lg:px-8 py-4">
      {/* Twitter Timeline */}
      <div className="lg:h-fit lg:w-[30%] h-1/3 w-full rounded-md shadow-2xl hover:mb-5 hover:cursor-pointer transition-all duration-500 ease-in-out p-4 flex flex-col justify-between group">
        <a
          className="twitter-timeline w-full h-full"
          href="https://twitter.com/IIITKotaOffice?ref_src=twsrc%5Etfw"
        >
          Tweets by IIITKotaOffice
        </a>
      </div>

      {/* Events Section */}
      <div className="lg:h-full lg:w-[30%] h-1/3 w-full rounded-md shadow-2xl hover:mb-5 transition-all duration-500 ease-in-out px-4 py-2 flex flex-col justify-between group">
        <div className="w-full h-[3rem] flex border-b pb-1">
          <h3 className="text-2xl font-bold text-center flex justify-center items-center text-[#19194D]">
            Events
          </h3>
          <a
            href="/events"
            className="ml-auto bg-[#19194D] text-white px-4 hover:bg-black transition-all duration-800 ease-in-out rounded-lg flex justify-center items-center my-1"
          >
            See All
          </a>
        </div>

        <div className="w-full h-full overflow-hidden relative">
          <div className="animate-marquee flex flex-col absolute w-full">
            {events.concat(events).map((event, index) => (
              <div
                key={index}
                className="w-full h-[25rem] my-2 border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col items-center bg-white transform transition-transform duration-300 hover:cursor-pointer"
                onClick={() => handleEventClick(event.link)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[50%] object-cover"
                />
                <div className="w-full h-[50%] flex flex-col justify-center px-4 py-2 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  <h4 className="text-lg font-bold text-[#19194D]">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
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
                className="w-full h-[25rem] my-2 border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col items-center bg-white transform transition-transform duration-300 hover:cursor-pointer group"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[70%] object-cover"
                />
                <div className="w-full h-[30%] flex flex-col justify-center px-4 py-2 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
                  <h4 className="text-lg font-bold text-[#19194D]">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600">{article.description}</p>
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
