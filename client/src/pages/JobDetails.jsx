import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper, Divider } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/Footer.jsx";
import jobsData from "../data/jobsData.json"; // Import the JSON data

const JobDetails = () => {
	const location = useLocation();
	const { id } = useParams();
	const navigate = useNavigate();
	const job = location.state?.job || jobsData.jobCards.find(job => job.id === id) || jobsData.internCards.find(intern => intern.id === id);

	if (!job) {
		return <Typography variant="h6">Job not found</Typography>;
	}

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gradient-to-br from-gray-100 to-blue-50">
			<Navbar />
			<Box sx={{ maxWidth: '800px', mx: 'auto', mb: '3rem', mt: { lg: '9rem', md: '100px', sm: '75px', xs: '100px' } }} >
				<Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
					<Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
						{job.title}
					</Typography>
					<Typography variant="h6" sx={{ mb: 2 }}>
						{job.company} - {job.location}
					</Typography>
					<Divider sx={{ my: 2 }} />
					<Typography variant="body1" sx={{ mb: 2 }}>
						{job.description}
					</Typography>
					{job.about && (
						<Typography variant="body1" sx={{ mb: 2 }}>
							{job.about}
						</Typography>
					)}
					<Typography variant="body1" sx={{ mb: 2 }}>
						<strong>Skills Required:</strong> {job.skills}
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						<strong>Experience Required:</strong> {job.experience}
					</Typography>
					<Typography variant="body1" sx={{ mb: 2 }}>
						<strong>Deadline:</strong> {job.deadline}
					</Typography>
					<Divider sx={{ my: 2 }} />
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
					<Button variant="contained" color="primary" sx={{ mt: 2, mr: 2 }}>
						Apply
					</Button>
					<Button variant="outlined" color="primary" sx={{ mt: 2 }} onClick={() => navigate('/alumni/job-postings')}>
						View All Jobs
					</Button>
				</Paper>
			</Box>
			<Footer />
		</div>
	);
};

export default JobDetails;