import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Person, Work, ContactMail, EmojiEvents, Email, Phone, LocationOn, School, Business } from '@mui/icons-material';

const ProfileIdea = () => {
	const [selectedTab, setSelectedTab] = useState("Personal Info.");

	const renderContent = () => {
		switch (selectedTab) {
			case "Personal Info.":
				return (
					<div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<Business className="text-blue-500" />
							<p className="text-xl font-semibold">IIIT Kota Related Experience</p>
						</div>
						<div className="flex items-center gap-2">
							<Person className="text-blue-500" />
							<p className="text-lg">Alumni</p>
						</div>
						<div className="flex items-center gap-2">
							<School className="text-blue-500" />
							<p className="text-lg">2022kucp1077</p>
						</div>
						<div className="flex items-center gap-2">
							<School className="text-blue-500" />
							<p className="text-lg">Bachelor's in Technology, Computer Science and Engineering</p>
						</div>
						<div className="flex items-center gap-2">
							<School className="text-blue-500" />
							<p className="text-lg">Batch of 2026 • CSE</p>
						</div>
					</div>
				);
			case "Professional Info.":
				return (
					<div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<EmojiEvents className="text-blue-500" />
							<p className="text-xl font-semibold">Work Information</p>
						</div>
						<div className="flex items-center gap-2">
							<School className="text-blue-500" />
							<p className="text-lg">Currently a Student at IIIT Kota</p>
						</div>
						<div className="flex items-center gap-2">
							<Business className="text-blue-500" />
							<p className="text-lg">Past Companies / Institutes</p>
						</div>
						<div className="flex items-center gap-2">
							<Business className="text-blue-500" />
							<p className="text-lg">Paathshala</p>
						</div>
					</div>
				);
			case "Contact":
				return (
					<div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<ContactMail className="text-blue-500" />
							<p className="text-xl font-semibold">Contact Information</p>
						</div>
						<div className="flex items-center gap-2">
							<Email className="text-blue-500" />
							<p className="text-lg">thehiteshwarkaushik@gmail.com</p>
						</div>
						<div className="flex items-center gap-2">
							<Phone className="text-blue-500" />
							<p className="text-lg">7206578853</p>
						</div>
						<div className="flex items-center gap-2">
							<LocationOn className="text-blue-500" />
							<p className="text-lg">Kota, Rajasthan, India</p>
						</div>
						<div className="flex items-center gap-2">
							<ContactMail className="text-blue-500" />
							<a href="https://www.linkedin.com/in/hiteshwarkaushik" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
								LinkedIn Profile
							</a>
						</div>
					</div>
				);
			case "Achievements":
				return (
					<div className="p-4 bg-white rounded-lg shadow-md flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<EmojiEvents className="text-blue-500" />
							<p className="text-lg">Achievements</p>
						</div>
						<div className="flex items-center gap-2">
							<EmojiEvents className="text-blue-500" />
							<p className="text-lg">President of IIITians Network! Member of the Alumni Cell!</p>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
			<Navbar />
			<div className="h-auto overflow-y-scroll scrollbar-hide md:mt-[8.5rem] mt-[4.5rem] px-0">
				<div className="w-full lg:h-[81vh] sm:h-[140vh] xsm:h-[120vh] flex justify-center items-center">
					<div className="w-[95%] h-[51vh] flex flex-col lg:flex-row gap-3">
						<div className="w-full lg:w-[20%] lg:h-full h-[50%] bg-[#19194D] rounded-xl shadow-xl flex flex-col justify-start items-center py-4 px-2">
							<div className="h-48 w-48 rounded-full bg-white"></div>
							<p className="text-white text-lg font-semibold mt-3">Hiteshwar Kaushik</p>
							<p className="text-white text-md mt-1">2022kucp1077</p>
							<p className="text-white text-md mt-1">Bachelor's in CSE, 2026</p>
						</div>
						<div className="w-full lg:w-[80%] h-full bg-white rounded-xl shadow-xl">
							<div className="w-full h-[3rem] flex justify-start items-center bg-gray-300 rounded-tl-xl rounded-tr-xl">
								<p
									className={`border h-full flex-1 text-center flex justify-center items-center hover:cursor-pointer text-sm lg:text-lg transition-colors duration-300 ${selectedTab === "Personal Info." ? "bg-gray-400 rounded-tl-xl" : ""}`}
									onClick={() => setSelectedTab("Personal Info.")}
								>
									<Person className="mr-2" /> About
								</p>
								<p
									className={`border h-full flex-1 text-center flex justify-center items-center hover:cursor-pointer text-sm lg:text-lg transition-colors duration-300 ${selectedTab === "Professional Info." ? "bg-gray-400" : ""}`}
									onClick={() => setSelectedTab("Professional Info.")}
								>
									<Work className="mr-2" /> Work Info
								</p>
								<p
									className={`border h-full flex-1 text-center flex justify-center items-center hover:cursor-pointer text-sm lg:text-lg transition-colors duration-300 ${selectedTab === "Contact" ? "bg-gray-400" : ""}`}
									onClick={() => setSelectedTab("Contact")}
								>
									<ContactMail className="mr-2" /> Contact
								</p>
								<p
									className={`border h-full flex-1 text-center flex justify-center items-center hover:cursor-pointer text-sm lg:text-lg transition-colors duration-300 ${selectedTab === "Achievements" ? "bg-gray-400 rounded-tr-xl" : ""}`}
									onClick={() => setSelectedTab("Achievements")}
								>
									<EmojiEvents className="mr-2" /> Achievements
								</p>
							</div>
							<div className="p-4 h-full overflow-y-auto">
								{renderContent()}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProfileIdea;
