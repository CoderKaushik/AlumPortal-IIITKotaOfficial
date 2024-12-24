import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

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
      name: "David Lee",
      text: "I felt right at home. Great people, great stories, and an amazing atmosphere!",
    },
  ];

  return (
    <div className="w-full bg-[#19194D] py-10">
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-3xl font-bold text-white text-center">Alumni Testimonials</h2>
        <button onClick={handlePausePlay} className="ml-4 text-white bg-blue-500 hover:bg-blue-600 transition rounded-md p-1" info="Pause/Play Testimonials">
          {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
        </button>
      </div>
      <div className="h-[50vh] flex items-center">
        <Marquee pauseOnHover={false} speed={50} gradient={false} play={!isPaused}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-80 bg-white shadow-lg p-6 mx-6 rounded-lg flex-shrink-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
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
