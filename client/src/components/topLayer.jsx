import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import YoutubeIcon from "@mui/icons-material/YouTube";
import LogoutIcon from "@mui/icons-material/Logout"; // Import LogoutIcon
import Headroom from "react-headroom";
import Avatar from "../assets/avatar.png"
import axios from "axios";
import { Modal, Box, Button, Typography } from "@mui/material";

const TopLayer = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [open, setOpen] = useState(false);

	const token = localStorage.getItem("token");

	useEffect(() => {
		if (token) {
			setIsLoggedIn(true);
			const fetchUser = async () => {
				try {
					const response = await axios.get(
						"https://alumportal-iiitkotaofficial.onrender.com/api/profile/me",
						// "http://localhost:5000/api/profile/me",
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

	const handleLogout = () => {
		localStorage.removeItem("token");
		setIsLoggedIn(false);
		setUser(null);
		window.location.reload();
	};

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Headroom>
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
					<XIcon
						className="text-white text-xs"
						style={{ fontSize: "1.2rem" }}
					/>
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
						<div className="flex items-center gap-2">
							<div className="w-6 h-6 border border-black rounded-full overflow-hidden">
								{user.profilePicture ? (
									<img
										src={user.profilePicture}
										alt="Profile"
										className="w-full h-full object-cover"
									/>
								) : (
									<div className="bg-gray-400 w-full h-full">
										<img src={Avatar} alt="" className="w-full h-full object-fill" />
									</div>
								)}
							</div>
							<p className="text-white text-sm">
								<a
									href="/profile/me"
									className="hover:underline flex justify-center items-center"
								>
									{user.name}
								</a>
							</p>
							<a
								href="#"
								onClick={handleOpen}
								className="text-white text-xs cursor-pointer"
								aria-label="Logout"
							>
								<LogoutIcon style={{ fontSize: "1.2rem" }} />
							</a>
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
								<a href="/signup">
									<span className="hover:underline hover:cursor-pointer">
										Register
									</span>
								</a>
							</p>
						</div>
					)}
				</div>
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 300,
						bgcolor: "background.paper",
						border: "2px solid #000",
						borderRadius: 2,
						boxShadow: 24,
						p: 4,
					}}
				>
					<Typography id="modal-title" variant="h6" component="h2">
						Logout Confirmation
					</Typography>
					<Typography id="modal-description" sx={{ mt: 2 }}>
						Are you sure you want to logout?
					</Typography>
					<Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
						<Button variant="contained" color="error" onClick={handleLogout}>
							Yes
						</Button>
						<Button variant="contained" sx={{ backgroundColor: '#1E40AF', color: '#fff' }} onClick={handleClose}>
							No
						</Button>
					</Box>
				</Box>
			</Modal>
		</Headroom>
	);
};

export default TopLayer;
