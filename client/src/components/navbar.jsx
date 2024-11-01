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
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TopLayer from "./topLayer.jsx";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSubMenu, setActiveSubMenu] = useState(null);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleSubMenuToggle = (menu) => {
		setActiveSubMenu(activeSubMenu === menu ? null : menu);
	};

	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const token = localStorage.getItem("token");

	useEffect(() => {
		const fetchUser = async () => {
			if (token) {
				try {
					const response = await axios.get(
						"https://alumportal-iiitkotaofficial.onrender.com/api/profile/me",
						{ headers: { Authorization: `Bearer ${token}` } }
					);
					setUser(response.data);
					setIsLoggedIn(true); // Set logged in after successfully fetching user
				} catch (error) {
					setError(error.message);
					setIsLoggedIn(false); // Set logged out if there's an error
				}
			} else {
				setIsLoggedIn(false);
			}
		};
	
		fetchUser();
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
						{/* <div className="rounded-md absolute top-12 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 bg-white drop-shadow-2xl py-2 mt-2 w-[8rem] transition-all duration-300 ease-in-out transform translate-y-2">
							<ul className="w-full">
								<li className="hover:bg-gray-100 p-2">
									<a href="/placements">Placements</a>
								</li>
							</ul>
						</div> */}
					</div>

					<div className="hidden w-full h-full text-[#19194D] max-w-980:flex max-w-980:justify-center max-w-980:items-center">
						<MenuIcon onClick={toggleMobileMenu} className="cursor-pointer" />
					</div>
				</div>
			</div>

			{/* Mobile Menu Modal */}
			<div
				className={`fixed top-2 right-2 md:right-8 w-[95vw] md:w-[60vw] h-auto flex items-center justify-center transition-transform duration-300 ${
					isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				<div
					className={`bg-white  border-b-8 border-[#0E407C] shadow-2xl w-full h-full p-6 transition-transform duration-300 transform ${
						isMobileMenuOpen ? "opacity-100" : "opacity-95"
					}`}
				>
					<div className="flex justify-between items-center border-b border-gray-200 text-[#172B4D] pb-4">
						{/* <h2 className="text-xl font-bold">Menu</h2> */}
						<div className="w-auto h-auto flex gap-2 justify-start items-center">
							<a href="/"><img src={Logo} alt="home_page" className="w-12 h-12" /></a>
							<h3 className="font-bold">MENU</h3>
						</div>
						<CloseIcon onClick={toggleMobileMenu} className="cursor-pointer" />
					</div>
					<div className="mt-4">
						<ul>
							<li className="py-2">
								<button
									className="w-full text-left text-[#172B4D]"
								>
									<a className="flex gap-3 justify-start items-center font-semibold" href="/about" onClick={toggleMobileMenu}>
										<InfoIcon />
										ABOUT US
									</a>
								</button>
							</li>
							<li className="py-2">
								<button
									onClick={() => handleSubMenuToggle("alumni")}
									className="w-full text-left text-[#172B4D]"
								>
									<div className="flex gap-3 justify-start items-center font-semibold">
										<HelpIcon />
										ALUMNI ASSIST
									</div>
								</button>
								{activeSubMenu === "alumni" && (
									<ul className="pl-4 mt-2">
										<li className="py-2 text-[#172B4D]" onClick={toggleMobileMenu}>
											<a href="/alumni/prominent-alumni">Prominent Alumni</a>
										</li>
										<li className="py-2 text-[#172B4D]" onClick={toggleMobileMenu}>
											<a href="/alumni/gallery">Alumni Gallery</a>
										</li>
										<li className="py-2 text-[#172B4D]" onClick={toggleMobileMenu}>
											<a href="/alumni/contact">Contact Us</a>
										</li>
									</ul>
								)}
							</li>
							<li className="py-2 text-[#172B4D]">
								<a href="/directory" onClick={toggleMobileMenu}>
									<div className="flex gap-3 justify-start items-center font-semibold">
										<FolderSharedIcon /> DIRECTORY
									</div>
								</a>
							</li>
							<li className="py-2">
								<button
									onClick={() => handleSubMenuToggle("events")}
									className="w-full text-left"
								>
									<div className="flex gap-3 justify-start items-center text-[#172B4D] font-semibold">
										<EventIcon />
										EVENTS
									</div>
								</button>
								{activeSubMenu === "events" && (
									<ul className="pl-4 mt-2">
										<li className="py-2 border-b border-gray-200">
											<a href="/events" onClick={toggleMobileMenu}>Events</a>
										</li>
										<li className="py-2 border-b border-gray-200 font-semibold">
											<a href="/newsletters" onClick={toggleMobileMenu}>Newsletters</a>
										</li>
									</ul>
								)}
							</li>
							<li className="py-2">
								<a href="/newsletters" onClick={toggleMobileMenu}>
									<div className="flex gap-3 justify-start items-center text-[#172B4D] font-semibold">
										<FeedIcon />
										NEWSLETTERS
									</div>
								</a>
							</li>
							<li className="py-2">
								<a href="https://tpcell.iiitkota.ac.in/" onClick={toggleMobileMenu}>
									<div className="flex gap-3 justify-start items-center text-[#172B4D] font-semibold">
										<WorkIcon />
										PLACEMENTS
									</div>
								</a>
							</li>
							{isLoggedIn && user ? (
								<>
									<li className="py-2">
										<a href="/profile/me">
											<div className="flex gap-3 justify-start items-center text-[#172B4D] font-semibold">
												<AccountCircleIcon />
												Profile
											</div>
										</a>
									</li>
									<li className="py-2">
										<a href="/signin">
											<div className="flex gap-3 justify-start items-center text-[#172B4D] font-semibold">
												<ExitToAppIcon />
												SIGN OUT
											</div>
										</a>
									</li>
								</>
							) : (
								<li className="py-2">
									<a href="/signin">
										<div className="flex gap-3 justify-start items-center text-[#172B4D] font-semibold">
											<LockOpenIcon />
											SIGN IN
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
