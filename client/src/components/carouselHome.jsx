import React, { useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import C1 from "../assets/14.webp"
import C2 from "../assets/15.webp"
import C3 from "../assets/16.webp"
import { useKeenSlider } from 'keen-slider/react';

const carouselHome = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged() {
        resetTimer();
      },
    }
  );

  let timer;

  const startTimer = () => {
    timer = setInterval(() => {
      instanceRef.current?.next();
    }, 8000); // 5000 ms interval for automatic slide change
  };

  const resetTimer = () => {
    clearInterval(timer);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timer);
  }, [instanceRef]);

  return (
    <div className="relative">
      {/* <div ref={sliderRef} className="keen-slider h-[35.5rem] max-w-980:h-[22rem] max-w-492:h-[16.1rem] mt-[8.375rem] max-w-980:mt-[90px] max-w-492:mt-[58px]"> */}
      <div ref={sliderRef} className="keen-slider lg:h-[78vh] md:h-[65vh] sm:h-[55vh] h-[40vh] mt-[8.375rem] max-w-980:mt-[90px] max-w-492:mt-[58px]">
        <div className="keen-slider__slide flex justify-center items-center"><img src={C1} alt="" className='object-cover w-full h-full' /></div>
        <div className="keen-slider__slide flex justify-center items-center"><img src={C2} alt="" className='object-cover w-full h-full' /></div>
        <div className="keen-slider__slide flex justify-center items-center"><img src={C3} alt="" className='object-cover w-full h-full' /></div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-8xl flex justify-center items-center text-gray-100 px-3 py-1"
        onClick={() => {
          instanceRef.current?.prev();
          resetTimer();
        }}
      >
        <ArrowLeftIcon style={{fontSize : '3rem'}} />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-8xl flex justify-center items-center text-gray-100 px-3 py-1"
        onClick={() => {
          instanceRef.current?.next();
          resetTimer();
        }}
      >
        <ArrowRightIcon style={{fontSize : '3rem'}} />
      </button>
    </div>
  );
};

export default carouselHome;
