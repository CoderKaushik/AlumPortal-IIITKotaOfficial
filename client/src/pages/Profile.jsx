import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SignInPrompt from "./SignInPrompt.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import {
	Container,
	Box,
	Typography,
	Button,
	IconButton,
	Avatar,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	CircularProgress,
	Alert,
	Link,
	Grid,
	Paper,
} from "@mui/material";
import {
	Settings as SettingsIcon,
	Person as PersonIcon,
	Contacts as ContactsIcon,
	Email as EmailIcon,
	Phone as PhoneIcon,
	Home as HomeIcon,
	LinkedIn as LinkedInIcon,
	Work as WorkIcon,
	Business as BusinessIcon,
	EmojiEvents as EmojiEventsIcon,
} from "@mui/icons-material";

const Profile = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [user, setUser] = useState({
		name: "",
		instituteId: "",
		branch: "",
		city: "",
		state: "",
		country: "",
		pastCompanies: "",
		currentCompany: "",
		personalEmail: "",
		graduationYear: "",
		linkedin: "",
		achievements: "",
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const token = localStorage.getItem("token");

	useEffect(() => {
		if (token) {
			const decodedToken = jwtDecode(token);
			const userIdFromToken = decodedToken.id;

			if (id === userIdFromToken) {
				navigate("/profile/me");
				return;
			}

			const fetchUser = async () => {
				try {
					const endpoint = id === "me" ? `/profile/me` : `/profile/${id}`;
					const response = await axios.get(
						// `http://localhost:5000/api${endpoint}`,
						`https://alumportal-iiitkotaofficial.onrender.com/api${endpoint}`,
						{
							headers: { Authorization: `Bearer ${token}` },
						}
					);
					setUser(response.data);
					setLoading(false);
				} catch (error) {
					setError(error.message);
					setLoading(false);
				}
			};

			fetchUser();
		} else {
			setLoading(false);
		}
	}, [id, token, navigate]);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(
				// "http://localhost:5000/api/profile/me",
				"https://alumportal-iiitkotaofficial.onrender.com/api/profile/me",
				user,
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			setUser(response.data);
			closeModal();
		} catch (error) {
			setError(error.message);
		}
	};

	if (loading)
		return (
			<Box display="flex" justifyContent="center" alignItems="center" height="100vh">
				<CircularProgress />
			</Box>
		);
	if (error)
		return (
			<Box display="flex" justifyContent="center" alignItems="center" height="100vh">
				<Alert severity="error">{error}</Alert>
			</Box>
		);

	if (!token) {
		return <SignInPrompt />;
	}

	return (
		<Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
			<Navbar />
			<Container maxWidth="lg" sx={{ flex: 1, mt: 4 }}>
				<Dialog open={isModalOpen} onClose={closeModal}>
					<DialogTitle>Edit Profile</DialogTitle>
					<DialogContent>
						<form onSubmit={handleSubmit}>
							<TextField
								margin="dense"
								label="Name"
								name="name"
								value={user.name}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								margin="dense"
								label="Branch"
								name="branch"
								value={user.branch}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								margin="dense"
								label="City"
								name="city"
								value={user.city}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								margin="dense"
								label="State"
								name="state"
								value={user.state}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								margin="dense"
								label="Country"
								name="country"
								value={user.country}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								margin="dense"
								label="Past Companies"
								name="pastCompanies"
								value={user.pastCompanies}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								margin="dense"
								label="Current Company"
								name="currentCompany"
								value={user.currentCompany}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								margin="dense"
								label="Email ID"
								name="personalEmail"
								value={user.personalEmail}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								margin="dense"
								label="Graduation Year"
								name="graduationYear"
								value={user.graduationYear}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								margin="dense"
								label="LinkedIn"
								name="linkedin"
								value={user.linkedin}
								onChange={handleChange}
								fullWidth
							/>
							<TextField
								margin="dense"
								label="Achievements"
								name="achievements"
								value={user.achievements}
								onChange={handleChange}
								fullWidth
								multiline
								rows={4}
							/>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={closeModal} color="primary">
							Cancel
						</Button>
						<Button onClick={handleSubmit} color="primary">
							Save Changes
						</Button>
					</DialogActions>
				</Dialog>
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<Paper elevation={3} sx={{ p: 2, position: 'relative' }}>
							{id === "me" && (
								<IconButton
									color="primary"
									onClick={openModal}
									sx={{ position: "absolute", top: 8, right: 8 }}
								>
									<SettingsIcon />
								</IconButton>
							)}
							<Box display="flex" flexDirection="column" alignItems="center">
								<Avatar
									src={user.profilePicture}
									sx={{ width: 128, height: 128, mb: 2 }}
								/>
								<Typography variant="h6" noWrap>{user.name}</Typography>
								<Typography variant="body1" noWrap>{user.instituteId}</Typography>
								<Typography variant="body2" noWrap>
									Batch of {user.graduationYear} • {user.branch}
								</Typography>
							</Box>
						</Paper>
					</Grid>
					<Grid item xs={12} md={8}>
						<Paper elevation={3} sx={{ p: 2 }}>
							<Typography variant="h6" gutterBottom>
								<PersonIcon /> IIIT Kota Related Experience
							</Typography>
							<Typography variant="body1" noWrap>{user.instituteId}</Typography>
							<Typography variant="body1" noWrap>
								Bachelor's in Technology, Computer Science and Engineering
							</Typography>
							<Typography variant="body1" noWrap>
								{user.graduationYear - 4} - {user.graduationYear}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper elevation={3} sx={{ p: 2 }}>
							<Typography variant="h6" gutterBottom>
								<ContactsIcon /> Contact Information
							</Typography>
							<Typography variant="body1" noWrap>
								<EmailIcon />{" "}
								<Link href={`mailto:${user.personalEmail}`}>
									{user.personalEmail}
								</Link>
							</Typography>
							<Typography variant="body1" noWrap>
								<PhoneIcon /> {user.phoneNumber}
							</Typography>
							<Typography variant="body1" noWrap>
								<HomeIcon /> {user.city}, {user.state}, {user.country}
							</Typography>
							<Typography variant="body1" noWrap>
								<LinkedInIcon />{" "}
								<Link href={user.linkedin} target="_blank">
									{user.linkedin}
								</Link>
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper elevation={3} sx={{ p: 2 }}>
							<Typography variant="h6" gutterBottom>
								<WorkIcon /> Work Information
							</Typography>
							<Typography variant="body1" noWrap>
								<BusinessIcon /> Currently a{" "}
								<span className="font-semibold">{user.role}</span> at{" "}
								<span className="font-semibold">{user.currentCompany}</span>
							</Typography>
							<Typography variant="body1" sx={{ mt: 2 }} noWrap>
								<span className="underline font-semibold">
									Past Companies / Institutes
								</span>
							</Typography>
							<Typography variant="body1" noWrap>
								<BusinessIcon /> {user.pastCompanies}
							</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper elevation={3} sx={{ p: 2 }}>
							<Typography variant="h6" gutterBottom>
								<EmojiEventsIcon /> Achievements
							</Typography>
							<Typography variant="body1" noWrap>{user.achievements}</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Container>
			<Box mt={4}>
				<Footer />
			</Box>
		</Box>
	);
};

export default Profile;
