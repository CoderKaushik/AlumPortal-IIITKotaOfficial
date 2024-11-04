import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import C1 from "../assets/14.webp";
import C2 from "../assets/15.webp";
import C3 from "../assets/16.webp";

const Events = () => {
  const rowRefs = useRef([]);
  const [visibleRows, setVisibleRows] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleRows((prev) => ({
            ...prev,
            [entry.target.dataset.index]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    rowRefs.current.forEach((row) => row && observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
      <Navbar />
      <div className="lg:h-auto md:h-[65vh] sm:h-[55vh] h-[40vh] mt-[8.375rem] max-w-980:mt-[90px] max-w-492:mt-[58px] overflow-scroll scrollbar-hide px-8 pb-6">
        <div className="w-full h-[4rem] border border-black flex justify-center items-center">
          SEARCHBAR AREA
        </div>

        {/* First Event Card */}
        <div
          className={`w-full h-auto mt-6 flex rounded-lg shadow-xl transform transition-all duration-700 ease-out delay-0 ${
            visibleRows[0] ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          ref={(el) => (rowRefs.current[0] = el)}
          data-index="0"
        >
          <div className="w-[70%] h-full px-4">
            <h1 className="w-full py-2 font-bold text-xl text-[#19194D]">
              EVENT NAME
            </h1>
            <p className="mt-3 text-lg text-[#19194D] leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-[30%] min-h-[20rem] bg-gray-300 hover:cursor-pointer rounded-tr-lg rounded-br-lg">
            <img src={C1} alt="img__" className="w-full h-full object-cover rounded-tr-lg rounded-br-lg" />
          </div>
        </div>

        {/* Second Event Card */}
        <div
          className={`w-full h-auto mt-6 flex rounded-lg shadow-xl transform transition-all duration-700 ease-out delay-100 ${
            visibleRows[1] ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          ref={(el) => (rowRefs.current[1] = el)}
          data-index="1"
        >
          <div className="w-[30%] min-h-[20rem] bg-gray-300 hover:cursor-pointer rounded-tl-lg rounded-bl-lg">
            <img src={C2} alt="img__" className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg" />
          </div>
          <div className="w-[70%] h-full px-4">
            <h1 className="w-full py-2 font-bold text-xl text-[#19194D]">
              EVENT NAME
            </h1>
            <p className="mt-3 text-lg text-[#19194D] leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* Third Event Card */}
        <div
          className={`w-full h-auto mt-6 flex rounded-lg shadow-xl transform transition-all duration-700 ease-out delay-200 ${
            visibleRows[2] ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          ref={(el) => (rowRefs.current[2] = el)}
          data-index="2"
        >
          <div className="w-[70%] h-full px-4">
            <h1 className="w-full py-2 font-bold text-xl text-[#19194D]">
              EVENT NAME
            </h1>
            <p className="mt-3 text-lg text-[#19194D] leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="w-[30%] min-h-[20rem] bg-gray-300 hover:cursor-pointer rounded-tr-lg rounded-br-lg">
            <img src={C3} alt="img__" className="w-full h-full object-cover rounded-tr-lg rounded-br-lg" />
          </div>
        </div>

        {/* Fourth Event Card */}
        <div
          className={`w-full h-auto mt-6 flex rounded-lg shadow-xl transform transition-all duration-700 ease-out delay-300 ${
            visibleRows[3] ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          ref={(el) => (rowRefs.current[3] = el)}
          data-index="3"
        >
          <div className="w-[30%] min-h-[20rem] bg-gray-300 hover:cursor-pointer rounded-tl-lg rounded-bl-lg">
            <img src={C1} alt="img__" className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg" />
          </div>
          <div className="w-[70%] h-full px-4">
            <h1 className="w-full py-2 font-bold text-xl text-[#19194D]">
              EVENT NAME
            </h1>
            <p className="mt-3 text-lg text-[#19194D] leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
