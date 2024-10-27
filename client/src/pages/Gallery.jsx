import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar.jsx";
import imagesData from "../path-to-your-json/images.json";
import Carousel from "../components/Carousel";

// icons
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';

//other components from mui
import Modal from "@mui/material/Modal";

const Gallery = () => {
    const [groups, setGroups] = useState([]);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentGroup, setCurrentGroup] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const groupsPerPage = 6;

    useEffect(() => {
        setGroups(imagesData);
        if (imagesData.length > 0) {
            setCurrentGroup(imagesData[0]);
        }
    }, []);

    const startIndex = (currentPage - 1) * groupsPerPage;
    const paginatedGroups = groups.slice(startIndex, startIndex + groupsPerPage);

    const nextPage = () => {
        if (currentPage < Math.ceil(groups.length / groupsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const openCarousel = (index) => {
        setCurrentImageIndex(index);
        setIsCarouselOpen(true);
    };

    const closeCarousel = () => {
        setIsCarouselOpen(false);
    };

    const handleGroupClick = (group) => {
        setCurrentGroup(group);
    };

    return (
        <div className="flex w-screen h-screen bg-gray-100">
            <Navbar />
            <div className="flex md:flex-row flex-col w-full md:h-[80vh] mt-[9rem] max-w-980:mt-[100px] max-w-492:mt-[75px] md:px-2">

                {/* Mobile Header: Group Name and Navigation */}
                <div className="flex h-12 md:hidden justify-between items-center bg-white px-3 shadow-xl">
                    <span className="text-sm font-semibold text-gray-800 w-[80%]">
                        {currentGroup ? currentGroup.groupName : "Select a group"}
                    </span>
                    <div className="w-[20%] h-full flex justify-end items-center text-lg text-teal-600" onClick={() => setIsModalOpen(true)}>
                        <ListIcon />
                    </div>
                </div>

                {/* Group Selection Modal for Mobile */}
                <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="flex flex-col gap-4 p-4 bg-white w-11/12 max-w-md mx-auto my-8 rounded-lg shadow-lg">
                        <div className="w-full flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-800">Browse</h3>
                        <button onClick={() => setIsModalOpen(false)} className="text-lg text-gray-500 hover:text-gray-700"><CloseIcon /></button>
                        </div>
                        <div className="flex flex-col gap-2 overflow-y-auto">
                            {paginatedGroups.map((group, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleGroupClick(group)}
                                    className={`p-4 rounded-lg shadow-md cursor-pointer transition ${
                                        currentGroup && currentGroup.groupName === group.groupName
                                            ? "bg-teal-100"
                                            : "hover:bg-gray-100"
                                    }`}
                                >
                                    <h4 className="text-md font-medium text-gray-700">
                                        {group.groupName}
                                    </h4>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={prevPage}
                                disabled={currentPage === 1}
                                className={`px-3 py-1 rounded-full ${
                                    currentPage === 1
                                        ? "bg-gray-300 cursor-not-allowed"
                                        : "bg-teal-500 text-white hover:bg-teal-600"
                                }`}
                            >
                                Prev
                            </button>
                            <span className="text-gray-700">
                                Page {currentPage} of {Math.ceil(groups.length / groupsPerPage)}
                            </span>
                            <button
                                onClick={nextPage}
                                disabled={currentPage === Math.ceil(groups.length / groupsPerPage)}
                                className={`px-3 py-1 rounded-full ${
                                    currentPage === Math.ceil(groups.length / groupsPerPage)
                                        ? "bg-gray-300 cursor-not-allowed"
                                        : "bg-teal-500 text-white hover:bg-teal-600"
                                }`}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </Modal>

                {/* Sidebar: Expanded Group Index */}
                <div className="hidden md:w-1/4 md:h-full bg-white p-4 shadow-md rounded-lg md:flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Gallery</h3>
                    <div className="flex flex-col gap-2 overflow-y-auto">
                        {paginatedGroups.map((group, index) => (
                            <div
                                key={index}
                                onClick={() => handleGroupClick(group)}
                                className={`p-4 rounded-lg shadow-md cursor-pointer transition transform ${
                                    currentGroup && currentGroup.groupName === group.groupName
                                        ? "bg-teal-100"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                <h4 className="text-md font-medium text-gray-700">
                                    {group.groupName}
                                </h4>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded-full ${
                                currentPage === 1
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-teal-500 text-white hover:bg-teal-600"
                            }`}
                        >
                            Prev
                        </button>
                        <span className="text-gray-700">
                            Page {currentPage} of {Math.ceil(groups.length / groupsPerPage)}
                        </span>
                        <button
                            onClick={nextPage}
                            disabled={currentPage === Math.ceil(groups.length / groupsPerPage)}
                            className={`px-3 py-1 rounded-full ${
                                currentPage === Math.ceil(groups.length / groupsPerPage)
                                    ? "bg-gray-300 cursor-not-allowed"
                                    : "bg-teal-500 text-white hover:bg-teal-600"
                            }`}
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Main Content: Selected Group's Images */}
                <div className="w-full md:w-3/4 h-full md:py-2 py-1 md:px-6 overflow-y-auto scrollbar-hide text-center">
                    {currentGroup ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-2 p-1">
                            {currentGroup.urls.map((url, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer transform transition duration-200 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl bg-white"
                                    onClick={() => openCarousel(imgIndex)}
                                >
                                    <img
                                        src={url}
                                        alt={`${currentGroup.groupName} Image ${imgIndex + 1}`}
                                        className="w-full h-48 object-contain rounded-t-lg"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-lg h-full flex justify-center items-center">
                            Select a group to view its images.
                        </p>
                    )}
                </div>

                {/* Carousel Modal */}
                {isCarouselOpen && currentGroup && (
                    <Carousel
                        images={currentGroup.urls}
                        currentIndex={currentImageIndex}
                        onClose={closeCarousel}
                    />
                )}
            </div>
        </div>
    );
};

export default Gallery;
