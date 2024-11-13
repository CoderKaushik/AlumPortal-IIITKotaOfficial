import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import {
	Button,
	TextField,
	InputAdornment,
	Menu,
	MenuItem,
	IconButton,
	Modal,
	Box,
	Card,
	CardContent,
	Typography,
} from "@mui/material";
import {
	Search as SearchIcon,
	MoreVert as MoreVertIcon,
	Share as ShareIcon,
	Email as EmailIcon,
	WhatsApp as WhatsAppIcon,
	Twitter as TwitterIcon,
	Telegram as TelegramIcon,
	Link as LinkIcon,
} from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/Footer";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast"; 

const JobsPosting = () => {
	const [searchPlaceholder, setSearchPlaceholder] = useState(
		"Search jobs by Title, Company, Skills..."
	);
	const [anchorEl, setAnchorEl] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [shareModalOpen, setShareModalOpen] = useState(false);
	const [shareJob, setShareJob] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState(null);
	const [searchInput, setSearchInput] = useState("");
	const [filteredJobs, setFilteredJobs] = useState([]);
	const [initialJobs, setInitialJobs] = useState([]);
	const [visibleRows, setVisibleRows] = useState({});
	const rowRefs = useRef([]);
	const navigate = useNavigate();
	const [isJobView, setIsJobView] = useState(true); // New state to toggle between jobs and interns

	const token = localStorage.getItem("token");

	useEffect(() => {
		if (token) {
			setIsLoggedIn(true);
			const fetchUser = async () => {
				try {
					const response = await axios.get(
						"https://alumportal-iiitkotaofficial.onrender.com/api/profile/me",
						{
							headers: { Authorization: `Bearer ${token}` },
						}
					);
					setUser(response.data);
				} catch (error) {
					console.error(error.message);
				}
			};
			fetchUser();
		} else {
			setIsLoggedIn(false);
		}
	}, [token]);

	useEffect(() => {
		setFilteredJobs(isJobView ? jobCards : internCards);
		setInitialJobs(isJobView ? jobCards : internCards);
	}, [isJobView]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setVisibleRows((prev) => ({
						...prev,
						[entry.target.dataset.index]: entry.isIntersecting,
					}));
				});
			},
			{ threshold: 0.1 }
		);

		rowRefs.current.forEach((row) => row && observer.observe(row));
		return () => observer.disconnect();
	}, [filteredJobs]);

	const handleJobClick = () => {
		setSearchPlaceholder("Search jobs by Title, Company, Skills...");
		setIsJobView(true);
		setAnchorEl(null);
	};

	const handleInternClick = () => {
		setSearchPlaceholder("Search interns by Title, Company, Skills...");
		setIsJobView(false);
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

	const handleJobCardClick = (job) => {
		navigate(`/alumni/job-postings/${job.id}`, { state: { job } });
	};

	const handleShareClick = (event, job) => {
		event.stopPropagation();
		setShareJob(job);
		setShareModalOpen(true);
	};

	const handleCloseShareModal = () => {
		setShareModalOpen(false);
		setShareJob(null);
	};

	const handleSearchInputChange = (event) => {
		setSearchInput(event.target.value);
	};

	const handleSearch = () => {
		const filtered = initialJobs.filter(job => {
			const keyword = searchInput.toLowerCase();
			return job.title.toLowerCase().includes(keyword) || job.company.toLowerCase().includes(keyword) || job.skills.toLowerCase().includes(keyword);
		});
		setFilteredJobs(filtered);
	};

	const handleSearchKeyPress = (event) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	const clearSearch = () => {
		setSearchInput("");
		setFilteredJobs(initialJobs);
	};

	const shareOptions = [
		{
			icon: <EmailIcon />,
			label: "Email",
			link: `mailto:?subject=Check out this job&body=Check out this job: ${window.location.origin}/alumni/job-postings/${shareJob?.id}`,
		},
		{
			icon: <WhatsAppIcon />,
			label: "WhatsApp",
			link: `https://wa.me/?text=Check out this job: ${window.location.origin}/alumni/job-postings/${shareJob?.id}`,
		},
		{
			icon: <TwitterIcon />,
			label: "Twitter",
			link: `https://twitter.com/intent/tweet?text=Check out this job: ${window.location.origin}/alumni/job-postings/${shareJob?.id}`,
		},
		{
			icon: <TelegramIcon />,
			label: "Telegram",
			link: `https://t.me/share/url?url=${window.location.origin}/alumni/job-postings/${shareJob?.id}&text=Check out this job`,
		},
		{
			icon: <LinkIcon />,
			label: "Copy Link",
			link: `#`,
			onClick: () =>
				navigator.clipboard.writeText(
					`${window.location.origin}/alumni/job-postings/${shareJob?.id}`
				),
		},
	];

	const jobCards = [
		{
			id: "1a2b3c4d5e6f7g8h9i0j",
			title: "Software Engineer",
			company: "Tech Corp",
			location: "San Francisco, CA",
			description: "Develop and maintain web applications.",
			about:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure autem nobis consectetur cumque ipsam, natus sint placeat omnis qui voluptatibus delectus aut maiores in minus ut provident dolores officia dicta odio fugiat deserunt quidem? Ex maxime omnis atque nemo doloremque, iure vitae illo impedit natus dolorum, animi, quos vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure autem nobis consectetur cumque ipsam, natus sint placeat omnis qui voluptatibus delectus aut maiores in minus ut provident dolores officia dicta odio fugiat deserunt quidem? Ex maxime omnis atque nemo doloremque, iure vitae illo impedit natus dolorum, animi, quos vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure autem nobis consectetur cumque ipsam, natus sint placeat omnis qui voluptatibus delectus aut maiores in minus ut provident dolores officia dicta odio fugiat deserunt quidem? Ex maxime omnis atque nemo doloremque, iure vitae illo impedit natus dolorum, animi, quos vel?",
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
			id: "2b3c4d5e6f7g8h9i0j1a",
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
			id: "3c4d5e6f7g8h9i0j1a2b",
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
			id: "4d5e6f7g8h9i0j1a2b3c",
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
			id: "5e6f7g8h9i0j1a2b3c4d",
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
			id: "6f7g8h9i0j1a2b3c4d5e",
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
			id: "7g8h9i0j1a2b3c4d5e6f",
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
			id: "8h9i0j1a2b3c4d5e6f7g",
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
			id: "9i0j1a2b3c4d5e6f7g8h",
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
			id: "0j1a2b3c4d5e6f7g8h9i",
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

	const internCards = [
		{
			id: "1a2b3c4d5e6f7g8h9i0j",
			title: "Software Engineering Intern",
			company: "Tech Corp",
			location: "San Francisco, CA",
			description: "Assist in developing and maintaining web applications.",
			skills: "JavaScript, React, Node.js",
			experience: "0-1 years",
			deadline: "2023-12-31",
			postedBy: {
				name: "John Doe",
				picture: "https://via.placeholder.com/40",
				batch: "2015",
				currentPosition: "Senior Software Engineer at Tech Corp",
			},
		},
		{
			id: "2b3c4d5e6f7g8h9i0j1a",
			title: "Data Science Intern",
			company: "Data Inc.",
			location: "New York, NY",
			description: "Assist in analyzing and interpreting complex data sets.",
			skills: "Python, R, SQL",
			experience: "0-1 years",
			deadline: "2023-11-30",
			postedBy: {
				name: "Jane Smith",
				picture: "https://via.placeholder.com/40",
				batch: "2016",
				currentPosition: "Lead Data Scientist at Data Inc.",
			},
		},
		// Add more intern cards as needed
	];

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const jobData = {
			companyName: formData.get('companyName'),
			location: formData.get('location'),
			positionName: formData.get('positionName'),
			positionType: formData.get('positionType'),
			skillsRequired: formData.get('skillsRequired'),
			experienceRequired: formData.get('experienceRequired'),
			about: formData.get('about'),
			deadline: formData.get('deadline'),
			applicationLink: formData.get('applicationLink'),
			postedBy: {
				name: user.name,
				graduationYear: user.graduationYear,
				currentCompany: user.currentCompany,
				branch: user.branch,
			},
		};

		emailjs.send('service_wey3wx7', 'template_wzlmwv8', jobData, 'DXrpGBTFte2R1jdAq')
			.then((response) => {
				toast.success("Your job application has been sent to Alumni Cell!"); // Success toast
				form.current.reset(); 
				handleCloseModal();
			}, (error) => {
				console.log("FAILED...", error.text);
				toast.error("Email sending failed!"); // Error toast
			});
	};

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
			<Navbar />
			<div className="flex-grow overflow-y-scroll scrollbar-hide mt-[9rem] max-w-980:mt-[100px] max-w-492:mt-[75px]">
				<div className="w-full h-auto flex flex-col gap-4">
					<div className="w-full h-auto bg-white py-4 shadow-md rounded-lg flex justify-between items-center">
						<TextField
							variant="outlined"
							placeholder={searchPlaceholder}
							fullWidth
							value={searchInput}
							onChange={handleSearchInputChange}
							onKeyPress={handleSearchKeyPress}
							sx={{ flexGrow: 1, mx: 1 }}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon style={{ color: "#4A5568" }} />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleSearch}>
											<ArrowForwardIcon style={{ color: "#4A5568" }} />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<Button
							onClick={clearSearch}
							variant="contained"
							color="primary"
							sx={{ ml: 1, backgroundColor: searchInput || filteredJobs.length !== initialJobs.length ? "#38B2AC" : "#CBD5E0" }}
							disabled={filteredJobs.length === initialJobs.length}
						>
							Clear
						</Button>
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
						{filteredJobs.map((job, index) => (
							<Card
								key={index}
								onClick={() => handleJobCardClick(job)}
								sx={{
									width: { lg: 400, md: 300, sm: 300, xs: 325 },
									boxShadow: 3,
									borderRadius: 2,
									transition: "transform 0.3s, box-shadow 0.3s",
									"&:hover": {
										transform: "translateY(-5px)",
										boxShadow: 6,
										cursor: "pointer",
									},
									position: "relative",
									opacity: visibleRows[index] ? 1 : 0,
									transform: visibleRows[index] ? "scale(1)" : "scale(0.95)",
									transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
								}}
								ref={(el) => (rowRefs.current[index] = el)}
								data-index={index}
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
									onClick={(event) => handleShareClick(event, job)}
								>
									<ShareIcon />
								</IconButton>
								<CardContent>
									<Typography
										variant="h5"
										component="div"
										sx={{ fontWeight: "bold" }}
									>
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
									<Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
										<img
											src={job.postedBy.picture}
											alt={job.postedBy.name}
											className="w-10 h-10 rounded-full object-cover mr-2"
										/>
										<Box>
											<Typography variant="body2" sx={{ fontWeight: "bold" }}>
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
									<Button variant="contained" color="primary" sx={{ mt: 2 }}>
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
				open={shareModalOpen}
				onClose={handleCloseShareModal}
				aria-labelledby="share-modal-title"
				aria-describedby="share-modal-description"
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: { xs: 300, sm: 400 },
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						borderRadius: 2,
						p: 4,
					}}
				>
					<Typography
						id="share-modal-title"
						variant="h6"
						component="h2"
						sx={{ mb: 2, color: "#007BFF" }}
					>
						Share Job
					</Typography>
					<Typography
						id="share-modal-description"
						sx={{ mb: 2, color: "#4A5568" }}
					>
						Choose an option to share this job:
					</Typography>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
						{shareOptions.map((option, index) => (
							<Button
								key={index}
								startIcon={option.icon}
								onClick={() => {
									if (option.onClick) option.onClick();
									else window.open(option.link, "_blank");
									handleCloseShareModal();
								}}
								sx={{
									justifyContent: "flex-start",
									color: "#FFFFFF",
									backgroundColor: "#007BFF",
									borderColor: "#007BFF",
									"&:hover": {
										backgroundColor: "#0056b3",
										borderColor: "#0056b3",
									},
								}}
								variant="contained"
							>
								{option.label}
							</Button>
						))}
					</Box>
				</Box>
			</Modal>
			<Modal
				open={isModalOpen}
				onClose={handleCloseModal}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" }, // Adjust width for mobile screen sizes
						maxHeight: "100vh", // Ensure the modal doesn't exceed the viewport height
						bgcolor: "background.paper",
						border: "2px solid #000",
						boxShadow: 24,
						borderRadius: 2,
						p: 4,
						marginTop: { xs: "3rem", sm: 0 }, // Adjust margin for mobile screen sizes
						overflowY: "auto", // Enable scrolling if content overflows
						display: "flex",
						flexDirection: "column",
						gap: 3,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{isLoggedIn ? (
						<>
							<h1 id="modal-title" className="text-3xl mt-10 font-bold">
								Post a Job
							</h1>
							<p id="modal-description">Fill in the details to post a job.</p>
								<form onSubmit={handleSubmit}>
								<TextField
									fullWidth
									margin="normal"
									label="Company Name"
									name="companyName"
									variant="outlined"
									required
								/>
								<TextField
									fullWidth
									margin="normal"
									label="Location"
									name="location"
									variant="outlined"
									required
								/>
								<TextField
									fullWidth
									margin="normal"
									label="Position Name"
									name="positionName"
									variant="outlined"
									required
								/>
								<TextField
									fullWidth
									margin="normal"
									label="Position Type (Full Time, Intern, etc.) "
									name="positionType"
									variant="outlined"
									required
								/>
								<TextField
									fullWidth
									margin="normal"
									label="Skills Required"
									name="skillsRequired"
									variant="outlined"
									required
								/>
								<TextField
									fullWidth
									margin="normal"
									label="Experience Required"
									name="experienceRequired"
									variant="outlined"
									required
								/>
								<TextField
									fullWidth
									margin="normal"
									label="About the Job"
									name="about"
									variant="outlined"
									multiline
									rows={4}
									required
								/>
								<TextField
									fullWidth
									margin="normal"
									label="Deadline"
									name="deadline"
									variant="outlined"
									type="date"
									InputLabelProps={{
										shrink: true,
									}}
								/>
								<TextField
									fullWidth
									margin="normal"
									label="Link of Application"
									name="applicationLink"
									variant="outlined"
									required
								/>
								<Box
									sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
								>
									<Button onClick={handleCloseModal} sx={{ mr: 2 }}>
										Cancel
									</Button>
									<Button type="submit" variant="contained" color="primary">
										Submit
									</Button>
								</Box>
							</form>
						</>
					) : (
						<Box
							sx={{
								textAlign: "center",
								display: "flex",
								flexDirection: "column",
								gap: 3,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Typography variant="h6" sx={{ mb: 2 }}>
								Please log in to post a job/internship.
							</Typography>
							<Button
								variant="contained"
								color="primary"
								onClick={() => navigate("/signin")}
							>
								Sign In
							</Button>
						</Box>
					)}
				</Box>
			</Modal>
		</div>
	);
};

export default JobsPosting;
