import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Search as SearchIcon } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ClearIcon from "@mui/icons-material/Clear";
import { TextField, InputAdornment, IconButton, Button } from "@mui/material";
import C1 from "../assets/14.webp";
import C2 from "../assets/15.webp";
import C3 from "../assets/16.webp";
import Carousel from "../components/CarouselEvents.jsx"; // Import the Carousel component

const Events = () => {
    const rowRefs = useRef([]);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [initialEvents, setInitialEvents] = useState([]);
    const [visibleRows, setVisibleRows] = useState({});

    const eventImages = [C1, C2, C3, C1, C2, C3]; // Array of event images
    const eventHeadings = [
        "Innovative Tech Symposium 2024",
        "Annual Developer Summit",
        "AI & Machine Learning Workshop",
        "Digital Transformation Expo",
        "AI & Machine Learning Workshop",
        "Digital Transformation Expo",
    ]; // Array of event headings

    const eventDescriptions = [
        "Join us for an insightful symposium exploring the latest innovations in technology. Network with industry leaders and gain knowledge on emerging trends shaping the future. ",
        "Meet fellow developers and industry experts at the Annual Developer Summit, featuring hands-on coding sessions, tech talks, and opportunities for skill enhancement.",
        "An in-depth workshop focusing on practical applications of AI and Machine Learning. Learn from experts and collaborate on real-world projects in this dynamic session.",
        "Discover the latest advancements in digital transformation at this expo. From automation to cybersecurity, explore the tools driving change in today's business landscape.",
        "An in-depth workshop focusing on practical applications of AI and Machine Learning. Learn from experts and collaborate on real-world projects in this dynamic session.",
        "Discover the latest advancements in digital transformation at this expo. From automation to cybersecurity, explore the tools driving change in today's business landscape.",
    ]; // Array of event descriptions

    const imageGroups = [
        [
            eventImages[0],
            eventImages[1],
            eventImages[1],
            eventImages[1],
            eventImages[1],
            eventImages[1],
        ], // Group for the first event
        [eventImages[2], eventImages[0]], // Group for the second event
        [eventImages[1], eventImages[2]], // Group for the third event
        [eventImages[0], eventImages[1]], // Group for the fourth event
        [eventImages[1], eventImages[2]], // Group for the third event
        [eventImages[0], eventImages[1]], // Group for the fourth event
    ];

    useEffect(() => {
        const initialEventsData = eventHeadings.map((heading, index) => ({
            heading,
            description: eventDescriptions[index],
            images: imageGroups[index],
        }));
        setFilteredEvents(initialEventsData);
        setInitialEvents(initialEventsData);
    }, []);

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
    }, [filteredEvents]);

    const openCarousel = (index) => {
        setCurrentImages(imageGroups[index]);
        setIsCarouselOpen(true);
    };

    const closeCarousel = () => {
        setIsCarouselOpen(false);
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearch = () => {
        const filtered = initialEvents.filter(event => {
            const keyword = searchInput.toLowerCase();
            return event.heading.toLowerCase().includes(keyword) || event.description.toLowerCase().includes(keyword);
        });
        setFilteredEvents(filtered);
    };

    const handleSearchKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const clearSearch = () => {
        setSearchInput("");
        setFilteredEvents(initialEvents);
    };

    return (
        <div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
            <Navbar />
            <div className="h-auto mt-[8.375rem] max-w-980:mt-[90px] max-w-492:mt-[70px] overflow-scroll scrollbar-hide md:px-8 px-2 pb-6">
                <div className="w-full h-[4rem] flex justify-center items-center">
                    <div className="w-full md:h-[5rem] h-[4.5rem] flex justify-between items-center md:px-6 px-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg text-white">
                        <h1 className="text-2xl font-semibold md:block hidden">
                            Events by Alumni Cell, IIIT Kota
                        </h1>
                        <div className="md:w-1/2 w-full flex items-center">
                            <TextField
                                variant="outlined"
                                placeholder="Search Events..."
                                fullWidth
                                value={searchInput}
                                onChange={handleSearchInputChange}
                                onKeyPress={handleSearchKeyPress}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon style={{ color: "#4A5568" }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleSearch}>
                                                <ArrowForwardIcon style={{ color: "#4A5568" }} />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "8px",
                                        backgroundColor: "white",
                                        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "transparent",
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#CBD5E0",
                                        },
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        padding: "10px 14px",
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#CBD5E0",
                                    },
                                }}
                            />
                            <Button
                                onClick={clearSearch}
                                variant="contained"
                                color="primary"
                                sx={{ ml: 2, backgroundColor: searchInput || filteredEvents.length !== initialEvents.length ? "#38B2AC" : "#CBD5E0" }}
                                disabled={filteredEvents.length === initialEvents.length}
                            >
                                Clear
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Event Cards */}
                {filteredEvents.map((event, index) => (
                    <div
                        key={index}
                        className={`w-full h-auto md:h-[20rem] mt-6 flex md:flex-row flex-col max-w-492:flex-col-reverse rounded-lg shadow-xl transform transition-all duration-700 ease-out delay-${
                            index * 100
                        } ${visibleRows[index] ? "opacity-100" : "opacity-0"}`}
                        ref={(el) => (rowRefs.current[index] = el)}
                        data-index={index}
                    >
                        {/* Alternating text and image layout */}
                        <div
                            className={`md:w-[70%] md:h-full w-full h-1/2 px-4 flex flex-col max-w-492:justify-center justify-start pt-6 items-center max-w-492:py-8 ${
                                index % 2 === 0 ? "" : "md:order-2 order-1" // Reverse order for alternating layout
                            }`}
                        >
                            <h1 className="w-full py-2 font-bold md:text-xl text-lg text-[#19194D]">
                                {event.heading}
                            </h1>
                            <p className="mt-3 md:text-lg text-sm text-[#19194D] leading-loose">
                                {event.description}
                            </p>
                        </div>
                        <div
                            className={`md:w-[30%] md:min-h-[20rem] w-full h-1/2 bg-gray-300 hover:cursor-pointer rounded-tr-lg rounded-br-lg ${
                                index % 2 === 0 ? "" : "md:order-1 order-2" // Reverse order for alternating layout
                            }`}
                            onClick={() => openCarousel(index)}
                        >
                            <img
                                src={event.images[0]}
                                alt="img__"
                                className="w-full h-full object-cover md:rounded-bl-none rounded-tl-md rounded-tr-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
            {isCarouselOpen && (
                <Carousel images={currentImages} onClose={closeCarousel} />
            )}
        </div>
    );
};

export default Events;