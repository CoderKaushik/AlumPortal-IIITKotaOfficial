import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Box, Typography, Paper, Divider, Button } from "@mui/material";
import CarouselEvents from "../components/CarouselEvents";
import eventImages from "../GalleryAssets/EventImages.json";

const eventsData = [
	{
		heading: "Innovative Tech Symposium 2024",
		description: "Join us for an insightful symposium exploring the latest innovations in technology. Network with industry leaders and gain knowledge on emerging trends shaping the future. oin us for an insightful symposium exploring the latest innovations in technology. Network with industry leaders and gain knowledge on emerging trends shaping the future. oin us for an insightful symposium exploring the latest innovations in technology. Network with industry leaders and gain knowledge on emerging trends shaping the future. oin us for an insightful symposium exploring the latest innovations in technology. Network with industry leaders and gain knowledge on emerging trends shaping the future. oin us for an insightful symposium exploring the latest innovations in technology. Network with industry leaders and gain knowledge on emerging trends shaping the future.",
		images: eventImages["Innovative Tech Symposium 2024"]
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

	if (!event) {
		return <Typography variant="h6">Event not found</Typography>;
	}

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
			<Navbar />
			<Box sx={{ maxWidth: '1000px', mx: 'auto', mb: '3rem', mt: { lg: '9rem', md: '100px', sm: '75px', xs: '100px' } }} >
				<Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
					<Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
						{event.heading}
					</Typography>
					<Divider sx={{ my: 2 }} />
					<Typography variant="body1" sx={{ mb: 2 }}>
						{event.description}
					</Typography>
					<Divider sx={{ my: 2 }} />
					<Box sx={{ flexGrow: 1 }}>
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