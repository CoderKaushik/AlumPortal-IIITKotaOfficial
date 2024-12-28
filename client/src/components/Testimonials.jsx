import { useState } from "react";
import Marquee from "react-fast-marquee";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handlePausePlay = () => {
    setIsPaused(!isPaused);
  };

  const testimonials = [
    {
      name: "John Doe",
      text: "The alumni event was an unforgettable experience, reconnecting with peers and meeting inspiring professionals.",
    },
    {
      name: "Jane Smith",
      text: "An excellent networking opportunity, and the talks were both informative and motivating.",
    },
    {
      name: "David Lee",
      text: "I felt right at home. Great people, great stories, and an amazing atmosphere!",
    },
    {
      name: "Alice Brown",
      text: "It was wonderful to see how much everyone has grown and achieved since our graduation!",
    },
    {
      name: "Michael Johnson",
      text: "The event was well-organized, and I made valuable connections that will benefit my career.",
    },
  ];

  return (
    <div className="w-full bg-[#19194D] py-12">
      {/* Heading and Pause/Play Button */}
      <div className="flex justify-center items-center mb-8">
        <h2 className="md:text-4xl text-2xl font-bold text-white text-center mr-4">
          Alumni Testimonials
        </h2>
        <button
          onClick={handlePausePlay}
          className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 transition rounded-full text-white"
          aria-label={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
        </button>
      </div>

      {/* Testimonials Marquee */}
      <div className="h-[50vh] flex items-center">
        <Marquee pauseOnHover={false} speed={50} gradient={false} play={!isPaused}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-80 bg-white shadow-lg p-6 mx-6 rounded-lg flex-shrink-0 transform transition-transform duration-300 "
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600">
                    {testimonial.name[0]}
                  </span>
                </div>
                <p className="text-gray-700 italic text-center mb-4">
                  "{testimonial.text}"
                </p>
                <p className="text-[#19194D] font-semibold">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;