import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Events = () => {
    return (
        <div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
            <Navbar />
            <div className="h-screen mt-[10rem] px-6 sm:px-8 lg:px-16">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1} // Ensures only one slide shows at a time
                    centeredSlides={true} // Centers the current slide
                    loop={true} // Allows looping through slides
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="w-full h-full"
                >
                    {[...Array(6)].map((_, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex items-center justify-center w-full h-full"
                        >
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-indigo-300 to-blue-400 rounded-lg shadow-lg p-6">
                                <img
                                    src={`https://via.placeholder.com/300?text=Event+${index + 1}`}
                                    alt={`Event ${index + 1}`}
                                    className="w-40 h-40 rounded-full mb-4"
                                />
                                <h3 className="text-2xl font-semibold text-white mb-2">Event {index + 1}</h3>
                                <p className="text-white text-center">
                                    Join us for an exciting event filled with insights and networking!
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Footer />
        </div>
    );
};

export default Events;
