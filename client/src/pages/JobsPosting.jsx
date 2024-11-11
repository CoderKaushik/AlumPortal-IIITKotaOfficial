import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Button, TextField, InputAdornment, Menu, MenuItem, IconButton, Modal, Box } from "@mui/material";
import { Search as SearchIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


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

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
			<Navbar />
			<div className="h-auto overflow-y-scroll scrollbar-hide md:mt-[8.75rem] mt-[6rem] sm:px-2 lg:px-6">
				<div className="w-full h-auto flex flex-row">
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
			</div>
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
							label="Job Title"
							variant="outlined"
						/>
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
							label="Job Description"
							variant="outlined"
							multiline
							rows={4}
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Skills Required"
							variant="outlined"
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
