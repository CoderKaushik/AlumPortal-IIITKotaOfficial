import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Button, TextField, InputAdornment, Menu, MenuItem, IconButton, Modal, Box, Card, CardContent, Typography } from "@mui/material";
import { Search as SearchIcon, MoreVert as MoreVertIcon, Share as ShareIcon } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";

const JobsPosting = () => {
	const [searchPlaceholder, setSearchPlaceholder] = useState("Search jobs by Title, Company, Skills...");
	const [anchorEl, setAnchorEl] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleJobClick = () => {
		setSearchPlaceholder("Search jobs by Title, Company, Skills...");
		setAnchorEl(null);
	};

	const handleInternClick = () => {
		setSearchPlaceholder("Search interns by Title, Company, Skills...");
		setAnchorEl(null);
	};

	const handleMenuClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handlePostJobsClick = () => {
		setIsModalOpen(true);
		setAnchorEl(null);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const jobCards = [
		{
			title: "Software Engineer",
			company: "Tech Corp",
			location: "San Francisco, CA",
			description: "Develop and maintain web applications.",
			skills: "JavaScript, React, Node.js",
			experience: "2+ years",
			deadline: "2023-12-31",
			postedBy: {
				name: "John Doe",
				picture: "https://via.placeholder.com/40",
				batch: "2015",
				currentPosition: "Senior Software Engineer at Tech Corp",
			},
		},
		{
			title: "Data Scientist",
			company: "Data Inc.",
			location: "New York, NY",
			description: "Analyze and interpret complex data sets.",
			skills: "Python, R, SQL",
			experience: "3+ years",
			deadline: "2023-11-30",
			postedBy: {
				name: "Jane Smith",
				picture: "https://via.placeholder.com/40",
				batch: "2016",
				currentPosition: "Lead Data Scientist at Data Inc.",
			},
		},
		{
			title: "Software Engineer",
			company: "Tech Corp",
			location: "San Francisco, CA",
			description: "Develop and maintain web applications.",
			skills: "JavaScript, React, Node.js",
			experience: "2+ years",
			deadline: "2023-12-31",
			postedBy: {
				name: "John Doe",
				picture: "https://via.placeholder.com/40",
				batch: "2015",
				currentPosition: "Senior Software Engineer at Tech Corp",
			},
		},
		{
			title: "Data Scientist",
			company: "Data Inc.",
			location: "New York, NY",
			description: "Analyze and interpret complex data sets.",
			skills: "Python, R, SQL",
			experience: "3+ years",
			deadline: "2023-11-30",
			postedBy: {
				name: "Jane Smith",
				picture: "https://via.placeholder.com/40",
				batch: "2016",
				currentPosition: "Lead Data Scientist at Data Inc.",
			},
		},
		{
			title: "Software Engineer",
			company: "Tech Corp",
			location: "San Francisco, CA",
			description: "Develop and maintain web applications.",
			skills: "JavaScript, React, Node.js",
			experience: "2+ years",
			deadline: "2023-12-31",
			postedBy: {
				name: "John Doe",
				picture: "https://via.placeholder.com/40",
				batch: "2015",
				currentPosition: "Senior Software Engineer at Tech Corp",
			},
		},
		{
			title: "Data Scientist",
			company: "Data Inc.",
			location: "New York, NY",
			description: "Analyze and interpret complex data sets.",
			skills: "Python, R, SQL",
			experience: "3+ years",
			deadline: "2023-11-30",
			postedBy: {
				name: "Jane Smith",
				picture: "https://via.placeholder.com/40",
				batch: "2016",
				currentPosition: "Lead Data Scientist at Data Inc.",
			},
		},
		{
			title: "Software Engineer",
			company: "Tech Corp",
			location: "San Francisco, CA",
			description: "Develop and maintain web applications.",
			skills: "JavaScript, React, Node.js",
			experience: "2+ years",
			deadline: "2023-12-31",
			postedBy: {
				name: "John Doe",
				picture: "https://via.placeholder.com/40",
				batch: "2015",
				currentPosition: "Senior Software Engineer at Tech Corp",
			},
		},
		{
			title: "Data Scientist",
			company: "Data Inc.",
			location: "New York, NY",
			description: "Analyze and interpret complex data sets.",
			skills: "Python, R, SQL",
			experience: "3+ years",
			deadline: "2023-11-30",
			postedBy: {
				name: "Jane Smith",
				picture: "https://via.placeholder.com/40",
				batch: "2016",
				currentPosition: "Lead Data Scientist at Data Inc.",
			},
		},
		{
			title: "Software Engineer",
			company: "Tech Corp",
			location: "San Francisco, CA",
			description: "Develop and maintain web applications.",
			skills: "JavaScript, React, Node.js",
			experience: "2+ years",
			deadline: "2023-12-31",
			postedBy: {
				name: "John Doe",
				picture: "https://via.placeholder.com/40",
				batch: "2015",
				currentPosition: "Senior Software Engineer at Tech Corp",
			},
		},
		{
			title: "Data Scientist",
			company: "Data Inc.",
			location: "New York, NY",
			description: "Analyze and interpret complex data sets.",
			skills: "Python, R, SQL",
			experience: "3+ years",
			deadline: "2023-11-30",
			postedBy: {
				name: "Jane Smith",
				picture: "https://via.placeholder.com/40",
				batch: "2016",
				currentPosition: "Lead Data Scientist at Data Inc.",
			},
		},
		// Add more job cards as needed
	];

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
			<Navbar />
			<div className="flex-grow overflow-y-scroll scrollbar-hide mt-[9rem] max-w-980:mt-[100px] max-w-492:mt-[75px]">
				<div className="w-full h-auto flex flex-col gap-4">
					<div className="w-full h-auto bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
						<TextField
							variant="outlined"
							placeholder={searchPlaceholder}
							sx={{ flexGrow: 1, mx: 2 }}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon style={{ color: "#4A5568" }} />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position="end">
										<IconButton>
											<ArrowForwardIcon style={{ color: "#4A5568" }} />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<IconButton
							aria-label="more"
							aria-controls="long-menu"
							aria-haspopup="true"
							onClick={handleMenuClick}
						>
							<MoreVertIcon />
						</IconButton>
						<Menu
							id="long-menu"
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={handleMenuClose}
						>
							<MenuItem onClick={handleJobClick}>Job Postings</MenuItem>
							<MenuItem onClick={handleInternClick}>Intern Postings</MenuItem>
							<MenuItem onClick={handlePostJobsClick}>Post Jobs</MenuItem>
						</Menu>
					</div>
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mb-4">
						{jobCards.map((job, index) => (
								<Card
									key={index}
									sx={{
										width: { lg: 400, md: 300, sm: 300, xs: 325 },
										boxShadow: 3,
										borderRadius: 2,
										transition: "transform 0.3s, box-shadow 0.3s",
										"&:hover": {
											transform: "translateY(-5px)",
											boxShadow: 6,
											},
										position: "relative",
									}}
								>
									<IconButton
										sx={{
											position: "absolute",
											top: 8,
											right: 8,
											transition: "color 0.3s",
											"&:hover": {
												color: "#007BFF", // Professional-looking blue color
											},
										}}
										aria-label="share"
									>
										<ShareIcon />
									</IconButton>
									<CardContent>
										<Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
											{job.title}
										</Typography>
										<Typography sx={{ mb: 1.5 }} color="text.secondary">
											{job.company} - {job.location}
										</Typography>
										<Typography variant="body2" sx={{ mb: 1.5 }}>
											{job.description}
										</Typography>
										<Typography variant="body2" sx={{ mb: 1.5 }}>
											<strong>Skills Required:</strong> {job.skills}
										</Typography>
										<Typography variant="body2" sx={{ mb: 1.5 }}>
											<strong>Experience Required:</strong> {job.experience}
										</Typography>
										<Typography variant="body2" sx={{ mb: 1.5 }}>
											<strong>Deadline:</strong> {job.deadline}
										</Typography>
										<Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
											<img src={job.postedBy.picture} alt={job.postedBy.name} className="w-10 h-10 rounded-full object-cover mr-2" />
											<Box>
												<Typography variant="body2" sx={{ fontWeight: 'bold' }}>
													{job.postedBy.name}
												</Typography>
												<Typography variant="body2" color="text.secondary">
													Batch of {job.postedBy.batch}
												</Typography>
												<Typography variant="body2" color="text.secondary">
													{job.postedBy.currentPosition}
												</Typography>
											</Box>
										</Box>
										<Button
											variant="contained"
											color="primary"
											sx={{ mt: 2 }}
										>
											Apply
										</Button>
									</CardContent>
								</Card>
							))}
					</div>
				</div>
			</div>
            <Footer />
			<Modal
				open={isModalOpen}
				onClose={handleCloseModal}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: { xs: 350, sm: 400, md: 500, lg: 600 }, // Adjust width for mobile screen sizes
						bgcolor: 'background.paper',
						border: '2px solid #000',
						boxShadow: 24,
                        borderRadius: 2,
						p: 4,
					}}
				>
					<h1 id="modal-title" className="text-xl">Post a Job</h1>
					<p id="modal-description">Fill in the details to post a job.</p>
					<form>
						<TextField
							fullWidth
							margin="normal"
							label="Company Name"
							variant="outlined"
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Location"
							variant="outlined"
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Position Name"
							variant="outlined"
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Position Type (Full Time, Part Time, Intern, etc.)"
							variant="outlined"
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Skills Required"
							variant="outlined"
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Experience Required"
							variant="outlined"
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Deadline"
							variant="outlined"
							type="date"
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
							<Button onClick={handleCloseModal} sx={{ mr: 2 }}>Cancel</Button>
							<Button variant="contained" color="primary">Submit</Button>
						</Box>
					</form>
				</Box>
			</Modal>
		</div>
	);
};

export default JobsPosting;
