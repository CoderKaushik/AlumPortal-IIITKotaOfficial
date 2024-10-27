import React, { useState, useEffect } from "react";
import { Close, ArrowBackIos, ArrowForwardIos, RotateLeft, RotateRight } from "@mui/icons-material";

const Carousel = ({ images, currentIndex, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [rotation, setRotation] = useState(0);

  const handleNext = () => {
    setRotation(0); // Reset rotation on image change
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setRotation(0); // Reset rotation on image change
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const rotateLeft = () => setRotation((prevRotation) => prevRotation - 90);
  const rotateRight = () => setRotation((prevRotation) => prevRotation + 90);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="relative max-w-screen-lg w-full h-full flex items-center justify-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-8 text-gray-300 hover:text-white transition-colors duration-300 z-40"
        >
          <Close style={{ fontSize: 40 }} />
        </button>

        {/* Image Display with Rotation */}
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="md:max-h-[60vh] max-h-[40vh] object-contain mx-auto rounded-lg shadow-lg transition-transform duration-300"
          style={{ transform: `rotate(${rotation}deg)` }}
        />

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="text-gray-300 hover:text-white bg-black bg-opacity-50 p-2 rounded-full transition hover:bg-opacity-75 shadow-lg flex justify-center items-center">
            <ArrowBackIos style={{ fontSize: 30 }} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="text-gray-300 hover:text-white bg-black bg-opacity-50 p-2 rounded-full transition hover:bg-opacity-75 shadow-lg flex justify-center items-center">
            <ArrowForwardIos style={{ fontSize: 30 }} />
          </button>
        </div>

        {/* Rotation Controls */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button onClick={rotateLeft}
                  className="text-gray-300 hover:text-white bg-black bg-opacity-50 p-2 rounded-full transition hover:bg-opacity-75 shadow-lg">
            <RotateLeft style={{ fontSize: 30 }} />
          </button>
          <button onClick={rotateRight}
                  className="text-gray-300 hover:text-white bg-black bg-opacity-50 p-2 rounded-full transition hover:bg-opacity-75 shadow-lg">
            <RotateRight style={{ fontSize: 30 }} />
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-300 bg-black bg-opacity-50 rounded-full px-4 py-1 text-sm shadow-lg">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
