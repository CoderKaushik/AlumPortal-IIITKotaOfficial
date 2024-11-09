import React, { useEffect } from "react";

const events = [
    {
        title: "IIIT Kota Hackathon",
        description: "Join us for an intensive coding competition on campus. Registration is open!",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Tech Talk Series: Emerging Trends in AI",
        description: "By Dr. Smith, a renowned expert in Artificial Intelligence.",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Cultural Fest 2024",
        description: "A 3-day extravaganza of music, dance, and art. Book your tickets now!",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Workshop on Machine Learning",
        description: "Hands-on session with industry experts.",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Career Fair 2024",
        description: "Meet with top companies for internship and job opportunities.",
        image: "https://via.placeholder.com/150",
    },
];

const newsArticles = [
    {
        title: "IIIT Kota partners with leading tech companies",
        description: "For advanced research projects.",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Student achievements",
        description: "Our students secured top positions in national coding competitions.",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "New courses on Data Science and Blockchain",
        description: "IIIT Kota announces new courses.",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Alumni Spotlight",
        description: "Catch up with our alumni excelling in the tech industry.",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "IIIT Kota ranked among top tech institutes",
        description: "Ranked among the top emerging tech institutes in India.",
        image: "https://via.placeholder.com/150",
    },
];

const NewsArticlesHome = () => {
    useEffect(() => {
        // Check if Twitter widgets script is already loaded; otherwise, load it
        if (!window.twttr) {
            const script = document.createElement("script");
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);
        } else {
            window.twttr.widgets.load();
        }
    }, []);

    return (
        <div className="w-full lg:h-[82vh] h-[100rem] flex lg:flex-row flex-col justify-between px-2 lg:px-8 py-4">
            {/* Twitter Timeline */}
            <div className="lg:h-full lg:w-[30%] h-1/3 w-full rounded-md shadow-2xl hover:mb-5 hover:cursor-pointer transition-all duration-500 ease-in-out p-4 flex flex-col justify-between group">
                <a
                    className="twitter-timeline w-full h-full"
                    href="https://twitter.com/IIITKotaOffice?ref_src=twsrc%5Etfw"
                    // data-width="100%"
                    // data-height="100%"
                >
                    Tweets by IIITKotaOffice
                </a>
            </div>

            {/* Events Section */}
            <div className="lg:h-full lg:w-[30%] h-1/3 w-full rounded-md shadow-2xl hover:mb-5 transition-all duration-500 ease-in-out px-4 py-2 flex flex-col justify-between group">
                <div className="w-full h-[3rem] flex border-b pb-1">
                    <h3 className="text-lg font-bold text-center flex justify-center items-center text-[#19194D]">
                        Events
                    </h3>
                    <a href="/events" className="ml-auto bg-teal-600 text-white px-4 rounded-lg flex justify-center items-center hover:bg-teal-500 transition-colors duration-300 ease-in-out">
                        See All
                    </a>
                </div>

                <div className="w-full h-full overflow-hidden relative">
                    <div className="animate-marquee flex flex-col gap-4 absolute w-full">
                        {events.concat(events).map((event, index) => (
                            <div key={index} className="w-full h-[25rem] my-2 border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col items-center bg-white transform transition-transform duration-300 hover:cursor-pointer">
                                <img src={event.image} alt={event.title} className="w-full h-1/2 object-cover" />
                                <div className="w-full h-1/2 flex flex-col justify-center px-4 py-2 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
                                    <h4 className="text-lg font-bold text-[#19194D]">{event.title}</h4>
                                    <p className="text-sm text-gray-600">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* News Articles Section */}
            <div className="lg:h-full lg:w-[30%] h-1/3 w-full rounded-md shadow-2xl hover:mb-5 transition-all duration-500 ease-in-out px-4 py-2 flex flex-col justify-between group">
                <div className="w-full h-[3rem] flex border-b pb-1">
                    <h3 className="text-lg font-bold text-center flex justify-center items-center text-[#19194D]">
                        News Articles
                    </h3>
                    <button className="ml-auto bg-teal-600 text-white px-4 rounded-lg hover:bg-teal-500 transition-colors duration-300 ease-in-out">
                        See All
                    </button>
                </div>

                <div className="w-full h-full overflow-hidden relative">
                    <div className="animate-marquee flex flex-col gap-4 absolute w-full">
                        {newsArticles.concat(newsArticles).map((article, index) => (
                            <div key={index} className="w-full h-[25rem] my-2 border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col items-center bg-white transform transition-transform duration-300 hover:cursor-pointer group">
                                <img src={article.image} alt={article.title} className="w-full h-1/2 object-cover" />
                                <div className="w-full h-1/2 flex flex-col justify-center px-4 py-2 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
                                    <h4 className="text-lg font-bold text-[#19194D]">{article.title}</h4>
                                    <p className="text-sm text-gray-600">{article.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Inline CSS for the marquee animation */}
            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }
                    .animate-marquee {
                        animation: marquee 45s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                    .group:hover .group-hover\\:text-blue-500 {
                        color: #1E90FF;
                    }
                `}
            </style>
        </div>
    );
};

export default NewsArticlesHome;