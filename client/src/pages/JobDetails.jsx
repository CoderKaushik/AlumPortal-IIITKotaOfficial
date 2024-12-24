import { useLocation, useParams } from "react-router-dom";
import { Box, Typography, Button, Paper, Divider } from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const jobCards = [
    {
        id: "1a2b3c4d5e6f7g8h9i0j",
        title: "Software Engineer",
        company: "Tech Corp",
        location: "San Francisco, CA",
        description: "Develop and maintain web applications.",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure autem nobis consectetur cumque ipsam, natus sint placeat omnis qui voluptatibus delectus aut maiores in minus ut provident dolores officia dicta odio fugiat deserunt quidem? Ex maxime omnis atque nemo doloremque, iure vitae illo impedit natus dolorum, animi, quos vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure autem nobis consectetur cumque ipsam, natus sint placeat omnis qui voluptatibus delectus aut maiores in minus ut provident dolores officia dicta odio fugiat deserunt quidem? Ex maxime omnis atque nemo doloremque, iure vitae illo impedit natus dolorum, animi, quos vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iure autem nobis consectetur cumque ipsam, natus sint placeat omnis qui voluptatibus delectus aut maiores in minus ut provident dolores officia dicta odio fugiat deserunt quidem? Ex maxime omnis atque nemo doloremque, iure vitae illo impedit natus dolorum, animi, quos vel?",
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

const JobDetails = () => {
	const location = useLocation();
	const { id } = useParams();
	const job = location.state?.job || jobCards.find(job => job.id === id) || internCards.find(intern => intern.id === id);

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
					<Button variant="contained" color="primary" sx={{ mt: 2 }}>
						Apply
					</Button>
				</Paper>
			</Box>
			<Footer />
		</div>
	);
};

export default JobDetails;