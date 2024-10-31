import React, { useState, useRef, useEffect } from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const alumniData = [
  {
    name: "Alumni 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 2",
    description: "Phasellus consequat urna et erat volutpat fermentum.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 3",
    description: "Etiam vel sapien vel mauris placerat condimentum.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 2",
    description: "Phasellus consequat urna et erat volutpat fermentum.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 3",
    description: "Etiam vel sapien vel mauris placerat condimentum.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 2",
    description: "Phasellus consequat urna et erat volutpat fermentum.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 3",
    description: "Etiam vel sapien vel mauris placerat condimentum.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 2",
    description: "Phasellus consequat urna et erat volutpat fermentum.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  {
    name: "Alumni 3",
    description: "Etiam vel sapien vel mauris placerat condimentum.",
    imageUrl: "https://via.placeholder.com/150",
    bd: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
  // Additional alumni data entries as needed
];

const ProminentAlumni = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [visibleRows, setVisibleRows] = useState({});
  const rowRefs = useRef([]);

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

    rowRefs.current.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  const handleOpen = (index) => {
    setOpenModalIndex(index);
  };

  const handleClose = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
      <Navbar />
      <div className="h-auto overflow-y-scroll scrollbar-hide md:mt-[10rem] mt-[6rem] px-6 sm:px-8 lg:px-16">
        <h1 className="text-4xl font-bold leading-loose text-[#1A1C4E] mb-6 text-center">
          Prominent Alumni
        </h1>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            {alumniData.map((alumni, index) => (
              <div
                key={index}
                data-index={index}
                ref={(el) => (rowRefs.current[index] = el)}
                onClick={() => handleOpen(index)}
                className={`cursor-pointer w-full sm:w-80 h-60 rounded-lg shadow-xl bg-white transform transition-all duration-700 ease-out delay-${
                  index * 100
                }ms flex flex-col items-center justify-center text-black text-xl font-medium p-4 ${
                  visibleRows[index] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <img
                  src={alumni.imageUrl}
                  alt={alumni.name}
                  className="w-24 h-24 rounded-full mb-2"
                />
                <p>{alumni.name}</p>
                <p className="text-center text-[#1A1C4E] font-normal text-lg">
                  {alumni.bd}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {alumniData.map((alumni, index) => (
        <Modal
          key={index}
          open={openModalIndex === index}
          onClose={handleClose}
          aria-labelledby={`modal-title-${index}`}
          aria-describedby={`modal-description-${index}`}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: 300, sm: 400, md: 500 },
              height: { xs: 500, sm: 500, md: 600 },
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              overflowY: "scroll",
            }}
            className="scrollbar-hide"
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", top: 4, right: 4 }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={alumni.imageUrl}
              alt={alumni.name}
              className="w-full h-40 object-cover rounded-tl-md rounded-tr-md mb-4"
            />
            <Typography
              id={`modal-title-${index}`}
              variant="h6"
              component="h2"
              className="mb-2"
            >
              {alumni.name}
            </Typography>
            <Typography
              id={`modal-description-${index}`}
              className="text-gray-700"
            >
              {alumni.description}
            </Typography>
          </Box>
        </Modal>
      ))}
    </div>
  );
};

export default ProminentAlumni;
