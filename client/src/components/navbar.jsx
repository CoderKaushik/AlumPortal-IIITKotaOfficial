import { useState, useEffect } from "react";
import Logo from "../assets/iiitkotalogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import EventIcon from "@mui/icons-material/Event";
import FeedIcon from "@mui/icons-material/Feed";
import WorkIcon from "@mui/icons-material/Work";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LogoutIcon from "@mui/icons-material/Logout";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TopLayer from "./topLayer.jsx";

import axios from "axios";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSubMenu, setActiveSubMenu] = useState(null);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => {
			// Reset active submenu when closing the modal
			if (prev) {
				setActiveSubMenu(null);
			}
			return !prev;
		});
	};

	const handleSubMenuToggle = (menu) => {
		setActiveSubMenu(activeSubMenu === menu ? null : menu);
	};

	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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

	const handleLogout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		setIsLoggedIn(false);
		setUser(null);
		window.location.reload();
	};

	return (
		<div className="w-full h-auto fixed top-0 left-0 z-[20] shadow-md">
			<TopLayer />
			<div className="w-full h-[6.875rem] max-w-980:h-[90px] max-w-492:h-[70px] bg-white flex p-4">
				<div className="w-1/3 max-w-1464:w-[10%] max-w-980:w-[80%] h-full flex gap-2 items-center pl-2">
					<div className="w-auto h-full flex justify-center items-center">
						<a href="/">
							<img
								src={Logo}
								alt="iiit kota logo"
								className="w-[4.5rem] h-[4.5rem] max-w-980:w-[58px] max-w-980:h-[58px] max-w-492:h-[40px] max-w-492:w-[40px]"
							/>
						</a>
					</div>
					<div className="w-auto h-full flex flex-col justify-center">
						<h6
							className="text-[12px] max-w-980:text-[9px] max-w-492:text-[7px] text-[#19194D] max-w-1464:hidden max-w-980:block"
							style={{ fontWeight: "700" }}
						>
							Alumni Cell
						</h6>
						<h6
							className="text-[12px] max-w-980:text-[9px] max-w-492:text-[7px] font-bold text-[#19194D] max-w-1464:hidden max-w-980:block"
							style={{ fontWeight: "1000" }}
						>
							Indian Institute of Information Technology, Kota
						</h6>
						<h6
							className="text-[12px] max-w-980:text-[9px] max-w-492:text-[7px] font-bold text-[#19194D] font-sans max-w-1464:hidden max-w-980:block"
							style={{ fontWeight: "1000" }}
						>
							(An Institute of National Importance under an Act of Parliament)
						</h6>
					</div>
				</div>
				<div
					className={`w-2/3 max-w-1464:w-[90%] max-w-980:w-[20%] h-full flex ${
						window.innerWidth <= 980
							? "justify-center items-center"
							: "justify-end items-center pr-4"
					}`}
				>
					<div className="w-auto px-6 h-full flex relative group items-center text-[#19194D] max-w-980:hidden max-w-1464:ml-44">
						<a
							className="text-[0.9rem] font-sans hover:cursor-pointer"
							style={{ fontWeight: "400" }}
							href="/about"
						>
							ABOUT US
						</a>
					</div>

					<div className="w-auto px-6  h-full relative group flex items-center text-[#19194D] max-w-980:hidden">
						<p
							className="text-[0.9rem] font-sans hover:cursor-pointer"
							style={{ fontWeight: "400" }}
						>
							ALUMNI ASSIST
						</p>
						<div className="rounded-md absolute top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 bg-white drop-shadow-2xl py-2 mt-2 w-[12rem] transition-all duration-300 ease-in-out transform translate-y-2">
							<ul className="w-full">
								<li className="hover:bg-gray-100 p-2">
									<a href="/alumni/prominent-alumni">Prominent Alumni</a>
								</li>
								<li className="hover:bg-gray-100 p-2">
									<a href="/alumni/gallery">Alumni Gallery</a>
								</li>
								<li className="hover:bg-gray-100 p-2">
									<a href="/alumni/contact">Contact Us</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="w-auto px-6  h-full relative group flex items-center text-[#19194D] max-w-980:hidden">
						<a href="/directory">
							<p
								className="text-[0.9rem] font-sans hover:cursor-pointer"
								style={{ fontWeight: "400" }}
							>
								DIRECTORY
							</p>
						</a>
					</div>

					<div className="w-auto px-6  h-full relative group flex items-center text-[#19194D] max-w-980:hidden">
						<p
							className="text-[0.9rem] font-sans hover:cursor-pointer"
							style={{ fontWeight: "400" }}
						>
							EVENTS
						</p>
						<div className="rounded-md absolute top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 bg-white drop-shadow-2xl py-2 mt-2 w-[12rem] transition-all duration-300 ease-in-out transform translate-y-2">
							<ul className="w-full">
								<li className="hover:bg-gray-100 p-2">
									<a href="/events">Events</a>
								</li>
								<li className="hover:bg-gray-100 p-2">
									<a href="/newsletters">Newsletters</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="w-auto px-6  h-full relative group flex items-center text-[#19194D] max-w-980:hidden">
						<p
							className="text-[0.9rem] font-sans hover:cursor-pointer"
							style={{ fontWeight: "400" }}
						>
							NEWSLETTERS
						</p>
						<div className="rounded-md absolute top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 bg-white drop-shadow-2xl py-2 mt-2 w-[12rem] transition-all duration-300 ease-in-out transform translate-y-2">
							<ul className="w-full">
								<li className="hover:bg-gray-100 p-2">
									<a href="/newsletters">Newsletters</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="w-auto px-6  h-full relative group flex items-center text-[#19194D] max-w-980:hidden">
						<a
							className="text-[0.9rem] font-sans hover:cursor-pointer"
							style={{ fontWeight: "400" }}
							href="https://tpcell.iiitkota.ac.in/"
						>
							PLACEMENTS
						</a>
					</div>

					<div className="hidden w-full h-full text-[#19194D] max-w-980:flex max-w-980:justify-center max-w-980:items-center">
						<MenuIcon onClick={toggleMobileMenu} className="cursor-pointer" />
					</div>
				</div>
			</div>

			{/* Mobile Menu Modal */}
			<div
				className={`fixed top-2 right-2 md:right-8 w-[95vw] md:w-[60vw] h-auto flex items-center justify-center transition-opacity duration-300 ${
					isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				<div
					className={`bg-white border-b-8 border-[#0E407C] shadow-2xl w-full h-full p-6 transition-opacity duration-300 transform ${
						isMobileMenuOpen ? "opacity-100" : "opacity-95"
					}`}
				>
					<div className="flex justify-between items-center border-b border-gray-200 text-[#172B4D] pb-4">
						<div className="w-auto h-auto flex gap-2 justify-start items-center">
							<a href="/">
								<img src={Logo} alt="home_page" className="w-10 h-10" />
							</a>
							<h3 className="text-lg font-semibold tracking-wide">MENU</h3>
						</div>
						<CloseIcon onClick={toggleMobileMenu} className="cursor-pointer" />
					</div>
					<div className="mt-4">
						<ul className="space-y-3">
							<li>
								<button className="w-full text-left text-[#172B4D]">
									<a
										className="flex gap-3 items-center text-base font-medium"
										href="/about"
										onClick={toggleMobileMenu}
									>
										<InfoIcon />
										About Us
									</a>
								</button>
							</li>
							<li>
								<button
									onClick={() => handleSubMenuToggle("alumni")}
									className="w-full text-left text-[#172B4D]"
								>
									<div className="flex gap-3 items-center text-base font-medium">
										<HelpIcon />
										Alumni Assist
										<span className="ml-auto">
											{activeSubMenu === "alumni" ? "-" : "+"}
										</span>
									</div>
								</button>
								<div
									className={`pl-6 overflow-hidden transition-max-height duration-300 ease-in-out ${
										activeSubMenu === "alumni" ? "max-h-40" : "max-h-0"
									}`}
								>
									<ul className="space-y-2 mt-2 text-sm font-normal border-l border-gray-200">
										<li
											className="py-2 pl-4 text-[#172B4D] hover:bg-gray-100 rounded"
											onClick={toggleMobileMenu}
										>
											<a href="/alumni/prominent-alumni">Prominent Alumni</a>
										</li>
										<li
											className="py-2 pl-4 text-[#172B4D] hover:bg-gray-100 rounded"
											onClick={toggleMobileMenu}
										>
											<a href="/alumni/gallery">Alumni Gallery</a>
										</li>
										<li
											className="py-2 pl-4 text-[#172B4D] hover:bg-gray-100 rounded"
											onClick={toggleMobileMenu}
										>
											<a href="/alumni/contact">Contact Us</a>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<a
									href="/directory"
									onClick={toggleMobileMenu}
									className="w-full text-left text-[#172B4D]"
								>
									<div className="flex gap-3 items-center text-base font-medium">
										<FolderSharedIcon />
										Directory
									</div>
								</a>
							</li>
							<li>
								<button
									onClick={() => handleSubMenuToggle("events")}
									className="w-full text-left text-[#172B4D]"
								>
									<div className="flex gap-3 items-center text-base font-medium">
										<EventIcon />
										Events
										<span className="ml-auto">
											{activeSubMenu === "events" ? "-" : "+"}
										</span>
									</div>
								</button>
								<div
									className={`pl-6 overflow-hidden transition-max-height duration-300 ease-in-out ${
										activeSubMenu === "events" ? "max-h-40" : "max-h-0"
									}`}
								>
									<ul className="space-y-2 mt-2 text-sm font-normal border-l border-gray-200">
										<li
											className="py-2 pl-4 text-[#172B4D] hover:bg-gray-100 rounded"
											onClick={toggleMobileMenu}
										>
											<a href="/events">Events</a>
										</li>
										<li
											className="py-2 pl-4 text-[#172B4D] hover:bg-gray-100 rounded"
											onClick={toggleMobileMenu}
										>
											<a href="/newsletters">Newsletters</a>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<a
									href="/newsletters"
									onClick={toggleMobileMenu}
									className="w-full text-left text-[#172B4D]"
								>
									<div className="flex gap-3 items-center text-base font-medium">
										<FeedIcon />
										Newsletters
									</div>
								</a>
							</li>
							<li>
								<a
									href="https://tpcell.iiitkota.ac.in/"
									onClick={toggleMobileMenu}
									className="w-full text-left text-[#172B4D]"
								>
									<div className="flex gap-3 items-center text-base font-medium">
										<WorkIcon />
										Placements
									</div>
								</a>
							</li>
							{/* <li>
								<a href="/signin">
									<div className="flex gap-3 items-center text-[#172B4D] text-base font-medium">
										<LockOpenIcon />
										Sign In
									</div>
								</a>
							</li> */}
							{isLoggedIn && user ? (
								<>
									<li className="w-full h-auto flex gap-3">
										{user.profilePicture ? (
											<a href="/profile/me">
												<img
													src={user.profilePicture}
													alt="Profile"
													className="w-6 h-6 rounded-full object-cover"
												/>
											</a>
										) : (
											<div className="bg-gray-400 w-full h-full"></div>
										)}
										<a href="/profile/me">
											<div className="flex gap-3 items-center text-[#172B4D] text-base font-medium">
												Profile
											</div>
										</a>
									</li>
									<li>
										<a href="/signin">
											<div className="flex gap-3 items-center text-[#172B4D] text-base font-medium">
												<LogoutIcon />
												Sign In
											</div>
										</a>
									</li>
								</>
							) : (
								<li>
									<a href="/signin">
										<div className="flex gap-3 items-center text-[#172B4D] text-base font-medium">
											<LockOpenIcon />
											Sign In
										</div>
									</a>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
