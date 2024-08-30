import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Make sure to install this package
import SignInPrompt from "./SignInPrompt";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
	const { id } = useParams();
	const navigate = useNavigate(); // Use navigate for redirection
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
			const decodedToken = jwtDecode(token); // Decode the token
			const userIdFromToken = decodedToken.id;

			if (id === userIdFromToken) {
				// Redirect to /profile/me if the IDs match
				navigate("/profile/me");
				return;
			}

			const fetchUser = async () => {
				try {
					const endpoint = id === "me" ? `/profile/me` : `/profile/${id}`;
					const response = await axios.get(
						`http://localhost:5000/api${endpoint}`,
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
				"http://localhost:5000/api/profile/me",
				user,
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			setUser(response.data);
			closeModal();
		} catch (error) {
			setError(error.message);
		}
	};

	if (loading) return <p className="text-center text-gray-700">Loading...</p>;
	if (error) return <p className="text-center text-red-500">Error: {error}</p>;

	if (!token) {
		return <SignInPrompt />;
	}

	return (
		<div className="w-full h-full overflow-x-hidden custom-scrollbar">
			<Navbar />

			<div className="w-full h-80 py-8 mt-20 md:mt-24 lg:mt-28">
				<div className="w-auto h-auto px-36">
					<div className="w-full h-auto flex pt-4">
						<div className="w-1/2 h-full flex justify-center items-center">
							<div className="h-72 w-72">
								<img
									src={user.profilePicture || "default-profile-pic.png"}
									alt={`${user.name}'s profile`}
									className="w-72 h-72 rounded-full object-cover mb-4"
								/>
							</div>
						</div>
						<div className="w-1/2 h-72 p-2 flex flex-col justify-evenly gap-2">
							<h3 className="font-semibold text-[#1A1C4E]">Name</h3>
							<div className="w-3/4 bg-gray-200 h-10 border-1 rounded-md flex justify-start items-center p-2">
								{user.name}
							</div>
							<h3 className="font-semibold text-[#1A1C4E]">Institute ID</h3>
							<div className="w-3/4 bg-gray-200 h-10 border-1 rounded-md flex justify-start items-center p-2">
								{user.instituteId}
							</div>
							<h3 className="font-semibold text-[#1A1C4E]">Branch</h3>
							<div className="w-3/4 bg-gray-200 h-10 border-1 rounded-md flex justify-start items-center p-2">
								{user.branch}
							</div>
						</div>
					</div>

					{/* Edit Profile Button */}
					{id === "me" && (
						<div className="w-full flex justify-end px-8 my-4">
							<button
								onClick={openModal}
								className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
							>
								Edit Profile
							</button>
						</div>
					)}

					{/* Modal */}
					{isModalOpen && (
						<div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
							<div className="bg-white p-8 rounded-lg w-[40rem] h-[40rem] overflow-y-scroll">
								<h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
								<form onSubmit={handleSubmit}>
									<div className="mb-4">
										<label className="block text-gray-700">Name</label>
										<input
											type="text"
											name="name"
											value={user.name}
											onChange={handleChange}
											className="w-full bg-gray-200 h-10 border-1 rounded-md p-2"
										/>
									</div>
									<div className="mb-4">
										<label className="block text-gray-700">Branch</label>
										<input
											type="text"
											name="branch"
											value={user.branch}
											onChange={handleChange}
											className="w-full bg-gray-200 h-10 border-1 rounded-md p-2"
										/>
									</div>
									<div className="mb-4">
										<label className="block text-gray-700">Location</label>
										<input
											type="text"
											name="city"
											value={user.city}
											onChange={handleChange}
											className="w-full bg-gray-200 h-10 border-1 rounded-md p-2"
										/>
										<input
											type="text"
											name="state"
											value={user.state}
											onChange={handleChange}
											className="w-full bg-gray-200 h-10 border-1 rounded-md p-2 mt-2"
										/>
										<input
											type="text"
											name="country"
											value={user.country}
											onChange={handleChange}
											className="w-full bg-gray-200 h-10 border-1 rounded-md p-2 mt-2"
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
											className="w-full bg-gray-200 h-10 border-1 rounded-md p-2"
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
											className="w-full bg-gray-200 h-10 border-1 rounded-md p-2"
										/>
									</div>
									<div className="mb-4">
										<label className="block text-gray-700">Email ID</label>
										<input
											type="text"
											name="personalEmail"
											value={user.personalEmail}
											onChange={handleChange}
											className="w-full bg-gray-200 h-10 border-1 rounded-md p-2"
										/>
									</div>
									<div className="mb-4">
										<label className="block text-gray-700">
											Graduation Year
										</label>
										<input
											type="text"
											name="graduationYear"
											value={user.graduationYear}
											onChange={handleChange}
											className="w-full bg-gray-200 h-10 border-1 rounded-md p-2"
										/>
									</div>
									<div className="mb-4">
										<label className="block text-gray-700">LinkedIn</label>
										<input
											type="text"
											name="linkedin"
											value={user.linkedin}
											onChange={handleChange}
											className="w-full bg-gray-200 h-16 border-1 rounded-md p-2"
										/>
									</div>
									<div className="mb-4">
										<label className="block text-gray-700">Achievements</label>
										<textarea
											name="achievements"
											value={user.achievements}
											onChange={handleChange}
											className="w-full h-36 bg-gray-200 rounded-md border p-2"
										/>
									</div>

									<div className="flex justify-end">
										<button
											type="button"
											onClick={closeModal}
											className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md mr-2"
										>
											Cancel
										</button>
										<button
											type="submit"
											className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
										>
											Save Changes
										</button>
									</div>
								</form>
							</div>
						</div>
					)}
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Profile;
