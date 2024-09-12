import React, { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const newsItems = [
	{
		id: 1,
		heading: "News Heading 1",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-20",
		author: "Author 1",
	},
	{
		id: 2,
		heading: "News Heading 2",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-19",
		author: "Author 2",
	},
	{
		id: 3,
		heading: "News Heading 3",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-18",
		author: "Author 3",
	},
	{
		id: 4,
		heading: "News Heading 4",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!4",
		date: "2023-08-17",
		author: "Author 4",
	},
	{
		id: 5,
		heading: "News Heading 5",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-16",
		author: "Author 5",
	},
	{
		id: 6,
		heading: "News Heading 6",
		content:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-15",
		author: "Author 6",
	},
	// More items...
];

const announcementItems = [
	{
		id: 1,
		heading: "Announcement 1",
		content:
			"Announcement Content 1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-20",
		author: "Admin",
	},
	{
		id: 2,
		heading: "Announcement 2",
		content:
			"Announcement Content 2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-19",
		author: "Admin",
	},
	{
		id: 3,
		heading: "Announcement 3",
		content:
			"Announcement Content 3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-18",
		author: "Admin",
	},
	{
		id: 4,
		heading: "Announcement 4",
		content:
			"Announcement Content 4Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-17",
		author: "Admin",
	},
	{
		id: 5,
		heading: "Announcement 5",
		content:
			"Announcement Content 5Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-16",
		author: "Admin",
	},
	{
		id: 6,
		heading: "Announcement 6",
		content:
			"Announcement Content 6Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil doloremque qui nostrum! Consequatur sint architecto sunt atque, impedit ut quaerat quasi nesciunt similique maxime molestias ab omnis, dolores voluptas saepe!",
		date: "2023-08-15",
		author: "Admin",
	},
	// More items...
];

const NewsArticlesHome = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [activeTab, setActiveTab] = useState("announcements");

	const items = activeTab === "news" ? newsItems : announcementItems;

	const handleNext = () => {
		if (currentIndex + 3 < items.length) {
			setCurrentIndex(currentIndex + 3);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 3);
		}
	};

	const handleTabChange = (tab) => {
		setActiveTab(tab);
		setCurrentIndex(0);
	};

	return (
		<div className="w-full lg:h-[37rem] h-[73rem] flex flex-col px-2 lg:px-8 py-4">
			<div className="w-full lg:h-[3rem] h-[3rem] flex">
				<div className="lg:w-[70%] w-[75%] h-full flex justify-start gap-2 lg:gap-4">
					<button
						onClick={() => handleTabChange("announcements")}
						className={`lg:w-2/5 w-1/2 h-full shadow-xl rounded-md text-center text-sm lg:text-lg ${
							activeTab === "announcements"
								? "bg-[#0E407C] text-white"
								: "text-[#19194D]"
						}`}
					>
						Announcements
					</button>
					<button
						onClick={() => handleTabChange("news")}
						className={`lg:w-2/5 w-[40%] h-full shadow-xl rounded-md text-center text-sm lg:text-lg ${
							activeTab === "news"
								? "bg-[#0E407C] text-white"
								: "text-[#19194D]"
						}`}
					>
						News
					</button>
				</div>
				<div className="lg:w-[30%] w-[25%] h-full flex justify-end lg:gap-2 gap-1">
					<button
						onClick={handlePrev}
						className="w-[5rem] h-full bg-[#19194D] text-white rounded-md shadow-xl hover:bg-[#0b0b26] transition-all duration-300 ease-in-out"
						disabled={currentIndex === 0}
					>
						<WestIcon />
					</button>
					<button
						onClick={handleNext}
						className="w-[5rem] h-full bg-[#19194D] text-white rounded-md shadow-xl hover:bg-[#0b0b26] transition-all duration-300 ease-in-out"
						disabled={currentIndex + 3 >= items.length}
					>
						<EastIcon />
					</button>
				</div>
			</div>
			<div className="w-full lg:h-[34rem] h-[70rem] pt-4 flex lg:flex-row flex-col lg:justify-between justify-center lg:items-center items-stretch gap-4">
				{items.slice(currentIndex, currentIndex + 3).map((item) => (
					<div
						key={item.id}
						className="lg:h-[90%] lg:w-[30%] h-1/3 w-full rounded-md shadow-2xl hover:mb-5 hover:cursor-pointer transition-all duration-500 ease-in-out p-4 flex flex-col justify-between group"
					>
						<div className="font-bold text-lg group-hover:text-blue-500 transition-all duration-500 ease-in-out">
							{item.heading}
						</div>
						<div className="flex-grow my-4">{item.content}</div>
						<div className="text-sm text-gray-600">
							<span>{item.date}</span> • <span>{item.author}</span>
							<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
								{" "}
								• <span className="hover:underline">Read More</span>
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default NewsArticlesHome;
