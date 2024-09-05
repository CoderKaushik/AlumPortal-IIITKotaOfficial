import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import YoutubeIcon from "@mui/icons-material/YouTube";
// import { useAuth } from "../context/AuthContext";
import axios from "axios";

const TopLayer = () => {
	// const { isLoggedIn, logout } = useAuth();
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [greeting, setGreeting] = useState("Hey");

	const token = localStorage.getItem("token");

	useEffect(() => {
		const currentHour = new Date().getHours();
		if (currentHour < 12) {
			setGreeting("Good morning");
		} else if (currentHour >= 12 && currentHour < 18) {
			setGreeting("Good afternoon");
		} else {
			setGreeting("Good evening");
		}

		if (token) {
			setIsLoggedIn(true);
			const fetchUser = async () => {
				try {
					// const response = await axios.get("http://localhost:5000/api/profile/me", {
					const response = await axios.get(
						"https://alumportal-iiitkotaofficial.onrender.com/api/profile/me",
						{
							headers: { Authorization: `Bearer ${token}` },
						}
					);
					setUser(response.data);
				} catch (error) {
					setError(error.message);
				}
			};
			fetchUser();
		} else {
			setIsLoggedIn(false);
		}
	}, [token]);

	const handleLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		setIsLoggedIn(false);
		setUser(null);
		window.location.reload();
	};

	return (
		<div className="relative w-full h-[1.5rem] bg-[#1A1C4E] flex px-16 max-w-980:hidden">
			<div className="h-full w-1/2 flex gap-4 justify-start items-center">
				<HomeIcon
					className="text-white text-xs"
					style={{ fontSize: "1.2rem" }}
				/>
				<FacebookIcon
					className="text-white text-xs"
					style={{ fontSize: "1.2rem" }}
				/>
				<XIcon className="text-white text-xs" style={{ fontSize: "1.2rem" }} />
				<InstagramIcon
					className="text-white text-xs"
					style={{ fontSize: "1.2rem" }}
				/>
				<LinkedInIcon
					className="text-white text-xs"
					style={{ fontSize: "1.2rem" }}
				/>
				<YoutubeIcon
					className="text-white text-xs"
					style={{ fontSize: "1.2rem" }}
				/>
			</div>
			<div className="h-full w-1/2 flex justify-end items-center gap-2">
				{isLoggedIn && user ? (
					<div className="relative group">
						<div className="h-full flex gap-2 items-center">
							<div className="w-6 h-6 border border-black rounded-full overflow-hidden">
								{user.profilePicture ? (
									<img
										src={user.profilePicture}
										alt="Profile"
										className="w-full h-full object-cover"
									/>
								) : (
									<div className="bg-gray-400 w-full h-full"></div>
								)}
							</div>
							<p className="text-white text-sm cursor-pointer">
								{greeting}, {user.name}
							</p>
						</div>

						{/* Dropdown Modal */}
						<div className="absolute top-full right-0 mt-2 w-32 bg-white rounded shadow-lg opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-in-out">
							<a
								href="/profile/me"
								className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
							>
								View Profile
							</a>
							<a
								href="/signin"
								onClick={handleLogout}
								className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
							>
								Logout
							</a>
						</div>
					</div>
				) : (
					<div className="w-auto h-full flex gap-2">
						<PersonIcon
							className="text-white text-xs"
							style={{ fontSize: "1.2rem" }}
						/>
						<p className="text-white text-sm">
							<a href="/signin">
								<span className="hover:underline hover:cursor-pointer">
									Login
								</span>
							</a>{" "}
							/{" "}
							<a href="https://alumni-form-one.vercel.app/">
								<span className="hover:underline hover:cursor-pointer">
									Register
								</span>
							</a>
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default TopLayer;
