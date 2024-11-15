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
	Card,
	CardContent,
	CardHeader,
	Divider,
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
		<Container maxWidth="lg">
			<Navbar />
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
			<Box mt={4}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<Card>
							<CardHeader
								avatar={
									<Avatar
										src={user.profilePicture}
										sx={{ width: 64, height: 64 }}
									/>
								}
								action={
									id === "me" && (
										<IconButton color="primary" onClick={openModal}>
											<SettingsIcon />
										</IconButton>
									)
								}
								title={user.name}
								subheader={`Batch of ${user.graduationYear} • ${user.branch}`}
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary">
									{user.instituteId}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={8}>
						<Card>
							<CardHeader
								title="IIIT Kota Related Experience"
								avatar={<PersonIcon />}
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary">
									{user.instituteId}
								</Typography>
								<Typography variant="body2" color="textSecondary">
									Bachelor's in Technology, Computer Science and Engineering
								</Typography>
								<Typography variant="body2" color="textSecondary">
									{user.graduationYear - 4} - {user.graduationYear}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={4}>
						<Card>
							<CardHeader title="Contact Information" avatar={<ContactsIcon />} />
							<CardContent>
								<Typography variant="body2" color="textSecondary">
									<EmailIcon />{" "}
									<Link href={`mailto:${user.personalEmail}`}>
										{user.personalEmail}
									</Link>
								</Typography>
								<Typography variant="body2" color="textSecondary">
									<PhoneIcon /> {user.phoneNumber}
								</Typography>
								<Typography variant="body2" color="textSecondary">
									<HomeIcon /> {user.city}, {user.state}, {user.country}
								</Typography>
								<Typography variant="body2" color="textSecondary">
									<LinkedInIcon />{" "}
									<Link href={user.linkedin} target="_blank">
										{user.linkedin}
									</Link>
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={4}>
						<Card>
							<CardHeader title="Work Information" avatar={<WorkIcon />} />
							<CardContent>
								<Typography variant="body2" color="textSecondary">
									<BusinessIcon /> Currently a{" "}
									<span className="font-semibold">{user.role}</span> at{" "}
									<span className="font-semibold">{user.currentCompany}</span>
								</Typography>
								<Divider sx={{ my: 2 }} />
								<Typography variant="body2" color="textSecondary">
									<span className="underline font-semibold">
										Past Companies / Institutes
									</span>
								</Typography>
								<Typography variant="body2" color="textSecondary">
									<BusinessIcon /> {user.pastCompanies}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12} md={4}>
						<Card>
							<CardHeader title="Achievements" avatar={<EmojiEventsIcon />} />
							<CardContent>
								<Typography variant="body2" color="textSecondary">
									{user.achievements}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
			<Footer />
		</Container>
	);
};

export default Profile;
