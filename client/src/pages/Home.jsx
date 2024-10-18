import React, { useEffect, useRef, useState } from "react";
import CountUp from "countup";
import "intersection-observer"; // Polyfill for older browsers

import Navbar from "../components/navbar.jsx";
import CarouselHome from "../components/carouselHome.jsx";
import InfiniteText from "../components/infiniteText.jsx";
import NewsArticlesHome from "../components/NewsArticlesHome.jsx";
import Footer from "../components/Footer.jsx";

import CollectionsIcon from "@mui/icons-material/Collections";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Home = () => {

	const scrollableDivRef = useRef(null); // Create a ref for the scrollable div

	const [showButton, setShowButton] = useState(false); // State to track button visibility

    const scrollToTop = () => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (scrollableDivRef.current) {
            const isScrolled = scrollableDivRef.current.scrollTop > 100; // Change 100 to your desired threshold
            setShowButton(isScrolled);
        }
    };

	useEffect(() => {
        const div = scrollableDivRef.current;
        if (div) {
            div.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (div) {
                div.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

	useEffect(() => {
		const counters = document.querySelectorAll(".counter");

		const animateCounters = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const counter = entry.target;
					const target = +counter.getAttribute("data-target");
					const countElement = counter.querySelector(".count");

					new CountUp(countElement, 0, target, 0, 2.5).start();
					observer.unobserve(counter);
				}
			});
		};

		const observer = new IntersectionObserver(animateCounters, {
			threshold: 0.5, // Trigger when at least 50% of the element is visible
		});

		counters.forEach((counter) => {
			observer.observe(counter);
		});
	}, []);

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gray-100" ref={scrollableDivRef}>
			<Navbar />
			<CarouselHome />
			<InfiniteText />
			{/* About Us */}
			<div className="w-full h-auto py-8 flex flex-col justify-center items-center">
				<p className=" w-[90%] lg:w-[80%] h-[3rem] text-2xl lg:text-3xl text-[#19194D] mb-4">
					About Alumni Cell, IIIT Kota
				</p>
				<p className=" w-[90%] lg:w-[80%] h-auto py-2 text-sm lg:text-lg mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					eum pariatur voluptas. Ullam minus repellat recusandae. Aliquam sunt
					omnis facere expedita temporibus nam quos? Facere, et quidem
					reprehenderit asperiores ut eaque nesciunt amet harum velit odio cum
					impedit maxime incidunt animi aliquam numquam odit, perferendis
					eligendi ipsam vero doloribus beatae. <br /> <br /> Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Neque quae libero id ratione
					magnam dolorum aspernatur maiores omnis sint officiis, laboriosam eos
					aliquid minima animi impedit, adipisci eaque nulla earum. Nostrum aut
					quidem asperiores nesciunt, dolor veritatis. Saepe asperiores,
					perferendis itaque beatae assumenda, laudantium natus delectus nam
					repellendus voluptatem ullam?
					<br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Neque quae libero id ratione magnam dolorum aspernatur maiores omnis
					sint officiis, laboriosam eos aliquid minima animi impedit, adipisci
					eaque nulla earum. Nostrum aut quidem asperiores nesciunt, dolor
					veritatis. Saepe asperiores, perferendis itaque beatae assumenda,
					laudantium natus delectus nam repellendus voluptatem ullam?
				</p>
				<div className="lg:w-[80%] w-[90%] h-auto flex justify-start">
					<button className="lg:w-[7rem] h-[3rem] w-[6rem] bg-[#19194D] hover:bg-blue-600 rounded-md shadow-xl text-white flex justify-center items-center">
						Read More
					</button>
				</div>
			</div>
			{/* Stats Component */}
			<div className="w-full h-[10rem] lg:h-[15rem] bg-[#19194D] lg:p-4">
				<div className="w-full h-full flex flex-row gap-2">
					<div
						className="counter w-1/3 h-full flex flex-col gap-4 justify-center items-center text-white text-xl lg:text-3xl"
						data-target="3500"
					>
						<p className="count">0</p>
						<p className="text-center text-[18px] lg:text-2xl">
							Alumni Registered
						</p>
					</div>
					<div
						className="counter w-1/3 h-full flex flex-col gap-4 justify-center items-center text-white text-xl lg:text-3xl"
						data-target="5800"
					>
						<p className="count">0</p>
						<p className="text-center text-[18px] lg:text-2xl">
							Alumni Registered
						</p>
					</div>
					<div
						className="counter w-1/3 h-full flex flex-col gap-4 justify-center items-center text-white text-xl lg:text-3xl"
						data-target="72000"
					>
						<p className="count">0</p>
						<p className="text-center text-[18px] lg:text-2xl">
							Alumni Registered
						</p>
					</div>
				</div>
			</div>
			{/* Benifits Offered */}
			<div className="w-full h-auto">
				<h1 className="text-center text-3xl font-semibold my-8 text-[#19194D]">
					Benefits Offered
				</h1>
				<div className="flex flex-col lg:flex-row items-center justify-evenly py-4">
					<div className="h-[15rem] lg:h-[20rem] w-[85%] rounded-md lg:w-[30%] shadow-2xl hover:cursor-pointer lg:hover:mt-5 transition-all duration-500 ease-in-out mb-8 lg:my-8 px-3 py-4 lg:p-4 flex flex-col group">
						<div className="w-full h-1/4 flex items-center lg:items-center text-2xl font-semibold text-[#19194D] transition-colors duration-500 ease-in-out group-hover:text-blue-500">
							<p className="text-xl lg:text-3xl">Lorem, ipsum dolor.</p>
						</div>
						<div className="w-full h-3/4 flex items-center text-sm lg:text-lg text-[#19194D]">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
								similique officiis modi odio? Ipsam error, atque voluptates enim
								consectetur quisquam distinctio asperiores iusto, totam, dolorem
								molestiae architecto. Sint, voluptate iure.
							</p>
						</div>
					</div>

					<div className="h-[15rem] lg:h-[20rem] w-[85%] rounded-md lg:w-[30%] shadow-2xl hover:cursor-pointer lg:hover:mt-5 transition-all duration-500 ease-in-out mb-8 lg:my-8 px-3 py-4 lg:p-4 flex flex-col group">
						<div className="w-full h-1/4 flex items-center lg:items-center text-2xl font-semibold text-[#19194D] transition-colors duration-500 ease-in-out group-hover:text-blue-500">
							<p className="text-xl lg:text-3xl">Lorem, ipsum dolor.</p>
						</div>
						<div className="w-full h-3/4 flex items-center text-sm lg:text-lg text-[#19194D]">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
								similique officiis modi odio? Ipsam error, atque voluptates enim
								consectetur quisquam distinctio asperiores iusto, totam, dolorem
								molestiae architecto. Sint, voluptate iure.
							</p>
						</div>
					</div>

					<div className="h-[15rem] lg:h-[20rem] w-[85%] rounded-md lg:w-[30%] shadow-2xl hover:cursor-pointer lg:hover:mt-5 transition-all duration-500 ease-in-out mb-8 lg:my-8 px-3 py-4 lg:p-4 flex flex-col group">
						<div className="w-full h-1/4 flex items-center lg:items-center text-2xl font-semibold text-[#19194D] transition-colors duration-500 ease-in-out group-hover:text-blue-500">
							<p className="text-xl lg:text-3xl">Lorem, ipsum dolor.</p>
						</div>
						<div className="w-full h-3/4 flex items-center text-sm lg:text-lg text-[#19194D]">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
								similique officiis modi odio? Ipsam error, atque voluptates enim
								consectetur quisquam distinctio asperiores iusto, totam, dolorem
								molestiae architecto. Sint, voluptate iure.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* quick access */}
			<div className="w-full h-auto lg:h-[399px] bg-[#19194D] flex justify-center items-center py-8">
				<div className="w-3/4 h-full flex flex-col">
					<div className="w-full h-[30%] border-b border-white flex flex-col justify-end items-center text-white font-semibold lg:text-4xl text-3xl pb-4">
						Quick Access
					</div>
					<div className="w-full h-[70%] border-t border-white flex justify-center items-center">
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 p-4 max-w-5xl">
							<div className="lg:w-[10rem] lg:h-[10rem] w-[7.5rem] h-[7.5rem] hover:w-[8rem] hover:h-[8rem] bg-[#1761A1] rounded-xl flex flex-col justify-center items-center gap-2 hover:cursor-pointer lg:hover:w-[10.5rem] lg:hover:h-[10.5rem] transition-all duration-500 ease-in-out text-white shadow-2xl">
								<CollectionsIcon style={{ width: "4rem", height: "4rem" }} />
								<p>Gallery</p>
							</div>

							<div className="lg:w-[10rem] lg:h-[10rem] w-[7.5rem] h-[7.5rem] hover:w-[8rem] hover:h-[8rem] bg-[#1761A1] rounded-xl flex flex-col justify-center items-center gap-2 hover:cursor-pointer lg:hover:w-[10.5rem] lg:hover:h-[10.5rem] transition-all duration-500 ease-in-out text-white shadow-2xl">
								<CollectionsIcon style={{ width: "4rem", height: "4rem" }} />
								<p>Gallery</p>
							</div>

							<div className="lg:w-[10rem] lg:h-[10rem] w-[7.5rem] h-[7.5rem] hover:w-[8rem] hover:h-[8rem] bg-[#1761A1] rounded-xl flex flex-col justify-center items-center gap-2 hover:cursor-pointer lg:hover:w-[10.5rem] lg:hover:h-[10.5rem] transition-all duration-500 ease-in-out text-white shadow-2xl">
								<CollectionsIcon style={{ width: "4rem", height: "4rem" }} />
								<p>Gallery</p>
							</div>

							<div className="lg:w-[10rem] lg:h-[10rem] w-[7.5rem] h-[7.5rem] hover:w-[8rem] hover:h-[8rem] bg-[#1761A1] rounded-xl flex flex-col justify-center items-center gap-2 hover:cursor-pointer lg:hover:w-[10.5rem] lg:hover:h-[10.5rem] transition-all duration-800 ease-in-out text-white shadow-2xl">
								<CollectionsIcon style={{ width: "4rem", height: "4rem" }} />
								<p>Gallery</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* News and articles home component */}
			<NewsArticlesHome />
			{/* Footer */}

			<Footer />
			{showButton && ( // Conditionally render the button
                <div
				className={`absolute bottom-20 right-4 h-12 w-12 rounded-full bg-[#38B6FF] z-20 flex justify-center items-center hover:cursor-pointer transition-opacity duration-300 ease-in-out transform ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                onClick={scrollToTop}
                >
                    <KeyboardArrowUpIcon style={{ height: '40px', width: '40px', color: 'white' }} />
                </div>
            )}
		</div>
	);
};

export default Home;
