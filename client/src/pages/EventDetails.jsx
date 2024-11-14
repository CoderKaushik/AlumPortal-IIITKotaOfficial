import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Box, Typography, Paper, Divider, Button } from "@mui/material";
import CarouselEvents from "../components/CarouselEvents";

const EventDetails = () => {
	const location = useLocation();
	const event = location.state?.event;

	console.log(event); // Add this line to debug

	const [isCarouselOpen, setIsCarouselOpen] = useState(false);

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
			<Box sx={{ maxWidth: '800px', mx: 'auto', mb: '3rem', mt: { lg: '9rem', md: '100px', sm: '75px', xs: '100px' } }} >
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