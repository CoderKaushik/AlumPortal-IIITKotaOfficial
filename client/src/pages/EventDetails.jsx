import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Box, Typography, Paper, Divider, Button } from "@mui/material";
import CarouselEvents from "../components/CarouselEvents";
import eventImages from "../GalleryAssets/EventImages.json";

const eventsData = [
	{
		"heading": "Innovative Tech Symposium 2025",
		"description": "Join us for an insightful symposium exploring the latest innovations in technology. Network with industry leaders and gain knowledge on emerging trends shaping the future. The 'Alumni Insights' event, organized by the Alumni Cell of IIIT Kota in collaboration with IIIT Kernel, took place on November 9th at the IIIT Kota Auditorium. The event focused on the theme 'Navigating the Placement Pathways' and provided students with crucial insights into preparing for their professional careers. The speaker, Vibhor Rawal, an alumnus of IIIT Kota and a Software Development Engineer at Google, shared his career journey and provided advice on building a diverse skill set, creating strong resumes, and practicing for interviews. He emphasized the importance of coding, problem-solving, teamwork, and system design. The event also featured a Q&A session where students had the opportunity to ask questions on topics like competitive programming, robotics, and internship opportunities. The session concluded with Dr. Chetna Sharma, Associate Dean of the Alumni Cell, honoring Vibhor Rawal with a memento. The event equipped students with the tools and knowledge needed to succeed in their future careers.",
		"images": eventImages["Innovative Tech Symposium 2024"]
	},	
	{
		heading: "Annual Developer Summit",
		description: "Meet fellow developers and industry experts at the Annual Developer Summit, featuring hands-on coding sessions, tech talks, and opportunities for skill enhancement.",
		images: eventImages["Annual Developer Summit"]
	},
	{
		heading: "AI & Machine Learning Workshop",
		description: "An in-depth workshop focusing on practical applications of AI and Machine Learning. Learn from experts and collaborate on real-world projects in this dynamic session.",
		images: eventImages["AI & Machine Learning Workshop"]
	},
	{
		heading: "Digital Transformation Expo",
		description: "Discover the latest advancements in digital transformation at this expo. From automation to cybersecurity, explore the tools driving change in today's business landscape.",
		images: eventImages["Digital Transformation Expo"]
	},
	// Add more events as needed
];

const EventDetails = () => {
	const location = useLocation();
	const { title } = useParams();
	const [event, setEvent] = useState(location.state?.event || null);
	const [isCarouselOpen, setIsCarouselOpen] = useState(false);

	useEffect(() => {
		if (!event) {
			const eventTitle = title.replace(/-/g, " ");
			const fetchedEvent = eventsData.find(
				(event) => event.heading.toLowerCase() === eventTitle
			);
			setEvent(fetchedEvent);
		}
	}, [title, event]);

	const openCarousel = () => {
		setIsCarouselOpen(true);
	};

	const closeCarousel = () => {
		setIsCarouselOpen(false);
	};

	const isSquareImage = (imageUrl) => {
		const img = new Image();
		img.src = imageUrl;
		return img.width === img.height;
	};

	if (!event) {
		return <Typography variant="h6">Event not found</Typography>;
	}

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
			<Navbar />
			<Box sx={{ maxWidth: '1000px', mx: 'auto', mb: '3rem', mt: { lg: '9rem', md: '100px', sm: '75px', xs: '100px' } }} >
				<Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
					{event.images && event.images.length > 0 && (
						<Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
							<img
								src={event.images[0]}
								alt="Event"
								style={{
									width: isSquareImage(event.images[0]) ? '50%' : '100%',
									borderRadius: '8px',
									objectFit: 'contain'
								}}
							/>
						</Box>
					)}
					<Typography sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', fontSize: {xs: '1.5rem', md: '2.5rem'} }}>
						{event.heading}
					</Typography>
					<Divider sx={{ my: 2 }} />
					<Typography variant="body1" sx={{ mb: 2, textAlign: { xs: 'center', sm: 'left' } }}>
						{event.description}
					</Typography>
					<Divider sx={{ my: 2 }} />
					<Box sx={{ flexGrow: 1, display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
						<Button variant="contained" color="primary" onClick={openCarousel}>
							View Images
						</Button>
					</Box>
				</Paper>
			</Box>
			<Footer />
			{isCarouselOpen && (
				<CarouselEvents images={event.images} onClose={closeCarousel} />
			)}
		</div>
	);
};

export default EventDetails;