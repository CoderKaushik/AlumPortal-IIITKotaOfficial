import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Ensure jwtDecode is installed
import SignInPrompt from "./SignInPrompt.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/Footer.jsx";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

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
			<div className="h-screen w-screen flex justify-center items-center bg-gray-100">
				<div className="flex flex-col items-center">
					<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
					<p className="text-gray-700 mt-4">Loading...</p>
				</div>
			</div>
		);
	if (error)
		return (
			<div className="h-screen w-screen flex justify-center items-center bg-gray-100">
				<div className="flex flex-col items-center">
					<div className="text-red-500 text-4xl mb-4">
						<i className="fas fa-exclamation-triangle"></i>
					</div>
					<p className="text-red-500 text-lg">Error: {error}</p>
				</div>
			</div>
		);

	if (!token) {
		return <SignInPrompt />;
	}

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar bg-gray-100">
			<Navbar />

			{/* Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50 transition-opacity duration-200 ease-in-out">
					<div className="bg-white p-8 rounded-lg md:w-[40rem] md:h-[40rem] h-[30rem] w-[22rem] overflow-y-scroll scrollbar-hide shadow-2xl relative">
						<h2 className="text-2xl font-bold mb-4 text-blue-900">
							Edit Profile
						</h2>
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label className="block text-gray-700">Name</label>
								<input
									type="text"
									name="name"
									value={user.name}
									onChange={handleChange}
									className="w-full bg-gray-200 h-10 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700">Branch</label>
								<input
									type="text"
									name="branch"
									value={user.branch}
									onChange={handleChange}
									className="w-full bg-gray-200 h-10 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700">Location</label>
								<input
									type="text"
									name="city"
									value={user.city}
									onChange={handleChange}
									className="w-full bg-gray-200 h-10 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
								/>
								<input
									type="text"
									name="state"
									value={user.state}
									onChange={handleChange}
									className="w-full bg-gray-200 h-10 border border-gray-300 rounded-md p-2 mt-2 focus:ring focus:ring-blue-300"
								/>
								<input
									type="text"
									name="country"
									value={user.country}
									onChange={handleChange}
									className="w-full bg-gray-200 h-10 border border-gray-300 rounded-md p-2 mt-2 focus:ring focus:ring-blue-300"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700">
									Past Companies / Institutes
								</label>
								<input
									type="text"
									name="pastCompanies"
									value={user.pastCompanies}
									onChange={handleChange}
									className="w-full bg-gray-200 h-10 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700">
									Current Company / Institute
								</label>
								<input
									type="text"
									name="currentCompany"
									value={user.currentCompany}
									onChange={handleChange}
									className="w-full bg-gray-200 h-10 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700">Email ID</label>
								<input
									type="text"
									name="personalEmail"
									value={user.personalEmail}
									onChange={handleChange}
									className="w-full bg-gray-200 h-10 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700">Graduation Year</label>
								<input
									type="text"
									name="graduationYear"
									value={user.graduationYear}
									onChange={handleChange}
									className="w-full bg-gray-200 h-10 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700">LinkedIn</label>
								<input
									type="text"
									name="linkedin"
									value={user.linkedin}
									onChange={handleChange}
									className="w-full bg-gray-200 h-16 border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
								/>
							</div>
							<div className="mb-4">
								<label className="block text-gray-700">Achievements</label>
								<textarea
									name="achievements"
									value={user.achievements}
									onChange={handleChange}
									className="w-full h-36 bg-gray-200 rounded-md border border-gray-300 p-2 focus:ring focus:ring-blue-300"
								/>
							</div>
							<div className="flex justify-end">
								<button
									type="button"
									onClick={closeModal}
									className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md mr-2 hover:bg-gray-600 transition-colors duration-200 ease-in-out"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out"
								>
									Save Changes
								</button>
							</div>
						</form>
						<button
							className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 ease-in-out"
							onClick={closeModal}
						>
							&times;
						</button>
					</div>
				</div>
			)}
			<div className="w-full h-[35rem] md:h-72 mt-28 md:mt-36 lg:mt-36 px-6 md:px-20 flex flex-col md:flex-row gap-4">
				<div className="md:w-1/3 md:h-full h-1/2 w-full rounded-lg shadow-xl bg-gradient-to-r from-blue-600 to-blue-800 flex flex-col gap-2 relative">
					{id === "me" && (
						<div
							className="w-8 h-8 rounded-full shadow-xl absolute top-2 left-2 hover:cursor-pointer hover:rotate-90 transition-transform duration-300 ease-in-out flex justify-center items-center text-white bg-blue-900"
							onClick={openModal}
						>
							<SettingsIcon />
						</div>
					)}
					<div className="w-full h-[70%] flex justify-center items-center">
						<div className="md:w-40 md:h-40 w-32 h-32 rounded-full border border-gray-100 shadow-2xl overflow-hidden">
							<img
								src={user.profilePicture}
								className="w-full h-full object-cover"
								alt="profile picture"
							/>
						</div>
					</div>

					<div className="w-full h-[30%] flex flex-col overflow-scroll scrollbar-hide">
						<div className="w-full h-1/2">
							<p className="w-full h-full flex justify-center items-center text-center text-md md:text-xl text-white">
								{user.name} • {user.instituteId}
							</p>
						</div>
						<div className="w-full h-1/2">
							<p className="w-full h-full flex justify-center items-center text-sm md:text-md text-white">
								Batch of {user.graduationYear} • {user.branch}
							</p>
						</div>
					</div>
				</div>
				{/* <div className="w-2/3 h-full shadow-xl rounded-lg bg-gradient-to-r from-teal-400 to-teal-500 flex flex-col"> */}
				<div className="md:w-2/3 md:h-full h-2/3 w-full shadow-xl rounded-xl bg-white flex flex-col">
					<div className="w-full h-[20%] border-b border-blue-950 p-2 flex items-center gap-4 text-blue-950 font-semibold text-lg md:text-2xl">
						<PersonIcon /> IIIT Kota Related Experience
					</div>
					<div className="w-full h-[80%] flex justify-center items-center overflow-scroll scrollbar-hide">
						<div className="w-5/6 h-3/4 flex flex-col gap-2 text-blue-950 text-md md:text-lg">
							<p className="w-full mb-2 md:mb-4 font-semibold text-lg md:text-xl">
								Alumni
							</p>
							<p className="w-full">{user.instituteId}</p>
							<p className="w-full">
								Bachelor's in Technology, Computer Science and Engineering
							</p>
							<p className="w-full">
								{user.graduationYear - 4} - {user.graduationYear}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-[60rem] md:h-72 mt-2 flex md:flex-row flex-col gap-3 px-6 md:px-20 mb-16">
				{/* <div className="w-1/3 h-full rounded-xl shadown-xl bg-gradient-to-r from-blue-600 to-blue-800 flex flex-col"> */}
				<div className="md:w-1/3 md:h-full w-full h-1/3 rounded-xl shadow-2xl bg-white flex flex-col">
					<div className="w-full h-[20%] border-b border-blue-950 p-2 flex items-center gap-4 text-blue-950 font-semibold text-lg md:text-2xl">
						<ContactsIcon /> Contact Information
					</div>
					<div className="w-full h-[80%] md:p-4 p-2 flex flex-col justify-center gap-4 text-blue-950 overflow-scroll scrollbar-hide">
						<div className="h-[2rem] w-full flex gap-2">
							<EmailIcon />
							<a href={`mailto:${user.personalEmail}`}>{user.personalEmail}</a>
						</div>
						<div className="h-[2rem] w-full flex gap-2">
							<PhoneIcon />
							<p>{user.phoneNumber}</p>
						</div>
						<div className="h-[2rem] w-full flex gap-2">
							<HomeIcon />
							<p>
								{user.city}, {user.state}, {user.country}
							</p>
						</div>
						<div className="h-[2rem] w-full flex gap-2">
							<LinkedInIcon />
							<a href={user.linkedin} target="_blank">
								{user.linkedin}
							</a>
						</div>
					</div>
				</div>
				{/* <div className="w-1/3 h-full rounded-xl shadown-xl bg-gradient-to-r from-teal-400 to-teal-500 flex flex-col"> */}
				<div className="md:w-1/3 md:h-full w-full h-1/3 rounded-xl shadow-2xl bg-white flex flex-col">
					<div className="w-full h-[20%] border-b border-blue-950 p-2 flex items-center gap-4 text-blue-950 font-semibold text-2xl">
						<WorkIcon /> Work Information
					</div>
					<div className="w-full h-[80%] p-4 flex flex-col gap-4 text-blue-950 overflow-scroll scrollbar-hide">
						<div className="h-[2rem] w-full flex gap-2">
							<BusinessIcon />
							<p>
								Currently a {" "}
								<span className="font-semibold">{user.role}</span> at{" "}
								<span className="font-semibold">{user.currentCompany}</span>
							</p>
						</div>
						<div className="h-[2rem] w-full gap-2 flex justify-start items-center">
							<p className="underline font-semibold">
								Past Companies / Institutes
							</p>
						</div>
						<div className="h-[2rem] w-full flex gap-2">
							<BusinessIcon />
							<p>{user.pastCompanies}</p>
						</div>
					</div>
				</div>
				{/* <div className="w-1/3 h-full rounded-xl shadown-xl bg-gradient-to-r from-teal-400 to-teal-500 flex flex-col"> */}
				<div className="md:w-1/3 md:h-full w-full h-1/3 rounded-xl shadow-2xl bg-white flex flex-col">
					<div className="w-full h-[20%] border-b border-blue-950 p-2 flex items-center gap-4 text-blue-950 font-semibold text-2xl">
						<EmojiEventsIcon /> Achievements
					</div>
					<div className="w-full h-[80%] p-4 flex flex-col gap-4 text-blue-950 overflow-scroll scrollbar-hide">
						{user.achievements}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Profile;
